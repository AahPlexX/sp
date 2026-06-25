import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { join } from "node:path";
import { siteBase } from "../vite.config.js";

const outputDirectory = "dist";
const indexPath = join(outputDirectory, "index.html");

function collectAssetPaths(html) {
  const matches = [
    ...html.matchAll(/<script\s+[^>]*type="module"[^>]*src="([^"]+)"[^>]*>/g),
    ...html.matchAll(/<link\s+[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)
  ];

  return [...new Set(matches.map((match) => match[1]))];
}

function toOutputPath(assetPath) {
  if (!assetPath.startsWith(siteBase)) {
    throw new Error(`Build asset does not use the configured base path: ${assetPath}`);
  }

  return join(outputDirectory, assetPath.slice(siteBase.length));
}

try {
  const html = await readFile(indexPath, "utf8");

  if (html.includes("/src/") || html.includes("app.js")) {
    throw new Error("Build output still references source-only application files.");
  }

  const assetPaths = collectAssetPaths(html);
  const moduleScripts = assetPaths.filter((path) => path.endsWith(".js"));
  const stylesheets = assetPaths.filter((path) => path.endsWith(".css"));

  if (moduleScripts.length === 0) {
    throw new Error("Build output does not include a module JavaScript asset.");
  }

  if (stylesheets.length === 0) {
    throw new Error("Build output does not include a stylesheet asset.");
  }

  await Promise.all(assetPaths.map((assetPath) => access(toOutputPath(assetPath), constants.R_OK)));

  console.log(`Build artifact verified: ${moduleScripts.length} JavaScript asset(s), ${stylesheets.length} stylesheet asset(s).`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}

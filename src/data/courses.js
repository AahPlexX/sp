export const courses = [
  {
    id: "strategy-systems",
    area: "Business",
    label: "Strategy",
    title: "Business Strategy: From Choices to Action",
    summary: "Turn a broad business aim into clear choices, priorities, and measures that guide day-to-day work.",
    level: "Foundation",
    lessons: [
      {
        title: "A strategy begins with a choice",
        body: [
          "A business cannot put the same energy into every customer, product, location, and improvement at once. A useful direction starts by deciding where effort will be concentrated and what will not receive the same attention.",
          "That decision gives people a shared basis for judging new work. Instead of asking whether an idea sounds promising in isolation, they can ask whether it supports the chosen direction."
        ],
        note: "A direction is useful when it helps a team decline work that would pull attention away from the result it is trying to create."
      },
      {
        title: "Turn a direction into operating priorities",
        body: [
          "A direction becomes practical when it changes what people do. Priorities name the small number of results that deserve deliberate attention during a defined period.",
          "Each priority needs a visible owner, a measure that can be checked, and a regular point where progress is discussed. Without those parts, a priority remains a statement of hope."
        ],
        note: "A priority becomes manageable when a person can explain what progress would look like before beginning the work."
      },
      {
        title: "Use measures to learn, not to decorate",
        body: [
          "A measure is a fact that helps people see whether work is moving in the intended direction. It can show speed, cost, quality, reliability, or another result that matters to the chosen direction.",
          "A number by itself does not explain why something happened. Teams need to pair the number with observation, discussion, and a decision about the next action."
        ],
        note: "Choose measures that change a decision, not measures that only make a report look complete."
      }
    ]
  },
  {
    id: "operating-rhythm",
    area: "Business",
    label: "Operations",
    title: "Operating Rhythm for Reliable Teams",
    summary: "Build a repeatable cadence for decisions, handoffs, review, and improvement without adding unnecessary meetings.",
    level: "Foundation",
    lessons: [
      {
        title: "Reliable work needs a visible rhythm",
        body: [
          "When work arrives unpredictably, people often respond with more messages, more meetings, and more urgent requests. That can make activity feel high while making outcomes less reliable.",
          "A working rhythm gives recurring work a known place to be reviewed, decided, and handed forward. It reduces the amount of time people spend guessing where information belongs."
        ],
        note: "The purpose of a rhythm is not to fill calendars. It is to make important work easier to see and move."
      },
      {
        title: "Separate decisions from updates",
        body: [
          "An update tells others what has happened. A decision chooses what should happen next. Treating both as the same kind of conversation makes meetings longer and leaves responsibility unclear.",
          "Before a recurring discussion, name which items need a decision and which only need to be recorded. The group can then spend its limited time where judgment is needed."
        ],
        note: "A meeting with no stated decision can often be replaced by a written update."
      },
      {
        title: "Review the system, not just the latest result",
        body: [
          "A recent success or failure can be useful evidence, but it is only one event. Looking for repeated patterns helps a team understand whether the way work is arranged is helping or hurting the result.",
          "Reviewing the system means examining the handoffs, information, timing, and choices that repeatedly shape the work."
        ],
        note: "A durable improvement changes the conditions that produce the result, not only the response to one result."
      }
    ]
  },
  {
    id: "javascript-foundations",
    area: "Programming",
    label: "JavaScript",
    title: "JavaScript: Building Clear Browser Behavior",
    summary: "Understand how a web page receives information, makes decisions, changes what people see, and responds to actions.",
    level: "Foundation",
    lessons: [
      {
        title: "A web page can react to an action",
        body: [
          "A web page can contain parts that a person can press, type into, or choose. A browser can notice one of those actions and run instructions in response.",
          "Those instructions can read information from the page, decide what should happen, and change a part of the page. This is how a static document becomes an interactive tool."
        ],
        note: "Keep each response close to the action it supports so a future reader can trace what happens without searching through unrelated work."
      },
      {
        title: "Store one piece of information with a clear name",
        body: [
          "An interactive page often needs to remember a small fact while it is open, such as a selected course, a search phrase, or the number of completed lessons.",
          "Giving that fact a clear name prevents it from being confused with another fact. A good name describes what the information represents, not the temporary way it is displayed."
        ],
        note: "Clear names reduce mistakes because they let a reader understand purpose before following the surrounding instructions."
      },
      {
        title: "Change the page from current information",
        body: [
          "A page stays consistent when its visible content is produced from the information it currently holds. When the information changes, the page can be rebuilt or the affected part can be updated.",
          "This approach prevents one part of the screen from saying one thing while another part still reflects an older state."
        ],
        note: "Before changing what a person sees, decide which stored fact is the source of truth for that part of the page."
      }
    ]
  },
  {
    id: "html-meaning",
    area: "Programming",
    label: "HTML",
    title: "HTML: Meaningful Structure for the Web",
    summary: "Learn how browsers and assistive technology understand content before visual styling is added.",
    level: "Foundation",
    lessons: [
      {
        title: "Structure gives information a job",
        body: [
          "A page is more useful when its parts describe what they are for. A page title, a main area, a list, a button, and a link each give a browser and a person different information about purpose.",
          "Choosing a part based on purpose creates a stronger foundation than choosing it only because it can be styled to look a certain way."
        ],
        note: "Build the meaning of the page first. Visual design can then reinforce that meaning instead of having to replace it."
      },
      {
        title: "A heading creates a map",
        body: [
          "Long pages become hard to scan when every line looks equally important. Headings create a visible map by showing the major subjects and the smaller subjects inside them.",
          "The order of headings should follow the order of ideas. That lets a reader move through the page without guessing which information belongs together."
        ],
        note: "A heading should introduce the content that follows it, rather than repeating decorative wording."
      },
      {
        title: "Use real controls for real actions",
        body: [
          "A person should be able to use a page with a keyboard, touch, or a pointing device. Real links and buttons already carry the expected behavior for these actions.",
          "Replacing them with ordinary visual containers can remove that behavior unless it is rebuilt carefully. Using the right control avoids creating an unnecessary accessibility problem."
        ],
        note: "When something changes the current page, use a button. When it takes someone to another location, use a link."
      }
    ]
  },
  {
    id: "css-layout",
    area: "Programming",
    label: "CSS",
    title: "CSS Layout: Responsive Interfaces Without Guesswork",
    summary: "Create layouts that adapt to narrow and wide screens while keeping text readable and controls reachable.",
    level: "Foundation",
    lessons: [
      {
        title: "A layout needs room to adapt",
        body: [
          "A screen can be narrow, wide, tall, short, zoomed, or shown with larger text. A layout that depends on one fixed width can break when any of those conditions change.",
          "Responsive layout starts by allowing groups of content to wrap, shrink, grow, or stack when space changes. The page becomes resilient because it is responding to available room instead of one expected device."
        ],
        note: "Treat a screen size as a condition to respond to, not as a fixed target to imitate."
      },
      {
        title: "Keep reading comfortable at every width",
        body: [
          "Text that is too small is difficult to read. Text that grows without a limit can also become difficult to scan. A useful layout lets text grow within a lower and upper boundary.",
          "The same principle applies to the width of a reading column. Limiting extremely long lines reduces the effort required to find the next line of text."
        ],
        note: "Good responsive design protects the lower limit and upper limit of readability at the same time."
      },
      {
        title: "Arrange groups before positioning details",
        body: [
          "A page is easier to maintain when the main groups are arranged with a layout system that understands available space. Individual nudges should be reserved for small details, not used to hold the whole page together.",
          "Start with the page sections, then the groups inside each section, then the individual pieces."
        ],
        note: "When a layout breaks, inspect the containing group first before changing the item inside it."
      }
    ]
  },
  {
    id: "python-data-work",
    area: "Programming",
    label: "Python",
    title: "Python: Practical Work With Data",
    summary: "Use clear instructions to turn a collection of records into useful, repeatable information for a business decision.",
    level: "Foundation",
    lessons: [
      {
        title: "A record holds related facts",
        body: [
          "A record keeps facts that belong together. A customer record might hold a name, a date, and a purchase amount. A collection is made from many records of the same general kind.",
          "Keeping related facts together makes it possible to ask consistent questions across the collection without rebuilding the information every time."
        ],
        note: "Start by naming what one record represents before deciding how to analyze many records."
      },
      {
        title: "Turn a question into repeatable steps",
        body: [
          "A useful analysis begins with a question that can be checked. For example, a team may want to know which service takes the longest or which location has the highest number of delayed orders.",
          "The answer becomes dependable when the same steps can be repeated on new information. That means being clear about what is included, what is excluded, and how a result is calculated."
        ],
        note: "A repeatable method is more valuable than one result because it can be checked when the information changes."
      },
      {
        title: "Make the result understandable",
        body: [
          "A correct result is not enough when the people making decisions cannot see what it means. The output should state what was measured, the period covered, and any important limitation.",
          "Presenting those details protects a decision from being based on a number that has lost its context."
        ],
        note: "Every useful result answers both what happened and how the result should be interpreted."
      }
    ]
  },
  {
    id: "full-stack-systems",
    area: "Programming",
    label: "Full Stack",
    title: "Full-Stack Systems: One Product, Connected Parts",
    summary: "See how a person-facing interface, trusted data, and a service that coordinates them work together as one product.",
    level: "Intermediate",
    lessons: [
      {
        title: "One product can have several responsibilities",
        body: [
          "A modern web product often needs one part that a person sees and uses, another part that stores long-term information, and another part that decides whether a request is allowed and how information should move.",
          "Keeping these responsibilities clear helps prevent private information from being treated like ordinary page text and helps each part be changed without breaking the whole product."
        ],
        note: "A visible page is only one part of a product when the product needs accounts, shared data, or protected actions."
      },
      {
        title: "A request needs a trusted path",
        body: [
          "When a person asks to view or change saved information, the product needs to know who is asking and whether that person is allowed to perform the action. The request should be checked before private information is returned or changed.",
          "Browser code is visible to the person using the browser. Private rules and secrets must not be placed there."
        ],
        note: "A trustworthy system treats the browser as a place to request work, not as the place that decides every permission."
      },
      {
        title: "Shared progress requires shared storage",
        body: [
          "Progress that lives only in one browser cannot automatically appear on a phone, tablet, and laptop. For that to happen, the progress must be connected to an identified person and saved in a shared service.",
          "The same service then returns the current progress when that person uses another device."
        ],
        note: "Cross-device continuity requires identity and shared storage, not only a visual dashboard."
      }
    ]
  }
];

export const courseAreas = ["All", "Business", "Programming"];

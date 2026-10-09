const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const OUTPUT_DIR = path.join(__dirname, "output");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "README.md");

const required = (label) => (input) =>
  input.trim() !== "" || `Please enter ${label}.`;

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: required("your GitHub username"),
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (input) =>
      /^\S+@\S+\.\S+$/.test(input.trim()) || "Please enter a valid email address.",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    validate: required("a project name"),
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
    validate: required("a description"),
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [...Object.keys(generateMarkdown.LICENSES), "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    validate: required("usage information"),
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    default: "Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.",
  },
];

function writeToFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const trimmed = Object.fromEntries(
      Object.entries(answers).map(([key, value]) => [key, String(value).trim()])
    );
    writeToFile(OUTPUT_FILE, generateMarkdown(trimmed));
    console.log(`\nREADME.md generated at ${path.relative(process.cwd(), OUTPUT_FILE)}`);
  } catch (error) {
    console.error("Could not generate the README:", error.message);
    process.exitCode = 1;
  }
}

init();

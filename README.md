<h1 align="center">📝 README Generator</h1>

<p align="center">A command-line tool that asks a few questions about your project and writes a professional README.md for you.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&amp;logo=npm&amp;logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript">
</p>

## Features

- Interactive prompts in the terminal, with validation for required answers and email format
- Choose a license (MIT, Apache 2.0, GPL 3.0, BSD 3, or None). The license badge and License section are filled in to match.
- Generated README includes:
  - Title and license badge
  - Description
  - Table of contents with working links
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions, with links to your GitHub profile and email
- Writes to `application/output/README.md`, so it never overwrites an existing README

See [`examples/sample-README.md`](examples/sample-README.md) for real output.

## Built With

- [Node.js](https://nodejs.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer) v8

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 12 or newer

### Installation

```bash
git clone https://github.com/ChristianKrantz11/readme-generator.git
cd readme-generator/application
npm install
```

### Usage

```bash
npm start
```

Answer the prompts. When you finish, your README is saved to `application/output/README.md`.

| Prompt | Used for |
| --- | --- |
| GitHub username | Questions section (profile link) |
| Email address | Questions section (email link) |
| Project name | README title |
| Short description | Description section |
| License | Badge and License section |
| Install command (default `npm install`) | Installation section |
| Test command (default `npm test`) | Tests section |
| Usage info | Usage section |
| Contributing info | Contributing section |

## Project Structure

```
├── examples/
│   └── sample-README.md     # Example of generated output
└── application/
    ├── index.js             # Prompts and file writing
    ├── package.json
    └── utils/
        └── generateMarkdown.js  # Builds the README text and license badge
```

## User Story

<details>
<summary>Original assignment user story</summary>

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

</details>

## Author

[ChristianKrantz11](https://github.com/ChristianKrantz11)

# README Generator

A command-line Node.js app that asks you a few questions about your project and writes a ready-to-use `README.md` for it.

## Features

- Interactive prompts in the terminal (powered by [Inquirer](https://www.npmjs.com/package/inquirer))
- License picker (MIT, Apache 2.0, GPL 3.0, BSD 3, or None) that adds a matching license badge
- Generated README includes:
  - Project title and license badge
  - Description
  - Table of contents
  - Contributing guidelines
  - Questions (your GitHub username and email)
  - Install guide
  - Tests
  - License

## Built With

- [Node.js](https://nodejs.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer) v6

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

```bash
git clone https://github.com/ChristianKrantz11/readme-generator.git
cd readme-generator/application
npm install
```

### Usage

From the `application` folder, run:

```bash
node index.js
```

Answer the prompts:

| Prompt | Used for |
| --- | --- |
| GitHub username | Questions section |
| Email address | Questions section |
| Project name | README title |
| Short description | Description section |
| License | Badge and License section |
| Install command (default `npm i`) | Install Guide section |
| Test command (default `npm test`) | Tests section |
| Usage info | Collected by the prompts |
| Contributing info | Contributing section |

When you finish, a new `README.md` is written to the folder you ran the command from.

## Project Structure

```
application/
├── index.js                 # Prompts and file writing
├── package.json
└── utils/
    └── generateMarkdown.js  # Builds the README text from your answers
```

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Author

[ChristianKrantz11](https://github.com/ChristianKrantz11)

// License details used for the badge and the License section
const LICENSES = {
  MIT: {
    badge: "MIT-yellow",
    url: "https://opensource.org/licenses/MIT",
  },
  "Apache 2.0": {
    badge: "Apache_2.0-blue",
    url: "https://opensource.org/licenses/Apache-2.0",
  },
  "GPL 3.0": {
    badge: "GPLv3-blue",
    url: "https://www.gnu.org/licenses/gpl-3.0",
  },
  "BSD 3": {
    badge: "BSD_3--Clause-orange",
    url: "https://opensource.org/licenses/BSD-3-Clause",
  },
};

function renderLicenseBadge(license) {
  const details = LICENSES[license];
  if (!details) return "";
  return `[![License: ${license}](https://img.shields.io/badge/License-${details.badge}.svg)](${details.url})`;
}

function renderLicenseSection(license) {
  const details = LICENSES[license];
  if (!details) return "This project is not currently licensed.";
  return `This project is licensed under the [${license} license](${details.url}).`;
}

// Turn answers into the README text
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);

  return `# ${data.title}
${badge ? `\n${badge}\n` : ""}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Install the dependencies by running:

\`\`\`bash
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

Run the tests with:

\`\`\`bash
${data.test}
\`\`\`

## Questions

Have a question? Find me on GitHub at [${data.github}](https://github.com/${data.github}) or email me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
module.exports.LICENSES = LICENSES;

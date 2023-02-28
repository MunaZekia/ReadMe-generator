function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "BSD") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else if (license === "GPL") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [License](#license)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## License 
  ${data.license}

  ## Questions
  contact me at
  [${data.email}](mailto:${data.email})
   or visit my github page at
  [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;

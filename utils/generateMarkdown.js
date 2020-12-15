// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ![badge](https://img.shields.io/badge/license-${data.projectLicense}-brightgreen)<br />

  ## Table of Contents

`;
}

module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.projectLicense}-brightgreen)<br />

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contribution)
  - [Tests](#Test)
  - [License](#License)
  - [GitHub Username](#GitHub)
  - [Email Address](#Email)

  
  ## Description
    ${data.projectDescription}

  ## Installation
    ${data.projectInstallation}

  ## Usage
    ${data.projectUsage}

  ## Contribution
    ${data.projectContribution}

  ## Test
    ${data.projectTest}

  ## GitHub
    ${data.gitUser}

  ## Email
    ${data.projectEmail}


`;
}

module.exports = generateMarkdown;

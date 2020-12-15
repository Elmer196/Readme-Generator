// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ![badge](https://img.shields.io/badge/license-${data.projectLicense}-brightgreen)<br />

  ## Table of Contents
  - [Description](#projectDescription)
  - [Installation](#projectInstallation)
  - [Usage](#projectUsage)
  - [Contributing](#projectContribution)
  - [Tests](#projectTest)
  - [License](#projectLicense)
  - [Git Username](#gitUser)
  - [Email](#projectEmail)

  
  ## Description
    ${data.projectDescription}

  ## Installation
    ${data.projectInstallation}

  ## Usage
    ${data.projectUsage}

  ## Contributing
    ${data.projectContribution}

  ## Test
    ${data.projectTest}

  ## GitHub Username
    ${data.gitUser}

  ## Email Address
    ${data.projectEmail}


`;
}

module.exports = generateMarkdown;

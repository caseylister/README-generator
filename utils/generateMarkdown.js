// Function to return a message if user doesn't want contributors
function renderContribute(confirmContribute, data) {
  if (!confirmContribute) {
    return `Thank you for your interest in assisting with my project! At this time, I will not be accepting contributions.`;
  } else {
    return `
  ${data}
    `;
  }
}


// Function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) { 
    if (license !== 'no license') {
      return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
      return ' ';
    }
  }

 // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return ' ';
    }
  }

// Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [License](#Contents)
    This project is licensed under:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }


    // Function that returns license in table of contents
   // If there is no license, return an empty string
  function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return ` * [License](#license)`;
    } else {
      return '';
    }
   }


// Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
    # ${data.title}
  
    ## Contents
  
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## [Description](#Contents)
  
    ${data.description}
  
    ## [Installation](#Contents)
  
    ${data.installation}
  
    ## [Usage](#Contents)
  
    ${data.usage}
  
    For more information on Markdown syntax and how to add screenshots, visit the following website:
    [Markdown Guide](https://www.markdownguide.org/)
  
    ${renderLicenseSection(data.license)}
  
    ## [Contributions](#Contents)
  
    ${renderContribute(data.confirmContribute, data.contribution)}
  
    ## [Tests](#Contents)
  
    ${data.test}
  
    ## [Questions](#Contents)
  
    You can contact me by clicking the following links!
  
    [Email: ${data.email}](mailto:${data.email})
  
    [GitHub](https://github.com/${data.username})
  `;
  }
  
  module.exports = generateMarkdown;
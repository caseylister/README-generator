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
   

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
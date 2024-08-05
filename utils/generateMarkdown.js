const licenseArray = [
  {
    name: 'MIT',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'Apache License 2.0',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    name: 'GNU General Public License v3',
    badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/agpl-3.0',
  },
  {
    name: 'BSD 3-Clause License',
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    link: 'https://opensource.org/licenses/MPL-2.0',
  },]



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseSelection) {
  const { license } = licenseSelection
  if (license === "None") {
    return ""
  } else {
    const licenseObj = licenseArray.filter(licenseEl => {
      return licenseEl.name === license
    })
    const [selectedLicense] = licenseObj
    return `![License badge]${selectedLicense.badge}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseSelection) {
  const { license } = licenseSelection
  if (license === "None") {
    return ""
  } else {
    const licenseObj = licenseArray.filter(licenseEl => {
      return licenseEl.name === license
    })
    const [selectedLicense] = licenseObj
    return selectedLicense.link
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseSelection) {
  const { license } = licenseSelection
  if (license === "None") {
    return ""
  } else {
    const licenseObj = licenseArray.filter(licenseEl => {
      return licenseEl.name === license
    })
    const [selectedLicense] = licenseObj
    return selectedLicense.name
  }
}

// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  const badgeLink = renderLicenseBadge(data);
  const licenseName = renderLicenseSection(data)
  const licenseLink = renderLicenseLink(data);
  return `
  # ${data.title}
  ${badgeLink}
  </br>
  ## Table of Contents
  1. [Instructions](#1-instructions)
  2. [Description](#2-description)
  3. [Contribution Guidelines](#3-contribution-guidelines)
  4. [Testing the Application](#4-testing-the-application)
  5. [License](#5-license)
  6. [Questions](#6-questions)

  ## 1. Instructions
  ${data.instructions}

  ## 2. Description
  ${data.description}

  ## 3. Contribution Guidelines
  ${data.contribution}

  ## 4. Testing the Application
  ${data.testing} 

  ## 5. License
  ${licenseName}</br>
  ${licenseLink}

  ## 6. Questions:
  Contact me with questions at:</br>
    - Github: *${data.githubName}*</br>
    - Email: *${data.email}*
`;
}

module.exports = generateReadme



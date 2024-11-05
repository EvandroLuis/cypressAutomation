# Cypress Test Automation Project

QA Technical Test: Luma Health Website Automation

This project is designed for test automation on Luma Health Website using Cypress, a popular end-to-end testing framework. The goal is to ensure that features on Luma Health Websitecan works properly by creating a readable, reliable, and maintainable automtion test script.



## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Installing Dependencies and Plugins](#installing-dependencies)
- [Running Tests](#running-tests)
- [Test Output](#test-output)
- [To-Do List](#to-do-list)
- [Feedback and Contributions](#feedback-and-contributions)

---

## Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

If Node.js and npm aren't installed, follow the [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:EvandroLuis/cypressAutomation.git
  
2. Install Cypress locally:
   ```bash
   npm install cypress --save-dev
   
This command installs Cypress and saves it as a development dependency in your project.


## Installing Dependencies and Plugins
Run the following command to install all dependencies required for the project:
   ```bash
  npm install
   ```

This command installs Cypress along with any other necessary dependencies defined in the project.

Cypress Plugins

[cypress-axe](https://www.npmjs.com/package/cypress-axe)

cypress-axe is a Cypress plugin that enables accessibility testing with the Axe core library.

   ```bash
  npm install --save-dev cypress-axe
   ```

[cypress-iframe](https://www.npmjs.com/package/cypress-iframe)

cypress-iframe is a Cypress plugin that allows interaction with iframes.

To use it:
   ```bash
  npm install -D cypress-iframe
  ```

This command installs Cypress along with any other necessary dependencies defined in the project.

## Running Tests
To execute tests, you have two primary options:

Run tests in the Cypress Test Runner (GUI):
```bash
  npx cypress open
```
This opens the Cypress Test Runner, allowing you to run individual test files interactively.

Run tests in the Command Line (headless mode):
```bash
  npx cypress run
```
This command runs all tests in headless mode, which is useful for CI/CD pipelines.

## Custom Scripts
You can also define custom scripts in the package.json file to make running tests easier, such as:
```bash
  "scripts": {
  "test:gui": "cypress open",
  "test:headless": "cypress run"
  }
```
Now you can run the commands as follows:

GUI mode: npm run test:gui
Headless mode: npm run test:headless
## Test Output

Accessibility Testing

The Accessibility test failed due to several accessibility issues, as detected by cypress-axe. These issues include missing alternative text on img, links without discernible text, or structural HTML problems that can hinder users with disabilities from fully interacting with the application. Addressing these issues is essential to ensure a more inclusive user experience and improve compliance with accessibility standards like WCAG (Web Content Accessibility Guidelines).
![Screenshot 2024-11-05 093707](https://github.com/user-attachments/assets/a860df0b-cb57-4c2d-955d-86437eaadf79)
![Screenshot 2024-11-05 093725](https://github.com/user-attachments/assets/e464109b-5538-451a-8aaa-cdfd0a316b6d)

Home Page with multiples iFrames

Additionally, this test was the first time using the cypress-iframe plugin to interact with iframes in the code. Using this plugin allowed us to easily load and interact with embedded content within iframes, which would have been complex without dedicated support. While cypress-iframe provided a straightforward way to handle these elements, there was a learning curve in configuring the test to work seamlessly within the iframe. This new approach will be beneficial for future tests that involve iframe elements, improving the efficiency and reliability of our test suite.

## To-Do List
 - [ ] Add additional test cases for feature "Request a Demo".
 - [ ] Configure new environments variables.
 - [ ] Implement visual regression tests.
 - [ ] Configure Cypress for integration with CI/CD.
 - [ ] Improve error-handling mechanisms in tests.
 - [ ] Update README with advanced usage examples.
 
## Feedback and Contributions
Feedback and contributions are always welcome! Feel free to open an issue or submit a pull request.

For larger contributions:

Fork this repository.
Create a new branch for your feature/bug fix.
Submit a pull request with a clear description of your changes.

Happy Testing! 🚀

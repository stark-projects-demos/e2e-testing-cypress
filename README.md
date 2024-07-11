# Cypress E2E Testing Demo

This repository showcases the usage of the Stark CI/CD tools to integrate accessibility testing and reporting into a Cypress E2E testing suite.

## Quickstart

To quickly integrate with an existing Cypress workflow, follow these steps:

1. Create/update `.npmrc` to authenticate with the Stark NPM registry and [install the Stark library in your project](package.json#L12)

   ```
   @stark-ci:registry=https://npm.getstark.co
   //npm.getstark.co/:_auth=<<encoded Stark API key>>
   ```

2. Install the Stark [custom commands](cypress/support/e2e.js#L20)

3. Call the Stark accessibility scan [from your code](cypress/e2e/spec.cy.ts#L14)

## Getting Started

To get started with this demo, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/stark-projects-demos/e2e-testing-cypress.git
   ```

2. Configure your `.npmrc` file with your Stark API key:

   ```bash
   @stark-ci:registry=https://npm.getstark.co
   //npm.getstark.co/:_auth=YOUR_API_KEY
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Ensure you have a Project Token if you plan to send results to Stark. By default the tests look for the token in the STARK_PROJECT_TOKEN environment variable. You may copy `.env.example` to `.env` and update the token.

5. Run the E2E tests via command line:

   ```bash
   npm run test
   ```

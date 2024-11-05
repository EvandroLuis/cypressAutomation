// *****************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// *****************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("getIframeBody", () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  cy.log("getIframeBody");

  return (
    cy
      .get(".iframe-full-height", { log: false })
      .its("0.contentDocument.body", { log: false })
      .should("not.be.empty")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then((body) => cy.wrap(body, { log: false }))
  );
});

Cypress.Commands.add("switchToIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

Cypress.Commands.add("validateText", (locator, text) => {
  return cy.get(locator).scrollIntoView().should('contains.text',text)
});

Cypress.Commands.add("validateTitle", (locator, text) => {
  return cy.get(locator).scrollIntoView().should('have.attr','title',text)

});

Cypress.Commands.add("isVisible", (locator) => {
  return cy.get(locator).scrollIntoView().should('be.visible')

});

Cypress.Commands.add("clickInsideIframe", (locator) => {
  return cy.iframe('main > .iframe-full-height').find(locator).click()

});

Cypress.Commands.add("validateTextInIframe", (text) => {
  return cy.iframe('main > .iframe-full-height').should('contains.text',text)
});

Cypress.Commands.add("inputTextInIframe", (locator, input) => {
  return cy.iframe('main > .iframe-full-height').find(locator).type(input)
});

Cypress.Commands.add("selectOptionInIframe", (locator, option) => {
  return cy.iframe('main > .iframe-full-height').find(locator).select(option)

});

Cypress.Commands.add("implicitWaitNewIframe", (locator, option) => {
  return cy.wait(2000)

});

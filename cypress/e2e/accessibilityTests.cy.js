import { terminalLog } from '../support/utils/a11yHelper';

describe("Accessibility Test Cases on Home Page", () => {

  beforeEach(() => {
    cy.visit("https://www.lumahealth.io/");
    cy.injectAxe();
  });
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });
  it("Has no detectable a11y violations on load (filtering to only include critical impact violations)", () => {
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog
    );
  });
});

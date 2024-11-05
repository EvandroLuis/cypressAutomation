/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Login Page Tests', () => {
  beforeEach(() => { 
    cy.visit('https://www.lumahealth.io/')
  })
  it('Homepage Components Validation', () => {
      cy.url().should('include', 'https://www.lumahealth.io/')
      cy.get('.copy').scrollIntoView().should('contains.text','2024 Luma Health Inc')
      cy.validateTitle('.main-menu-v2 > :nth-child(1) > .hide-mobile','Patient Success Platform')
      cy.validateTitle('.third > :nth-child(4) > a','Resources')
      cy.validateTitle(':nth-child(5) > [href="#"]','About us')
      cy.isVisible('#header_login')
      cy.isVisible('#navbar > .actions > .primary')
      cy.validateText('.hero-section-title','Manual Tasks\’ Worst Nightmare')
      cy.isVisible('.hero-button-group > .primary')

    })
    it('Navigation and Contact Form', () => {
      cy.get('#navbar > .actions > .primary').click()
      cy.frameLoaded('main > .iframe-full-height') // frame name
      cy.validateTextInIframe('First Name')
      cy.validateTextInIframe('Last Name')
      cy.validateTextInIframe('Work Email')
      cy.validateTextInIframe('Company Name')
      cy.inputTextInIframe('input[name="firstname"]','Dummy test user')
      cy.inputTextInIframe('input[name="lastname"]','Dummy test user')
      cy.inputTextInIframe('input[name="email"]','dydys9k@pickuplanet.com')
      cy.inputTextInIframe('input[name="phone"]','9999999998')
      cy.inputTextInIframe('input[name="organization_name"]','Dummy test Org Name')
      cy.selectOptionInIframe('select[name="provider_range"]','15-49')
      cy.selectOptionInIframe('select[name="ehr"]',2)
      cy.selectOptionInIframe('select[name="organization_type"]','Specialty Practice')
      cy.inputTextInIframe('textarea[name="what_are_you_interested_in_"]','Lorem ipsum dolor sit amet, consectetur adipiscing elit')
      cy.inputTextInIframe('textarea[name="how_d_you_hear_about_us_"]','Lorem ipsum dolor sit amet, consectetur adipiscing elit')

       // Lines commented to avoid sending emails to oficial website
       // If you want to send it any way, remove bars from the next line:
       //
       //  cy.clickInsideIframe('form > .hs_submit.hs-submit')

     
    })
    
    it('Solutions Page and Page Transition', () => {
      cy.get('a.hide-mobile').click()
      cy.frameLoaded('main > .iframe-full-height') // frame name
      cy.validateTextInIframe('Access & Retention')
      cy.validateTextInIframe('Patient Communication')
      cy.validateTextInIframe('Registration & Appointment Prep')
      cy.validateTextInIframe('Staff Efficienc')
      cy.clickInsideIframe('a[href="https://go.lumahealth.io/patient-success-platform/patient-access-and-retention?hsLang=en"]')
      cy.implicitWaitNewIframe()
      cy.frameLoaded('main > .iframe-full-height') // frame name
      cy.validateTextInIframe('ACCESS AND RETENTION')
      cy.get('a.hide-mobile').click()
      cy.clickInsideIframe('a[href="https://go.lumahealth.io/patient-success-platform/patient-communication/?hsLang=en"]')
      cy.implicitWaitNewIframe()
      cy.validateTextInIframe('PATIENT COMMUNICATION')
      cy.get('a.hide-mobile').click()
      cy.clickInsideIframe('a[href="https://go.lumahealth.io/patient-success-platform/patient-registration/?hsLang=en"]')
      cy.implicitWaitNewIframe()
      cy.validateTextInIframe('REGISTRATION & PREP')
      cy.get('a.hide-mobile').click()
      cy.clickInsideIframe('a[href="https://go.lumahealth.io/patient-success-platform/staff-efficiency/?hsLang=en"]')
      cy.implicitWaitNewIframe()
      cy.validateTextInIframe('STAFF EFFICIENCY')
    })
    
})
const sizes = ['iphone-8', 'samsung-s10', 'ipad-2', 'ipad-mini', [375, 667]]

describe('Responsiveness Tests Cases', () => {

    sizes.forEach((size) => {

        beforeEach(() => { 
            cy.visit('https://www.lumahealth.io/')
        })
        it(`Should display navbar on ${size} screen`, () => {

            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
              } else {
                cy.viewport(size)
              }

            cy.get('.navbar-trigger').click()
            cy.get('.main-menu-v2 > li').should(($lis) => {
                expect($lis, '5 items').to.have.length(5)
                expect($lis.eq(0), 'Patient Success Platform option').to.contain('Platform')
                expect($lis.eq(1), 'Who We Serve option').to.contain('Who We Serve')
                expect($lis.eq(2), 'EHR Integrations option').to.contain('Integrations')
                expect($lis.eq(3), 'Learn option').to.contain('Learn')
                expect($lis.eq(4), 'About us option').to.contain('About us')
              })
            cy.get('.navbar-trigger').click()
            cy.get('.hero-button-group > .primary').click()
            cy.url().should('include','/book-a-demo/')
        })


    })

})
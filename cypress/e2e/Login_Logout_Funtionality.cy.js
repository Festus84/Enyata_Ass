///<refrence types="cypress"/>

it('Google Search', () => {

    //opening the url
    cy.visit('https://tutor.enyata.com')

    //login functionality
    cy.get('[data-testid="email"]').type('Enyatauser@yopmail.com')
    cy.get('#field-2').type ('P@ssw0rd')
    cy.wait(2000)
    cy.get('[data-testid="submit"]').click()
    cy.get('body')
    
     //logout functionality
    cy.get('#popover-trigger-4').click()

    //cy.get('[id^=btn]').click({ multiple: true })

    cy.wait(2000)
    cy.get('.Home_wrap__7j_Ic').click({ multiple: true })
   
    

})
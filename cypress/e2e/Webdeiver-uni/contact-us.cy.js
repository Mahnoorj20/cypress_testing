///<reference types="cypress"/>

describe('Test contact us via webdriver', () => {
  it.only('should be able to submit a successful submission via contact us form', () => {
    //cy.visit('http://www.webdriveruniversity.com/')
    //cy.get('#contact-us > .thumbnail > .section-title').click()
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.document().should('have.a.property','charset').and('eq','UTF-8')
    cy.title().should('include','WebDriver | Contact Us')
    cy.url().should('include','contactus')
    cy.get('[name="first_name"]').type('Mahnoor')
    cy.get('[name="last_name"]').type('Javed')
    cy.get('[name="email"]').type('jmahnoor020@gmail.com')
    cy.get('textarea.feedback-input').type('Testcypress comment.')
    cy.get('[type="submit"]').click()
    //Assertion
    cy.get('h1').should('have.text','Thank You for your Message!')

  })
  it('should not be able to submit a successful submission via contact us form', () => {
  
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('Mahnoor')
    cy.get('[name="last_name"]').type('Javed')
    cy.get('textarea.feedback-input').type('Testcypress comment.')
    cy.get('[type="submit"]').click()

  })
})
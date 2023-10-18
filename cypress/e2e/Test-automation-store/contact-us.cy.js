///<reference types="cypress"/>

describe('Test contact us via test automation store', () => {
    it('should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get("a[href$='contact']").click().then(function(buttontext){
      cy.log("The text of the button is:" + buttontext.text())
    });
    cy.get('#ContactUsFrm_first_name').type("Mahnoor");
    cy.get('#ContactUsFrm_email').type("jmahnoor020@gmail.com");
    //Assertion    
    cy.get('#ContactUsFrm_email').should('have.attr','name','email')

    cy.get('#ContactUsFrm_enquiry').type("Do you offer some additional discount on bulk orders?");
    cy.get('.col-md-6 > .btn').click();
    //Assertion
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    })
   
  })
///<reference types="cypress"/>

describe('Verifying Variable, cypress commands and jQurey commands', () => {

    //   Test Case 1
    it('Navigating to specific product pages', () => {
        // const makeupLink= cy.get("a[href*='=product/category&path=']").contains("Makeup");
        // const skincare = cy.get("a[href*='=product/category&path=']").contains("Skincare");
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
   
    })
    
    // Test Case 2
    it('Navigating to specific product pages', () => {
        // const makeupLink= cy.get("a[href*='=product/category&path=']").contains("Makeup");
        // const skincare = cy.get("a[href*='=product/category&path=']").contains("Skincare");
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        //let exp = "Makeup"; incase we are using bdd approch we need to initialize the variable
        cy.get("h1 .maintext").then(($headertext)=>{
            const headertext= $headertext.text();
            cy.log("Found header text: " + headertext )
            expect(headertext).to.equal('Makeup')
            //assert.equal(headertext,exp)
        })
    })

    // Test Case 3
    it.only('Validate properties of contact us page', () => {

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
           //using cypress commands and chaining 
           cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
           //jQuery Approach
           cy.contains('#ContactUsFrm','Contact Us Form').then(text =>{
            const firstName = text.find('#field_11').text();
            expect(firstName).to.contain('First name');
            //Embebded code (Closures)
            cy.get('#field_11').then( fnText =>{
                cy.log(fnText.text());
                cy.log(fnText)
            })


           })
           
            })
        
   
    })
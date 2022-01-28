

    // it('By ID', () =>{
    //     cy.visit("https://www.facebook.com/")
    //     cy.get('#email')
    // })

    // it('By Class', () =>{
    //     cy.visit("https://www.cypress.io/")
    //     cy.get('.Subscribe__StyledEmail-sc-1hdnlrs-2 giNrGg styled__Input-sc-10l91w3-9 hWZcHD')
    // })

    // it('By Tag', () =>{
    //     cy.visit('https://www.facebook.com/')
    //     cy.get('nav')
    // })

    // it('By Tag value', () =>{
    //     cy.visit('https://www.facebook.com/')
    //     cy.get('[name="pass"]')
    // })

    // it('By different Tag value', () =>{
    //     cy.visit('https://www.facebook.com/')
    //     cy.get('[data-testid="open-registration-form-button"][role="button"]')
    // })

    // it('By Tag and Tag value', () =>{
    //     cy.visit("https://www.cypress.io/")
    //     cy.get('button[class="with-bash-effects undefined NpmButton__Button-sc-8gct4l-0 dYXwUi"]')
    // })

    // it('By Contains', () =>{
    //     cy.visit('https://next.privat24.ua/')
    //     cy.get('[class^="card"]')
    // })
    
    // it('By Contains', () =>{
    //     cy.visit('https://next.privat24.ua/')
    //     cy.get('[class^="card"]').find 
    // })
    
    it('Using get with find and eq',() =>{
            cy.visit('https://next.privat24.ua/deposit/open')
            cy.get('tbody').find('td').find('div').find('button').eq(0)
    }) 

    it.only('Using get with find and eq',() =>{
        cy.viewport(1800,700)
        cy.visit('https://docs.cypress.io/guides/guides/command-line')
        cy.get('nav[class="fixed w-sidebar top-16 bottom-0 right-0 pl-4 pr-8 pb-8 overflow-y-auto space-y-4 hide-scroll"]').find('ul').find('li').eq('4')
}) 
//Finding End ++++
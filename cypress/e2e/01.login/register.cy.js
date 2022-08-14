context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://trpdemo.dto.technology/login')
    })

    it('Register', () => {
        cy.get('.mx-2').click()
        cy.get(':nth-child(1) > .flex-rows > .flex > .outline-none').type('Test01')
    })

})
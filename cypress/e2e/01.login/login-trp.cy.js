context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://trpdemo.dto.technology/login')
    })

    it('login-admin user correct', () => {
        cy.get('.text-3xl').should('contain', 'CMU TRP')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)').type('Admin')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)').type('admin')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div.mt-4.flex.items-center.justify-between > button').click()

    })

    it('login-admin password correct', () => {
        cy.get('.text-3xl').should('contain', 'CMU TRP')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)').type('in')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)').type('in')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div.mt-4.flex.items-center.justify-between > button').click()
    })

    it('login-admin user and password correct ', () => {
        cy.get('.text-3xl').should('contain', 'CMU TRP')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)').type('Admin')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)').type('admin')
        cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div.mt-4.flex.items-center.justify-between > button').click()
    })

})
context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://trpdemo.dto.technology");
  });

  function loginFarmer(userName, password) {
    if (userName == "Farmer") {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)"
      ).type("Farmer");
    } else {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)"
      ).type("famer");
    }

    if (password == "Farmer") {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)"
      ).type("Farmer");
    } else {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)"
      ).type("farmer");
    }
  }

  function clickjogin(bthLogin){
    cy.get('#app > div > div > div > div > div.px-6.py-4 > form > div.mt-4.flex.items-center.justify-between > button').click()
  }

  it('the first page after login success', () => {
    loginFarmer("Farmer" , "Farmer")
    clickjogin()
  });

});

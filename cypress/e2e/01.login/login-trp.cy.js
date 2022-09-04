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
      ).type("farmerUserFailed");
    }

    if (password == "Farmer") {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)"
      ).type("Farmer");
    } else {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)"
      ).type("farmerPasswordFailed");
    }
  }
  function loginAdmin(userName, password) {
    if (userName == "Admin") {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)"
      ).type("Admin");
    } else {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(1)"
      ).type("adminUserFailed");
    }

    if (password == "Admin") {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)"
      ).type("Admin");
    } else {
      cy.get(
        "#app > div > div > div > div > div.px-6.py-4 > form > div:nth-child(2)"
      ).type("adminPasswordFailed");
    }
  }

  function clickjogin(bthLogin) {
    cy.get(
      "#app > div > div > div > div > div.px-6.py-4 > form > div.mt-4.flex.items-center.justify-between > button"
    ).click();
  }

    it('Farmer login success', () => {
      loginFarmer("Farmer" , "Farmer")
      clickjogin()
    });

    it('Admin login success', () => {
      loginAdmin("Admin" , "Admin")
      clickjogin()
    });

  it("Faemer login failed", () => {
    loginFarmer();
    clickjogin();
  });

  it("Admin login failed", () => {
    loginAdmin();
    clickjogin();
  });
});

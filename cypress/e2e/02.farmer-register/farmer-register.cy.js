context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://trpdemo.dto.technology");
  });

  function userName(inputUsername) {
    if (inputUsername == "result01") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("abcd1234")
        .should("have.value", "abcd1234");
    }
    if (inputUsername == "result02") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("234")
        .should("have.value", "234");
    }
    if (inputUsername == "result03") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("=--././")
        .should("have.value", "=--././");
    }
    if (inputUsername == "result04") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("!ทดtobb")
        .should("have.value", "!ทดtobb");
    } else {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none");
      // .type("กดชกร")
      // .should("have.value", "กดชกร");
    }
  }

  function phoneNumber(number) {
    if (number == "ture") {
      cy.get(":nth-child(2) > .outline-none").type("0000000000");
      // .should("have.value", "0000000000");
    } else {
      cy.get(":nth-child(2) > .outline-none").type("cdsdadcfdd");
      // .should("have.value", "cdsdadcfdd");
    }
  }

  function password(text) {
    if (text == "1") {
      cy.get(":nth-child(3) > .outline-none").type("password21");
    } else {
      cy.get(":nth-child(3) > .outline-none").type("12");
    }
  }

  function checkPassword(textcheck) {
    if (textcheck == password("password21")) {
      cy.get(":nth-child(4) > .outline-none").type("password21");
    } else {
      cy.get(":nth-child(4) > .outline-none").type("12");
    }
  }

  function email(mail) {
    if (mail == "mail1") {
      cy.get(":nth-child(5) > .flex-rows > .flex > .outline-none").type(
        "bmsdasd@gmail.com"
      );
    } else {
      cy.get(":nth-child(5) > .flex-rows > .flex > .outline-none").type(
        "bob_gmail.om"
      );
    }
  }

  function lineID(line) {
    if (line == "1") {
      cy.get(":nth-child(6) > .flex > .outline-none").type("@123abc");
    } else {
      cy.get(":nth-child(6) > .flex > .outline-none").type("1234");
    }
  }

  function prompayID(prompay) {
    if (prompay == "1") {
      cy.get(":nth-child(7) > .flex > .outline-none").type("0987654321");
    }
  }

  function btuSubmit(submitstep1) {
    if (submitstep1 == "1") {
      cy.get("form").submit();
    }
  }

  it("the first page register for farmer", () => {
    cy.get(".mx-2").click();
    
    userName("result01");
    phoneNumber("ture");
    password("1");
    checkPassword();
    email("mail1");
    lineID("1");
    prompayID("1");
    cy.wait(4000)
    cy.get('.justify-between > :nth-child(2) > .h-\[41px\]').click()
  });
});

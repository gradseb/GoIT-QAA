describe("Test 2", () => {
  it("Wejście na stronę LMS", () => {
    // cypress code
    cy.visit("https://edu.goit.global/account/login");
  });

  it("znajdz pole email i wpisz email, wprowadzi haslo", () => {
    cy.visit("https://edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
  });

  it("Log in", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
    cy.get('[type="submit"]').click()
  });

  it("Log out and homepage", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
    cy.get('[type="submit"]').click()
    cy.get("#open-navigation-menu-mobile").click()
    cy.get(':nth-child(9) > .next-bve2vl').click()
  });
});


// describe("Test 2", () => {
//   it("Wejście na stronę LMS", () => {
//     // cypress code
//     cy.visit("https://edu.goit.global/account/login");
//   });

//   it("znajdz pole email i wpisz email, wprowadzi haslo", () => {
//     cy.visit("https://edu.goit.global/account/login");
//     cy.get("#user_email").type("testowyqa@qa.team");
//     cy.get("#user_password").type("QA!automation-1");
//   });

//   it("Log in", () => {
//     cy.visit("https://www.edu.goit.global/account/login");
//     cy.get("#user_email").type("testowyqa@qa.team");
//     cy.get("#user_password").type("QA!automation-1");
//     cy.get('[type="submit"]').should("have.text", "Log in");
//     cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
//     cy.get('[type="submit"]').click()
//   });

//   it("Log out and homepage", () => {
//     cy.visit("https://www.edu.goit.global/account/login");
//     cy.get("#user_email").type("testowyqa@qa.team");
//     cy.get("#user_password").type("QA!automation-1");
//     cy.get('[type="submit"]').should("have.text", "Log in");
//     cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
//     cy.get('[type="submit"]').click()
//     cy.get("#open-navigation-menu-mobile").click()
//     cy.get(':nth-child(9) > .next-bve2vl').click()
//   });
// });

// Test2 Page object pattern

import {homepage} from "../pages/homepage";
const page = new homepage();

describe("Page object example", () => {
    it("login page test", () => {
      // visit page
    page.navigate();
     // Log in using login and password
    page.inputLoginAndPassword();
     // press button "Log In"
    page.LogIn();
      // Find button "log out" iu navigation menu and press button "log out"
    page.LogOut();

    });
  });


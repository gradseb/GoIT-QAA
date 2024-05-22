// describe("Test 1", () => {
//   it("Wejście na stronę LMS", () => {
//     // cypress code
//     cy.visit("https://edu.goit.global/account/login");
//   });

//   it("znajdz pole email i wpisz email, wprowadzi haslo", () => {
//     cy.visit("https://edu.goit.global/account/login");
//     cy.get("#user_email").type("user888@gmail.com");
//     cy.get("#user_password").type("1234567890");
//   });

//   it("Log in", () => {
//     cy.visit("https://www.edu.goit.global/account/login");
//     cy.get("#user_email").type("user888@gmail.com");
//     cy.get("#user_password").type("1234567890");
//     cy.get('[type="submit"]').should("have.text", "Log in");
//     cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
//     cy.get('[type="submit"]').click()
//   });

//   it("Log out and homepage", () => {
//     cy.visit("https://www.edu.goit.global/account/login");
//     cy.get("#user_email").type("user888@gmail.com");
//     cy.get("#user_password").type("1234567890");
//     cy.get('[type="submit"]').should("have.text", "Log in");
//     cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
//     cy.get('[type="submit"]').click()
//     cy.get("#open-navigation-menu-mobile").click()
//     cy.get(':nth-child(12) > .next-bve2vl').click()
//   });
// });

// Test1 Page object pattern

import {login} from "../pages/login";
const LoginPage = new login();

describe("Page object example", () => {
    it("login page test", () => {
      // visit page
      LoginPage.navigate();
     // Log in using login and password
      LoginPage.inputLoginAndPassword();
     // press button "Log In"
      LoginPage.LogIn();
      // Find button "log out" iu navigation menu and press button "log out"
      LoginPage.LogOut();

    });
  });



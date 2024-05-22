export class homepage {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
    }
    inputLoginAndPassword() {
        cy.get("#user_email").type("testowyqa@qa.team");;
        cy.get("#user_password").type("QA!automation-1");
      }
      LogIn() {
        cy.get('[type="submit"]').should("have.text", "Log in");
        cy.get('[type="submit"]').should("have.css","background-color","rgb(255, 107, 10)");
        cy.get('[type="submit"]').click()
      }
      LogOut() {
        cy.get("#open-navigation-menu-mobile").click()
        cy.get(':nth-child(9) > .next-bve2vl').click()
      }
    }
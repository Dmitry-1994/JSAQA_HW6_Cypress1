// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("login", (email, password) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(email);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBookInFavorites", (name, description, authors) => {
    cy.contains("Add new").click();
    cy.get("#title").type(name);
    cy.get("#description").type(description);
    cy.get("#authors").type(authors);
    cy.get("#favorite").click();
    cy.contains("Submit").click();
});

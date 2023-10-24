// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import BuyTicketsSearchUIElements from "../ui/buyTicketsSearchUIElements"

Cypress.Commands.add('openHomePageUrl', () => {
    cy.visit('/')
})

Cypress.Commands.add('openBuyTicketsPageUrl', () => {
    cy.visit(BuyTicketsSearchUIElements.relativeUrl)
})
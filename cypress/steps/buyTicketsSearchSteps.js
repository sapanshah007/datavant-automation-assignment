import BuyTicketsSearchUIElements from '../ui/buyTicketsSearchUIElements'
import CommonFunctions from '../support/CommonFunctions'

class BuyTicketsSearchSteps {
  static enterFromPlace(place) {
    cy.task('log', `Enter From Place as ${place}`)
    BuyTicketsSearchUIElements.getFromPlace()
      .should('be.visible')
      .type(`${place}`)
    CommonFunctions.getTypeAheadDropDownMenu()
      .should('be.visible')
      .find('li.active')
      .contains(place)
      .click()
    BuyTicketsSearchUIElements.getFromPlace().should('have.value', place)
  }

  static enterToPlace(place) {
    cy.task('log', `Enter To Place as ${place}`)
    BuyTicketsSearchUIElements.getToPlace()
      .should('be.visible')
      .type(`${place}`)
    CommonFunctions.getTypeAheadDropDownMenu()
      .should('be.visible')
      .find('li.active')
      .contains(place)
      .click()
    BuyTicketsSearchUIElements.getToPlace().should('have.value', place)
  }

// Below code won't work due to bug in typing dates as mentioned in the README.md
//   static enterdepartureDate(date) {
//     const day = date.split(" ")[0]
//     cy.task('log', `Enter From Date as ${date}`)
//     BuyTicketsSearchUIElements.getdepartureDate().should('be.visible')
//       .clear()
//       .type(`${date}`)
//     CommonFunctions.getDatePicker()
//       .contains(day)
//       .click()
//       BuyTicketsSearchUIElements.getdepartureDate().should('have.value', date)  
//   }

  static enterDepartureDate(date) {
    const day = date.split(" ")[0]
    cy.task('log', `Enter Departure Date as ${date}`)
    BuyTicketsSearchUIElements.getDepartureDate()
      .should('be.visible')
      .click()
      .parent()
      .within(() => {
        CommonFunctions.getDatePicker()
        .contains(day)
        .click()
      })
      BuyTicketsSearchUIElements.getDepartureDate().should('have.value', date)  
  }

  static enterReturnDate(date) {
    const day = date.split(" ")[0]
    cy.task('log', `Enter Return Date as ${date}`)
    BuyTicketsSearchUIElements.getReturnDate()
      .should('be.visible')
      .click()
      .parent()
      .within(() => {
        CommonFunctions.getDatePicker()
        .contains(day)
        .click()
      })
      BuyTicketsSearchUIElements.getReturnDate().should('have.value', date)  
  }

  static validateSubmitButtonStatus(expectedStatus) {
    cy.task('log', 'Validate Submit button status')
    if (expectedStatus === 'enabled') {
      BuyTicketsSearchUIElements.getSubmitButton().should('not.have.attr', 'disabled')
    } else if (expectedStatus === 'disabled') {
      BuyTicketsSearchUIElements.getSubmitButton().should('have.attr', 'disabled')
    }
  }

  static clickOnSubmitButton() {
    cy.task('log', 'Click on Submit button')
    BuyTicketsSearchUIElements.getSubmitButton().click()
  }

  static validateSearchParameters(searchParametersValues) {
    cy.task('log', `Validate Departure Date retains its value`)
    BuyTicketsSearchUIElements.getDepartureDate().should('have.value', searchParametersValues.departureDate)  

    cy.task('log', `Validate Return Date retains its value`)
    BuyTicketsSearchUIElements.getReturnDate().should('have.value', searchParametersValues.returnDate)  

    cy.task('log', `Validate From Place retains its value`)
    BuyTicketsSearchUIElements.getFromPlace().should('have.value', searchParametersValues.fromPlace)
   
    cy.task('log', `Validate To Place retains its value`)
    BuyTicketsSearchUIElements.getToPlace().should('have.value', searchParametersValues.toPlace)
  }
}
export default BuyTicketsSearchSteps

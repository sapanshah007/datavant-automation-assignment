import CommonFunctions from '../support/CommonFunctions'
import BuyTicketsServiceUIElements from '../ui/buyTicketsServiceUIElements'

class BuyTicketsServiceSteps {
  static departure = 'Departure'
  static arrival = 'Arrival'

  static validateSummaryResultsTable(summaryTableValues) {
    cy.task('log', `Validate Summary Results Table has 2 rows`)
    CommonFunctions.verifyNumberOfRowsInATable(BuyTicketsServiceUIElements.resultsTables, 0, 2)

    cy.task('log', `Validate Summary Results Table Headers`)
    CommonFunctions.verifyHeaderCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 1, this.departure)
    CommonFunctions.verifyHeaderCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 2, this.arrival)

    cy.task('log', `Validate Summary Results Table values for Outward train`)
    CommonFunctions.verifyCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 0, 0, summaryTableValues.departureDate)
    CommonFunctions.verifyCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 0, 1, summaryTableValues.fromPlace)
    CommonFunctions.verifyCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 0, 2, summaryTableValues.toPlace)

    cy.task('log', `Validate Summary Results Table values for Inward train`)
    CommonFunctions.verifyCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 1, 0, summaryTableValues.returnDate)
    CommonFunctions.verifyCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 1, 1, summaryTableValues.toPlace)
    CommonFunctions.verifyCellValue(BuyTicketsServiceUIElements.resultsTables, 0, 1, 2, summaryTableValues.fromPlace)
  }

  static clickOnCancelButton() {
     cy.task('log', 'Click on Cancel button')
     BuyTicketsServiceUIElements.getCancelButton().click()
   }
}
export default BuyTicketsServiceSteps

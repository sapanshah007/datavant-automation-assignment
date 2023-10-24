import moment from 'moment-timezone'
import CommonFunctions from "../../support/CommonFunctions"
import BuyTicketsSearchSteps from "../../steps/buyTicketsSearchSteps"
import BuyTicketsSearchUIElements from "../../ui/buyTicketsSearchUIElements"
import BuyTicketsServiceSteps from '../../steps/buyTicketsServiceSteps'
import BuyTicketsServiceUIElements from '../../ui/buyTicketsServiceUIElements'

describe('Buy tickets Scenarios', () => {
  it('Verify Buy tickets Cancel Flow.', () => {
    const fromPlace = 'Lagos'
    const toPlace = 'Porto - Campanha'
    const departureDate = moment().tz('Europe/Lisbon').add(3, 'days')
    const returnDate = moment().tz('Europe/Lisbon').add(5, 'days')
    const summaryTableValues = {
      departureDate: `Outward: ${departureDate.format('YYYY-MM-DD')}`,
      returnDate: `Inward: ${returnDate.format('YYYY-MM-DD')}`,
      fromPlace: fromPlace,
      toPlace: toPlace
    }
    const searchParametersValues = {
      departureDate: `${departureDate.format('DD MMMM, YYYY')}`,
      returnDate: `${returnDate.format('DD MMMM, YYYY')}`,
      fromPlace: fromPlace,
      toPlace: toPlace
    }
    cy.openBuyTicketsPageUrl().then(() => {
      //Search Page
      CommonFunctions.verifyTitle(BuyTicketsSearchUIElements.title)
      BuyTicketsSearchSteps.validateSubmitButtonStatus('disabled')
     
      //<Can add input place holder validations for UI here>

      BuyTicketsSearchSteps.enterFromPlace(fromPlace)
      BuyTicketsSearchSteps.enterToPlace(toPlace)
     
      //<Can verify that the previoius dates are disabled in the date picker here>

      BuyTicketsSearchSteps.enterDepartureDate(departureDate.format('DD MMMM, YYYY'))
      BuyTicketsSearchSteps.enterReturnDate(returnDate.format('DD MMMM, YYYY'))

      BuyTicketsSearchSteps.validateSubmitButtonStatus('enabled')
      BuyTicketsSearchSteps.clickOnSubmitButton()

      //Service Page
      CommonFunctions.verifyTitle(BuyTicketsServiceUIElements.title)
      BuyTicketsServiceSteps.validateSummaryResultsTable(summaryTableValues)
      
      //<Similarly we can check departure and arrival results table here with train times and what not>
      
      BuyTicketsServiceSteps.clickOnCancelButton()
      
      //Back to Search Page
      CommonFunctions.verifyTitle(BuyTicketsSearchUIElements.title)
      BuyTicketsSearchSteps.validateSearchParameters(searchParametersValues)
    })
  })
})
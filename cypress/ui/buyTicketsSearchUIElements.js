class BuyTicketsSearchUIElements {
    static relativeUrl = '/passageiros/en/train-times'
    static title = 'Buy Train Tickets Online | CP - Comboios de Portugal'

    static fromPlace = "input[name='textBoxPartida']"
    static toPlace = "input[name='textBoxChegada']"

    static departureDate = "input[id='datepicker-first']"
    static returnDate = "input[id='datepicker-second']"

    static submitButton = "input[type='submit']"

    static getFromPlace() {
        return cy.get(this.fromPlace)
    }

    static getToPlace() {
        return cy.get(this.toPlace)
    }

    static getDepartureDate() {
        return cy.get(this.departureDate)
    }

    static getReturnDate() {
        return cy.get(this.returnDate)
    }

    static getSubmitButton() {
        return cy.get(this.submitButton)
    }
}
export default BuyTicketsSearchUIElements
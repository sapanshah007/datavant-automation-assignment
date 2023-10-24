class BuyTicketsServiceUIElements {
    static title = 'Online Ticket Office | CP - Comboios de Portugal'
    static resultsTables = 'table.table-search-results' //multiple values
    static cancelButton = "input[name='exitButton']"

    static getResultsTables() {
        return cy.get(this.resultsTables) //multiple values
    }

    static getCancelButton() {
        return cy.get(this.cancelButton)
    }
}
export default BuyTicketsServiceUIElements
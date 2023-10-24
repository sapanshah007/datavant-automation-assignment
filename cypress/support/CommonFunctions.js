class CommonFunctions {

   static typeAheadDropDown = '.typeahead.dropdown-menu'
   static datePicker = '.picker--focused.picker--opened'

   /** Actions */

   static getTypeAheadDropDownMenu() {
     return cy.get(this.typeAheadDropDown)
   }

   static getDatePicker() {
     return cy.get(this.datePicker)
   }

   /** Common Table functions */
   
   //Table Headers
   static getTableHeader(tableSelector, tableIndex) {
     return cy.get(tableSelector).eq(tableIndex).find("thead")
   }

   static getTableHeaderRow(tableSelector, tableIndex) {
     return this.getTableHeader(tableSelector, tableIndex).find("tr")
   }

   static getCellsInTableHeader(tableSelector, tableIndex) {
     return this.getTableHeaderRow(tableSelector, tableIndex).find("th")
   }

   //Table Body
   static getTableBody(tableSelector, tableIndex) {
     return cy.get(tableSelector).eq(tableIndex).find("tbody")
   }

   static getRows(tableSelector, tableIndex) {
     return this.getTableBody(tableSelector, tableIndex).find("tr")
   }

   static getCellsInRow(tableSelector, tableIndex, rowIndex) {
     return this.getRows(tableSelector, tableIndex).eq(rowIndex).find("td")
   }
 
   /** Validations */
   static verifyTitle(title) {
    cy.task('log', `Verify page title is ${title}`)
    cy.title().should('eq',title)
   }

   /** Common Table Validations */
   static verifyNumberOfRowsInATable(tableSelector, tableIndex, numberOfRows) {
     cy.task('log', 'Verify Table has ' + numberOfRows + ' rows')
     this.getRows(tableSelector, tableIndex).should('have.length', numberOfRows)
   }

   static verifyCellValue(tableSelector, tableIndex, rowIndex, cellIndex, expectedValue) {
     cy.task('log', 'Verify Table Cell has value ' + expectedValue)
     this.getCellsInRow(tableSelector, tableIndex, rowIndex)
       .eq(cellIndex)
       .should('contain', expectedValue)
   }

   static verifyHeaderCellValue(tableSelector, tableIndex, cellIndex, expectedValue) {
     cy.task('log', 'Verify Table header Cell has value ' + expectedValue)
     this.getCellsInTableHeader(tableSelector, tableIndex)
       .eq(cellIndex)
       .should('contain', expectedValue)
   }
 }
 export default CommonFunctions
 
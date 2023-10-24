# NodeJS installation
npm install

# Install latest version of Cypress
npm install --save-dev cypress

# Setup and configure Cypress Project (It will create directory structure if it is first time)
npx cypress open

# Run cypress tests
npx cypress open or npx cypress run

# 2. Include any oddities you noticed from a functional or UX perspective

**Placeholder Text**
Return Date textbox has placeholder "Return date" but Departure date textbox has placeholder "Date". To improve clarity, it is recommended to have a consistent placeholder like "Departure date" for the first textbox.

**Language Consistency**
Some labels are still in Portuguese on the English version of the website, such as"Intercidades" instead of "Intercity".

**Date Typing Behavior**
Typing the "Return Date" field also updates the "Departure Date" field to the same value. While this is a minor issue, it should be fixed for consistency. Automation scripts should be updated to validate both typing and date selection from the calendar widget once the issue is resolved.

# 3. What suggestions would you make for a better user experience, ease of implementation or testing?

# Better User Experience/Implementation Suggestions

**Radio Buttons**
Implement a clear choice between "One way" and "Round Trip" by using radio buttons. This will enhance the user experience and clearly communicate the two options.

**Navigation Enhancement**
Remove the "Buy Tickets" link on the first page, as it currently only refreshes the same page. Instead, highlight the active tab (e.g., "Buy Tickets") so that users can easily identify the active page. Apply this pattern consistently to other tabs, such as "Train Times", "Buy Leisure" and others.

**Date Picker Widget**
Improve the date picker widget by enabling users to select the visible dates from the next month in the current month view. Currently, these dates are disabled, which is not necessary and can be confusing. Allowing it can streamline the user experience.

# Localization Testing Suggestions

**Verify Localization**
Ensure that the application is properly localized for both English and Portuguese. This includes checking for translated content, date formats, currency symbols, labels, buttons, and menu items.

**Language Display**
Test for proper alignment and display of text in both languages, addressing any layout or formatting issues that may arise due to language differences.

**Special Characters**
Test the handling of special characters and accented letters specific to Portuguese. Ensure that the application renders and accepts these characters correctly.

**Date and Time Formats**
Verify that date and time displays adhere to the expected formats for both English and Portuguese users. This also includes testing calendars and date pickers in both languages.

**Timezone Functionality**
Validate that the application's functionality, particularly the arrival and departure date/times, adjusts based on the user's selected locations, accounting for time zone differences.

**Geolocation Features**
For users in Portugal (PT) and English-speaking locations, validate geolocation features, especially when the application relies on timezone information.

**Mocking GPS Coordinates**
Use Cypress cy.stub() to mock GPS-based geolocation features during testing.

**Simulate Broswer Language**
Set the browser language to simulate localized testing scenarios effectively.

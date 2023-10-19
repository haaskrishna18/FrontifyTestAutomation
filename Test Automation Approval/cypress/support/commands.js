// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('scrollToBottom', () => {
    function scrollUntilEnd(previousScrollHeight = 0) {
        cy.window().then((win) => {
            win.scrollTo(0, previousScrollHeight);
            return cy.wait(500); // Adjust if needed
        }).then(() => {
            return cy.window();
        }).then((win) => {
            const currentScrollHeight = win.document.body.scrollHeight;
            if (currentScrollHeight > previousScrollHeight) {
                scrollUntilEnd(currentScrollHeight);
            }
        });
    }
    scrollUntilEnd();
})



//More efficient
Cypress.Commands.add('scrollUntilLoaded', () => {
    // Utility function to scroll to bottom
    function scrollToBottom() {
        return cy.window().invoke('scrollTo', 0, 'max');
    }

    // Utility function to get current scrollHeight
    function getScrollHeight() {
        return cy.document().its('body.scrollHeight');
    }

    // Recursive function to keep scrolling while content loads
    function scrollAndCheck(previousHeight) {
        scrollToBottom();
        cy.wait(1000);  // Adjust this delay as per your requirements
        
        getScrollHeight().then(currentHeight => {
            // If content has loaded and scrollHeight has changed, keep scrolling
            if (currentHeight > previousHeight) {
                scrollAndCheck(currentHeight);
            }
        });
    }

    // Start the whole process
    getScrollHeight().then(initialHeight => {
        scrollAndCheck(initialHeight);
    });
});












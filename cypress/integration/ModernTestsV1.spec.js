/// <reference types="Cypress" />

describe("ModernTestsV1", () => {

    it(`Cross-Device Elements Test`, function () {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html');
        cy.viewport(800, 600);

        cy.get('#IMG____9').should('be.visible');
        cy.get('#A__showsubmen__23').should('not.be.visible');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Applitools Demo',
            testName: 'Task 1',
        })

        cy.eyesCheckWindow({
            tag: "Cross-Device Elements Test",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it(`Filter Results`, function () {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html');
        cy.viewport(800, 600);

        cy.contains('Filters').click();
        cy.get('#LABEL__containerc__104').click();
        cy.get('#filterBtn').click();

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Applitools Demo',
            testName: 'Task 2',
        })

        cy.eyesCheckWindow({
            tag: "Filter Results",
            target: 'region',
            selector: '#product_grid'
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it.only(`Product Details Test`, function () {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html');
        cy.viewport(800, 600);

        cy.contains('Filters').click();
        cy.get('#LABEL__containerc__104').click();
        cy.get('#filterBtn').click();
        cy.get('#H3____218').click();

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Applitools Demo',
            testName: 'Task 3',
        })

        cy.eyesCheckWindow({
            tag: "Product Details test",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
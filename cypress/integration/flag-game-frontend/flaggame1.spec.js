/// <reference types="cypress" />

describe("flag-game", () => {
    beforeEach(() => {
        // connect to site before every test
        cy.visit("http://localhost:3000");
    });

    it("start-singleplayer", () => {
        // check if single player button present and click
        cy.get("a").should("contain.text", "Single Player");
        cy.contains("Single Player").click();
    });

    it("join-multiplayer", () => {
        // check if multi player button is present and click
        cy.get("a").should("contain.text", "Multi Player");
        cy.contains("Multi Player").click();
        // type input name
        cy.get("input").type("Bob");
        // choose name
        cy.contains("Choose Name").click();
        // successfully joined waiting room
        cy.get("h2").should("contain.text", "Online Players");
    });

    it("darkmode-checker", () => {
        // get is color
        const osColor =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";

        // get opposite of OS color
        const opposite = osColor === "dark" ? "light" : "dark";

        // click and then check
        cy.get("#globe").click();
        cy.get("p").should("contain.text", opposite);

        cy.get("#globe").click();
        cy.get("p").should("contain.text", osColor);

        cy.get("#globe").click();
        cy.get("p").should("contain.text", opposite);
    });
});

define(["require", "exports", "../src/script/modules/flash.d"], function (require, exports, flash_d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("Test flash class", () => {
        let flash;
        beforeEach(() => {
            cy.wrap('.flash-container').as('flashContainer');
            flash = new flash_d_1.Flash();
        });
        it('Should be defined.', () => {
            expect(flash instanceof flash_d_1.Flash).to.be.true;
        });
        it("Should show flash modal", () => {
            cy.window().then((win) => {
                flash.addFlash({ message: "Hello word !" });
            });
        });
        // it("Should not exist in the DOM",()=>{
        //   cy.wait(5100);
        //     cy.get(".flash-box").should("not.exist");
        // })
    });
});
//# sourceMappingURL=flash.cy.js.map
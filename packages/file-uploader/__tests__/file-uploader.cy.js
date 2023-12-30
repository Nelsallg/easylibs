import FileUploader from "@easylibs/file-uploader";

describe("Test file uploader class", () => {
  let uploader;

  beforeEach(() => {
    cy.get('#avatar').as('inputField');
    uploader = new FileUploader();
  });

  it('Should be defined.', () => {
    expect(uploader instanceof FileUploader).to.be.true;
  });

  it("Should run", () => {
    cy.window().then((win) => {
      uploader.run();
    });
  });

  // Décommentez cette partie si vous en avez besoin
  // it("Should not exist in the DOM",()=>{
  //   cy.wait(5100);
  //   cy.get(".flash-box").should("not.exist");
  // })
});

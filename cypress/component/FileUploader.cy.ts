// cypress/integration/fileUploader.spec.ts

/// <reference types="cypress" />

import { FileUploader } from "libbest/file-uploader";



describe("FileUploader Tests", () => {
  it("should upload a single file", () => {
    // Set up a test file input and file element
    cy.visit("http://127.0.0.1:3000/__cypress/src/");

    // Create an instance of the FileUploader class
    const fileUploader = new FileUploader("#fileInput", "#fileElement");

    // Stub the FileReader to return a known base64 string
    cy.window().then((win) => {
      cy.stub(win, "FileReader").returns({
        readAsDataURL: (file) => {
          // win.onload({
          //   target: {
          //     result: "data:image/png;base64,iVBORw0KG...",
          //   },
          // });
        },
      });
    });

    // Trigger the file input change event
    cy.get("#fileInput").then((fileInput)=>{
      console.log(fileInput);
    });

    // Assertions: Add your own assertions based on the expected behavior
    cy.get("#fileElement").should("have.attr", "src", "data:image/png;base64,iVBORw0KG...");

    // Add more assertions as needed
  });

  it("should upload multiple files", () => {
    // Similar to the single file test, but simulate multiple file uploads
  });

  // Add more tests as needed for different scenarios
});

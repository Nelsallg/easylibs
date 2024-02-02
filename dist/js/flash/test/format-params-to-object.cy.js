define(["require", "exports", "../src/script/utils/format-params-to-object"], function (require, exports, format_params_to_object_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("Transforme string params to object key => value", () => {
        format_params_to_object_1.FormatParamsToObject.ACCEPTED_PARAMS = ["a", "b", "c"];
        let format = new format_params_to_object_1.FormatParamsToObject({ a: "1", b: "2" });
        console.log(format.getProperties());
    });
});
//# sourceMappingURL=format-params-to-object.cy.js.map
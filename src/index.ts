import ProgressForm from "../packages/progress-form/src/progress-form";
const progressForm = new ProgressForm();
const form = document.getElementById('progress-form') as HTMLFormElement;
const translateX = -560;
progressForm.run({ form, translateX },
    {
      form: {
        width: "100vw",
        height: "null",
      },
      fieldsetContainer: {
        width: "1600px",
        height: "null",
        alignItems: "center",
        justifyContent:"space-between"
      },
      fieldset: {
        width: "500px",
        alignItems: "null",
      },
    }
  );
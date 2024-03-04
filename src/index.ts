import FileUploader from "../packages/file-uploader/src/file-uploader";
import ProgressForm from "../packages/progress-form/src/progress-form";

//Progress Form
const form = document.querySelector("form");
const progress = new ProgressForm();
if(form)
progress.run({form});


const input = document.querySelector("input[type='file']") as HTMLInputElement;
const uploader = new FileUploader(input);

uploader.load((files)=>{
  console.log(files);
})
import FileUploader from "../packages/file-uploader/src/file-uploader";
import ProgressForm from "../packages/progress-form/src/progress-form";
import Utils from "../packages/utils/src/utils";
import TempData from "../packages/tempdata/src/tempdata";
import Flash from "../packages/flash/src/flash";
import TempDataBackend from "../packages/tempdata-backend/src/tempdata-backend";
import {Transformer} from "../packages/transformer/src/transformer";
import FetchRequest from "../packages/fetch-request/src/fetch-request";

//Progress Form
const form = document.querySelector("form");
const addbtn = document.querySelector('.add-btn');
const submiter = document.querySelector('#submiter');
// console.log(form,addbtn)
const progress = new ProgressForm();
if(form)
progress.lazyRun(6,{form},{
  fieldsetParent:{
    width:"null"
  },
  fieldsetContainer:{
    justifyContent:'null' //Il est conseillé en lazy de desactiver ce justify content car à cause de ca longeur il disposera les autre fieldsest hors de l'ecrant
  },
  fieldset:{
    width:"650px"
  },
});
const PROGRESSING_DATA = progress.PROGRESSING_DATA
const nextButton = PROGRESSING_DATA['fieldset0'].next.button;
const nextIndex = PROGRESSING_DATA['fieldset0'].next.i;
const nextTranslateX = PROGRESSING_DATA['fieldset0'].next.translateX;
const prevIndex = PROGRESSING_DATA['fieldset1'].prev.i;
const prevTranslateX = PROGRESSING_DATA['fieldset1'].prev.translateX;
let templateString = `<fieldset class="fieldset1">
<label for="name" required-field>Name:</label>
<input type="text" name="name" id="name">
<div class="button-container">
  <button type="button" __prev__>previous</button>
  <button type="button" __next__>next</button>
</div>
</fieldset>`;
nextButton.addEventListener('click',()=>{
  new FetchRequest({
    uri:"http://localhost:8000/src/backend.php",
    options:{
      method:"POST",
      responseDataType:"text"
    },
    callbacks:{
      onSuccess(response) {
          const template = Utils.textToHTMLElement(templateString) as HTMLElement;
          const fieldsetContainer = document.querySelector('[fieldset__container]') as HTMLElement;
          const prevButton = template.querySelector("[__prev__]") as HTMLElement;
          Object.assign(template.style,progress.RENDERED_STYLE.fieldsetStyle);
          fieldsetContainer.appendChild(template);
          progress.prev(prevIndex,prevTranslateX,prevButton)
          progress.next(nextIndex,nextTranslateX)
      },
    }
  })
})


// File uploader
const input = document.querySelector("input[type='file']") as HTMLInputElement;
const uploader = new FileUploader(input);

uploader.load((files)=>{
  // console.log(files);
})

Utils.setAsteriskToRequiredField();

// Temp data
const tempdata = new TempData("test","users");
tempdata.read().then(async (datas:any)=>{
  const self = new FetchRequest({
    uri:"http://localhost:8000/src/backend.php",
    data:datas[0],
    iteration:3,
    callbacks:{
      onPreFetch(data) {
        // console.log(data)
      },
      onSuccess(response){
        // self.recursion(datas[1])
        // self.recursion(datas[2])
        // self.recursion(datas[3])
      }
    }
  })
  
});
addbtn?.addEventListener('click',()=>{
  if(form){
    const formData = new FormData(form);
    const transformer = new Transformer.FormDataTransformer(formData);
    tempdata.add(transformer.reverse());
  }
})
submiter?.addEventListener('click',(e)=>{
  e.preventDefault();
  const backend = new TempDataBackend(tempdata as any,"http://localhost:8000/src/backend.php");
  backend.persist();
  
})

// Flash

// Flash.add({
//   message:"hey",
//   type:"danger",
//   icon:true,
//   closeButton:true
// })
import { FileUploader } from "libbest/file-uploader";



const uploader = new FileUploader("#avatar");
uploader.load((files)=>{
    console.log(files);
})
alert("d")
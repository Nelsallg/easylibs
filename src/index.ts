import TempData from "../packages/tempdata/src/tempdata";
import Backend from "../packages/tempdata/src/script/backend";

const tempdata = new TempData("test","test_data");
tempdata.add({
    firstname:"Sarah Elise",
    lastname:"OBONE MBA",
    age:18,
    gender:"female",
    job:"Student"
})
// tempdata.deleteAll();
const backend = new Backend(tempdata,"http://localhost:8000/src/backend.php");
backend.persist(undefined,(data:any)=>{
    console.log(data);
})
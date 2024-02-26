import TempData from "../packages/tempdata/src/tempdata";

const tempdata = new TempData("test","mydata",2);
const data0 = {
    firstname: 'Alain',
    lastname: 'MBA NDONG',
    age: 17,
    job: 'student',
    country:'Gabon',
    sex:'male'
}
const data1 = {
    firstname: 'Sarah Elise',
    lastname: 'OBONE MVOU',
    age: 30,
    job: 'journalist',
    country:'Gabon',
    sex:'female'
  };
  const data3 = {
    firstname: 'Melissa Anita',
    lastname: 'KPWEYA',
    age: 25,
    job: 'student',
    country:'Togo',
    sex:'female'
  };
  const data2 = {
    firstname: 'Guy Bertrant',
    lastname: 'MABIALA MABIALA',
    age: 25,
    job: 'taxi driver',
    country:'RDC',
    sex:"male"
  };
//tempdata.add(data3); // Adds one data object or...
//tempdata.add([data1, data2]); // Adds both objects to the database in a single transaction
// tempdata.read().then((data)=>{
//     console.log(data)
// })
// tempdata.readOne(1).then((data)=>{
//     console.log(data)
// })
// tempdata.readOneBy({age:25,sex:'female'}).then((data)=>{
//     console.log(data)
// })
tempdata.readBy({age:25}).then((data)=>{
    console.log(data)
})

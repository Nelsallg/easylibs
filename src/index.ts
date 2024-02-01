import Flash from "../packages/flash/src/flash";
import Utils from "../packages/utils/src/utils";
Flash.add({
  message: "Votre compte a été créé avec succès.",
  type:'success',
  closeButton:true,
  title:"Bravo !",
  icon:true
})
Utils.setAsteriskToRequiredField();
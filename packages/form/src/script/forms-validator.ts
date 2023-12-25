import {DefaultTextType, EmailType, PhoneNumberType, StrongPasswordType} from './regexp';
import { Flash } from "../components/flash";


function ErrorView(message:string,type='danger'){
    new Flash().addFlash({
        message:message,
        type:type,
        icon:'svg/alert.svg#danger',
        closeButton:false,
        duration:5000
    })
}


export function FirstFieldset(form:HTMLFormElement){
    const firstname = form.querySelector('#registration_form_firstname') as HTMLInputElement;
    const lastname = form.querySelector('#registration_form_lastname') as HTMLInputElement;
    let error:boolean;
    if(firstname.value == '' || lastname.value == ''){
        ErrorView("Le prénom et le nom sont obligatoire");
        error = true;
    }else if(!DefaultTextType.test(firstname.value) || !DefaultTextType.test(lastname.value)){
        ErrorView("Les nombres et les caractères spéciaux ne sont pas autorisés pour les champs nom et le prénom");
        error = true;
    }else{error =  false;}
    return error;
}


export function SecondFieldset(form:HTMLFormElement){
    const email = form.querySelector('#registration_form_email') as HTMLInputElement;
    const phoneNumber = form.querySelector('#registration_form_phone_number') as HTMLInputElement;
    let error:boolean;
    let getError = [];

    if(email.value == '' || !EmailType.test(email.value)){
        getError.push("<ul><li>Entrez une adresse mail valide.</li><ul>");
    }
    if(phoneNumber.value != '' && PhoneNumberType.test(phoneNumber.value)){
        getError.push("<ul><li>Entrez un numéro de téléphone valide.</li><ul>");
    }

    if(getError.length>0){
        let message='';
        for(let i=0; i<getError.length;i++){
            message +=`${getError[i]}`
        };
        ErrorView(`${message}`);
        error = true;
    }else{error =  false;}
    return error;
}

export function ThirdFieldset(form:HTMLFormElement){
    const userName = form.querySelector('#registration_form_customer_name') as HTMLInputElement;
    const password = form.querySelector('#registration_form_plainPassword_first') as HTMLInputElement;
    const repeatPassword = form.querySelector('#registration_form_plainPassword_second') as HTMLInputElement;
    let getError = [];

    //On récupere toutes les érreurs dans un tableau
    if(userName.value != '' && userName.value.length < 2){
        getError.push("<ul></li>Le nom d'utilidateur doit contenir amoins 2 caractères.</li></ul>");
    }else if(userName.value.length > 15){
        getError.push("<ul></li>Le nom d'utilidateur ne doit pas dépasser les 15 caractères.</li></ul>");
    }
    return Password(false, getError, {password:password, repeatPassword:repeatPassword, formType:null});
}


export function LoginForm(form:HTMLFormElement){
    const email = form.querySelector('#inputEmail') as HTMLInputElement;
    const password = form.querySelector('#inputPassword') as HTMLInputElement;
    let error;
    let getError = [];

    //Le meme procédé qu'à la fonction précédente
    if(email.value == '' || password.value == ''){
        getError.push("<ul><li>Completez tous les champs.</li></ul>");
    }
    if(email.value != '' && !EmailType.test(email.value)){
        getError.push("<ul><li>Ce format d'email n'est pas valide.</li></ul>");
    }

    if(getError.length>0){
        let message='';
        for(let i=0; i<getError.length;i++){
            message +=`${getError[i]}`
        };
        ErrorView(`${message}`);
        error = true;
    }else{error =  false;}
    return error;
}

export function IsInvalidPasswordData(form:HTMLFormElement):boolean{
    const email = form.querySelector("input[type='email']") as HTMLInputElement;
    const password = form.querySelector("input[plain-password-first]") as HTMLInputElement;
    const repeatPassword = form.querySelector("input[plain-password-second]") as HTMLInputElement;
    console.log({password,repeatPassword,email})
    if(email){
        return Email(email, false, []);
    }
    return Password(false, [], {
        password:password, 
        repeatPassword:repeatPassword,
        formType:'login'
    });
}


function Email(email:HTMLInputElement, error=false, getError:Array<string>){
    if(email.value == ''){
        getError.push("<ul><li>Entrez votre email.</li></ul>");
    }else if(email.value != '' && !EmailType.test(email.value)){
        getError.push("<ul><li>Ce format d'email n'est pas valide.</li></ul>");
    }

    if(getError.length>0){
        let message='';
        for(let i=0; i<getError.length;i++){
            message +=`${getError[i]}`
        };
        ErrorView(`${message}`);
       return error = true;
    }
    return error;
}


function Password(error = false, getError: Array<string>, fields: { password: HTMLInputElement, repeatPassword: HTMLInputElement, formType: string|null }) {
    let {password, repeatPassword} = fields;
    let formType = fields.formType || 'signup';
  
      if (password !== null) {
        if (password.value === "") {
          getError.push("<ul><li>Le mot de passe ne peut pas rester vide.</li></ul>");
        } else if (password.value.length < 8) {
          getError.push("<ul><li>Le mot de passe doit contenir au moins 8 caractères.</li></ul>");
        } else if(!StrongPasswordType.test(password.value)){
            getError.push('<ul><li>Votre mot de passe est faible. Il devrait comprendre des chiffres et des lettres majuscules/minuscules et des caratères spéciaux</li></ul>');
        }
      }

      if (repeatPassword !== null) {
        if (password === null) {
          getError.push("<ul><li>You cannot have repeat-password without password.</li></ul>");
        }
        if (password && repeatPassword.value === "" && password.value !== "") {
          getError.push("<ul><li>Confirmez le mot de passe.</li></ul>");
        } else if (password && password.value !== repeatPassword.value) {
          getError.push("<ul><li>Les mots de passe ne correspondent pas.</li></ul>");
        }
      }

      // On formate les erreurs dans une variable message puis
      // on envoie cette variable à la vue.
      if (getError.length > 0) {
        let message = "";
        for (let i = 0; i < getError.length; i++) {
          message += `${getError[i]}`;
        }
        ErrorView(`${message}`);
        return (error = true);
      }

      return error;
  }
  
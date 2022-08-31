/*
Element captures
*/

const form=document.getElementById("form");
const boton=document.getElementById("button");
let nombre=document.getElementById("input-name");
let pass=document.getElementById("input-pass");
let email=document.getElementById("input-email");
let tyc=document.getElementById("tyc");
let errorList=document.getElementById("error-list");
let errorName=document.getElementById("error-name");
let errorEmail=document.getElementById("error-email");
let errorPass=document.getElementById("error-pass");
/*
Errors Array
*/
let errors=[];

/*
Name Validation Function
*/
const validacionNombre=()=>{

nombre.addEventListener("focus", ()=>{
    errors=[];
    if(nombre.value=="Nombre"){
    nombre.value="";
    }
addEventListener("keydown",(e)=>{
    if(nombre.value.length>24){
      
        if(e.key!="Backspace"){
            e.preventDefault();
        }
    }

});
});

nombre.addEventListener("blur",()=>{
    if(nombre.value==""){
        nombre.value="Nombre";
        
        errorName.innerHTML="<span>Mira rey, vos hace lo que quieras con tu vida, pero yo te recomendaría que no dejes el formulario 'nombre' sin llenar si queres registrarte, salu2.</span>";
    }else{
        errorName.innerHTML="";
    }
    
});
}

/*
Email Validation Function
*/
const validacionEmail=()=>{
email.addEventListener("focus", ()=>{
    errors=[];
    if(email.value=="Email"){
        email.value="";
    }
});

email.addEventListener("blur",()=>{
    if(email.value==""){
        email.value="Email";
        errorEmail.innerHTML="<span>AH BOEEEH, el señor no quire llenar el formulario 'Email' QUE REBELDE ME SALIO!... menos mal que no te conozco porque seguro que sos peronista. Llena bien los campos querés!</span>";
    }else{
        errorEmail.innerHTML="";
    }
});
}

/*
Password Validation Function
*/
const validacionPass=()=>{

pass.addEventListener("focus", ()=>{
    errors=[];
    if(pass.value=="Contraseña"){
        pass.value="";
        pass.setAttribute("type","password");
}
addEventListener("keydown",(e)=>{
    if(pass.value.length>19){
      
        if(e.key!="Backspace"){
            e.preventDefault();
        }
    }
});
});

pass.addEventListener("blur",()=>{
    if(pass.value=="" ){
        pass.value="Contraseña";
        pass.removeAttribute("type","password")
    }else if(pass.value.length<7){
        errorPass.innerHTML="<span>La contraseña debe tener entre 8 y 20 caracteres.</span>";
    }else{
    errorPass.innerHTML="";
}
});
}

/*
Excect Validation Functions
*/
validacionNombre();
validacionEmail();
validacionPass();

/*
Form Data Save Box
*/
let datos={
    nombre:"",
    email:"",
    pass:"",
    tycAccepted:""
}

/*
Registry button + validation conditions
*/
button.addEventListener("click",()=>{
for(dato in datos){
    switch(dato){
        case "nombre":
            datos[dato]=nombre.value;
            if(datos[dato]=="" || datos[dato]=="Nombre"){
                errors.push("El campo Nombre no debe estar vacío");
            }

            break;
        case "email":            
            datos[dato]=email.value;
            if(datos[dato]=="" || datos[dato]=="Email"){
                errors.push("El campo email no debe estar vacío");
            }
            break;

        case "pass":
            datos[dato]=pass.value;
            if(datos[dato]=="" || datos[dato].length<7 || datos[dato]=="Contraseña"){
                errors.push("El campo contraseña no debe estar vacío y debe contener entre 7 y 20 caracteres.");
            }
            break;
        case "tycAccepted":
            datos[dato]=tyc.checked;
            if(datos[dato]==false){
                errors.push("Debe aceptar los terminos y condiciones.");
            }
            break;
}
}

/*
Validation Check
*/
if(errors.length!=0){

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
    });

    errorList.innerHTML="";

    errors.forEach(element => {
        
        errorList.innerHTML+=`<li>${element}</li>`;

    });

    errors=[];

}else{
    errorList.innerHTML="";
    errors=[];
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
    });
    console.log("Ta todo josha");
    console.log(datos);
}

});
function Validate() {
  var mail = document.getElementById('email').value;
  var pswd = document.getElementById('pwd').value;

  var regexp1 =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    

  if (regexp1.test(mail)) {
    document.getElementById('mail error').innerHTML = " ";
  } else {
    document.getElementById('mail error').innerHTML = "Email is invalid ";
    return false;
  }

  var regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (regexp2.test(pswd)) {
    document.getElementById('pwd error').innerHTML = " ";
  } else {
    document.getElementById('pwd error').innerHTML = "Password is invalid";

    return false;
  }
}

function SignValidate() {
    
    var name = document.getElementById('full').value;
    var mails =document.getElementById('mail1').value;
    var nbr =document.getElementById('number').value;
    var pd =document.getElementById('pssd').value;
    var cpd =document.getElementById('cpssd').value;
    var cry =document.getElementById('cntry').value;
    var ad =document.getElementById('adds').value;
    var ZIP =document.getElementById('PIN').value;

    var namecheck = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    var mailcheck =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    var phonecheck =/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    var pscheck =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var countrycheck  = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    var addcheck = /^[a-zA-Z0-9\s,'-]*$/;
    var zipcheck =/^\d{6}(?:[-\s]\d{4})?$/;

    
    
    if(namecheck.test(name)){
        document.getElementById('fullerr').innerHTML = " ";}
    else {
    document.getElementById('fullerr').innerHTML = "Name is invalid ";
    return false;}
    
    
    if(mailcheck.test(mails)){
        document.getElementById('mailer').innerHTML = " "; 
    } else{
        document.getElementById('mailer').innerHTML = "EmailID invalid";
        return false;
    }
    
    if(phonecheck.test(nbr)){
        document.getElementById('phone').innerHTML = " "; 
    } else{
        document.getElementById('phone').innerHTML = "Phone number Invalid";
        return false;
    }
    
    
    if(pscheck.test(pd)){
        document.getElementById('pad').innerHTML = " "; 
    } else{
        document.getElementById('pad').innerHTML = "Password Invalid";
        return false;
    }
    
    if(pad.match(cpd)){
        document.getElementById('pad').innerHTML = " "; 
    } else{
        document.getElementById('pad').innerHTML = "Password Mismatch";
        return false;
    }
    
    
    if(countrycheck.test(cry)){
        document.getElementById('cotry').innerHTML = " "; 
    } else{
        document.getElementById('cotry').innerHTML = "Country Invalid";
        return false;
    }

    
    if(addcheck.test(ad)){
        document.getElementById('adss').innerHTML = " "; 
    } else{
        document.getElementById('adss').innerHTML = "Address Invalid";
        return false;
    }
   
    
    if(zipcheck.test(ZIP)){
        document.getElementById('PIN').innerHTML = " "; 
    } else{
        document.getElementById('PIN').innerHTML = "PIN/ZIP Code Invalid";
        return false;
    }

}   

const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const poor = document.querySelector(".poor");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
let regExpPoor = /^[a-z]$/;
let regExpMedium = /^\d+$/;
let regExpStrong = /^.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]$/;
function trigger(){
    if(input.value !=""){
        indicator.style.display = "block";
        indicator.style.dsiplay ="flex";

    }
    else{
        indicator.style.dsiplay ="none";

    }
}

    

    
    

    


    

    

    



    
    



    






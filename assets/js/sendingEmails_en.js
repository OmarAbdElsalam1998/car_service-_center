
//handilg sendin email
let Name=document.getElementById("customerName");
let Email=document.getElementById("email");
let Phone=document.getElementById("phone");
let Message=document.getElementById("message");
let errorMessages=document.querySelectorAll(".error-message");
let ContactForm=document.getElementById("contact_Form");
let alertDiv=document.querySelector(".pop-up-alert-message");
let alertMessage=document.querySelector(".pop-up-alert-message .message");
let closeAlertMessageButton=document.querySelector(".pop-up-alert-message .close-alert");
let interval;
let submit_button=document.getElementById("submit_form");

//check the validity of customer name
checkName=()=>{
    if(Name.value==""){

        errorMessages[0].textContent="This is a required field";
        return false;
    }
    else{
        errorMessages[0].textContent="";
        return true;
    }
}


//check the validity of email
checkEmail=()=>{
    if(Email.value==""){

        errorMessages[1].textContent="This is a required field";
        return false;
    }
    else if(!Email.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        errorMessages[1].textContent= "please enter a valid email ex:" +"example@domain.com";
        return false;
    }
    else{
        errorMessages[1].textContent="";

        return true;

    }
 
}
//check the validity of email
checkPhone=()=>{
    if(Phone.value==""){

        errorMessages[2].textContent="This is a required field";
        return false;
    }
    else if(!Phone.value.match(/^([0-9]){5,}$/)){
        errorMessages[2].textContent="Phone not valid";
        return false;
    }
    else{
        errorMessages[2].textContent="";

        return true;

    }
}

checkMessage=()=>{
    if(Message.value==""){
        console.log( errorMessages[8])

        errorMessages[3].textContent="This is a required field";
        return false;
    }
  
    else{
        errorMessages[3].textContent="";

        return true;

    }
}



submit_button.addEventListener("click",(e)=>{
    e.preventDefault();
    
    checkName();
    checkEmail();
    checkPhone();
    checkMessage();


    if(checkName()&&checkEmail()&&checkPhone() &&checkMessage()){
        submit_button.disabled = true;
        submit_button.innerHTML=`<div class="animation"><span></span><span></span><span></span></div>`;

        let date=new Date().getTime();
        if(localStorage.getItem("lastTimeSendingMessage")){
             if(date-localStorage.getItem("lastTimeSendingMessage")>600000){
                
                sendEmail();
                localStorage.setItem("lastTimeSendingMessage",date);

                


             }
             else{
                alertDiv.classList.add("error","active")
                alertMessage.innerHTML=`<img src="../assets/images/error.webp" loading="lazy" alt=""><span >Sorry, you are only allowed to send one message</span>`;
                submit_button.innerHTML="send";
                submit_button.disabled = false;


               interval= setTimeout(()=>{
                    alertDiv.classList.remove("active","error");


                },5000);
             }
            
        }
        else{
          
            sendEmail();
          
            localStorage.setItem("lastTimeSendingMessage",date);

            
        }
    }
   

   
    
});    

//sending mails using emailjs

function sendEmail(){
    (function(){
        emailjs.init("2zpZyfrYYlg0QhJTL");
    })();
    let serviceID="service_e91uiql";//email service id
    let templateID="template_1wdlw95";//email template id 
    let params={
        Name:Name.value,
        Email:Email.value,
        Phone:Phone.value,
        Message:Message.value,
     


    }

    emailjs.send(serviceID,templateID,params)
    .then(function() {
        alertDiv.classList.add("success","active");
        alertMessage.innerHTML=`<img src="../assets/images/success.webp" loading="lazy" alt=""><span >Your Message Sent Successfully</span>`;
        submit_button.disabled = false;
        submit_button.innerHTML="send";


        interval=setTimeout(()=>{
          
            alertDiv.classList.remove("active","success");



        },5000);
    }, function(error) {
        alertDiv.classList.add("error","active")
        alertMessage.innerHTML=`<img src="../assets/images/error.webp" loading="lazy" alt=""><span >The message could not be sent/span>`;
        interval= setTimeout(()=>{
        alertDiv.classList.remove("active","error");



        },5000);
    });


}

//close alert message when click on close btn
closeAlertMessageButton.addEventListener("click",function(){
    alertDiv.classList.remove("active","error","success")
    clearInterval(interval);

});

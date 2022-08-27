//Name validation
let validname=false;
const Name=document.getElementById('name');
Name.addEventListener('blur',()=>{
    
    //Validate name here
    let regex=/^[a-zA-Z]([a-zA-Z ]){2,45}$/;
    let str=Name.value;

    // If name is valid, removes warning
    if(regex.test(str)){
        Name.classList.remove('is-invalid');
        validname=true;
    }

    //If name is invalid, adds warning
    else{
        Name.classList.add('is-invalid');
    }
})

//Email validation
let validemail=false;
const email=document.getElementById('email');
email.addEventListener('blur',()=>{
    
    //Validate email here
    let regex=/^([0-9a-zA-Z_\.\-]+)@([0-9a-zA-Z_\.\-]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;

    // If email is valid, removes warning
    if(regex.test(str)){
        email.classList.remove('is-invalid');
        validemail=true;
    }

    // If email is invalid, adds warning
    else{
        email.classList.add('is-invalid');
    }
})

//Contact validation
let validcontact=false;
const contact=document.getElementById('contact');
contact.addEventListener('blur',()=>{
    console.log('c');
    //Validate contact here
    let regex=/^[0-9]([0-9\-]){9,11}$/;
    let str=contact.value;

    // If contact is valid, removes warning
    if(regex.test(str)){
        contact.classList.remove('is-invalid');
        validcontact=true;
    }

    // If contact is invalid, adds warning
    else{
        contact.classList.add('is-invalid');
    }
})

//Add eventlistner on submit
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();

    //Validate the form, then show alert of success/error
    let alertBox=document.getElementById('alertBox');

    // on success
    if(validname&&validemail&&validcontact){
        alertBox.innerHTML=` <div class="alert alert-success alert-dismissible fade show" id="fail" role="alert">
                <strong>Success !</strong> Your travel request has been submitted successfully.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }

    // on error
    else{
        alertBox.innerHTML=` <div class="alert alert-danger alert-dismissible fade show" id="fail" role="alert">
                <strong>Error !</strong> Your travel request has not been sent due to error.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }
})
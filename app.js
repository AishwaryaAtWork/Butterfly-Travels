//Name validation
let validname=false;
const Name=document.getElementById('name');
Name.addEventListener('blur',()=>{
    console.log('n');
    //Validate name here
    let regex=/^[a-zA-Z]([a-zA-Z ]){2,35}$/;
    let str=Name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('matched');
        Name.classList.remove('is-invalid');
        validname=true;
    }
    else{
        console.log('no mtched');
        Name.classList.add('is-invalid');
    }
})

//Email validation
let validemail=false;
const email=document.getElementById('email');
email.addEventListener('blur',()=>{
    console.log('e');
    //Validate email here
    let regex=/^([0-9a-zA-Z_\.\-]+)@([0-9a-zA-Z_\.\-]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('matched');
        email.classList.remove('is-invalid');
        validemail=true;
    }
    else{
        console.log('no mtched');
        email.classList.add('is-invalid');
    }
})

//Contact validation
let validcontact=false;
const contact=document.getElementById('contact');
contact.addEventListener('blur',()=>{
    console.log('c');
    //Validate contact here
    let regex=/^[0-9]([0-9\-]){9,12}$/;
    let str=contact.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('matched');
        contact.classList.remove('is-invalid');
        validcontact=true;
    }
    else{
        console.log('no mtched');
        contact.classList.add('is-invalid');
    }
})

//Submit 
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('Youclicked');
    //Submit your form here
    let success=document.getElementById('success');
    let fail=document.getElementById('fail');
    if(validname&&validemail&&validcontact){
        success.classList.add('show');
        fail.classList.remove('show');
    }
    else{
        fail.classList.add('show');
        success.classList.remove('show');

    }
})
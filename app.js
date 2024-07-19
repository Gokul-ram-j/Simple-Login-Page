const form1=document.querySelector("#lform")
const form2=document.querySelector("#rform")
let listOfUsers=[["gokul",1234]]
// error display
const edisplay1=document.querySelector(".errordisplay1")
const edisplay2=document.querySelector(".errordisplay2")

form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=document.querySelector(".uname").value
    let pass=document.querySelector(".upass").value
    if(name=="" || pass==""){
        alert("dont submit the form with empty values")
    }
    else{
        let userFound=false
        for(i=0;i<listOfUsers.length;i++){
            if(name==listOfUsers[i][0]){
                userFound=true
                if(pass==listOfUsers[i][1]){
                    edisplay1.style.color="green"
                    edisplay1.innerHTML="Authentication Approved"
                }
                else{
                    edisplay1.innerHTML="Incorrect Password" 
                    edisplay1.style.color="red"
                }
            }
        }
        if(userFound==false){
            edisplay1.innerHTML="User Not Found" 
            edisplay1.style.color="red"

        }
    }

})

form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser=document.querySelector("#nuser")
    let npass=document.querySelector("#npass")
    let ncpass=document.querySelector("#ncpass")
    if(newUser.value=="" || npass.value=="" || ncpass.value=="" ){
        alert("dont submit the form with empty values")
    }
    else if(npass.value != ncpass.value){
        npass.style.border="2px solid red"
        ncpass.style.border="2px solid red"
        edisplay2.style.color="red"
        edisplay2.innerHTML="your new password doesn't match with your confirm password"
    }
    else{
        edisplay2.innerHTML="successfully Registered"
        edisplay2.style.color="green"
        newUser.style.border="2px solid green"
        npass.style.border="2px solid green"
        ncpass.style.border="2px solid green"
        listOfUsers.push([newUser.value,parseInt(npass.value)])
        console.log(newUser.value,npass.value)
    }
    console.log(listOfUsers)

})




// for toggle
const lform=document.querySelector(".form")
const rform=document.querySelector(".form2")

const newregister=document.querySelector(".regnew")
newregister.addEventListener("click",()=>{
    lform.style.display="none"
    rform.style.display="block"
    
})

const loginbtn=document.querySelector(".login")
loginbtn.addEventListener("click",()=>{
    lform.style.display="block"
    rform.style.display="none"
})


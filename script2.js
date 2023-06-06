const lick=()=>{
    document.getElementById('main11').style.display='none'
}
const submitform=()=>{
  let em=document.getElementById('em').value
    let pass=document.getElementById('pass').value
    if(em=='syedvali221@gmail.com' && pass=='vali123'){
        window.location.href="/index.html" 
    }
    else{
        alert("wrongpassword")
    }
}
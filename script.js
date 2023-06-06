
const bar1=()=>{
    document.getElementById('bars').style.display==='flex'?
    document.getElementById('bars').style.display='none':
    document.getElementById('bars').style.display='flex'
    document.getElementById('vid33').style.display='none'
}
const vid=()=>{
    document.getElementById('vid33').style.display==='flex'?
    document.getElementById('vid33').style.display='none':
    document.getElementById('vid33').style.display='flex'
}
const click=()=>{
    click=document.getElementById('click22').value
    if(document.getElementById('main11')){
        window.location.href="/index.html"
 
    }
}


const darkMOde=()=>{
document.getElementById('NavBar').style.background="black";
document.getElementsByClassName('home1').style.color="white";



}
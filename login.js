let email=document.querySelector('.email')
let psw=document.querySelector('.psw')
let check=users.find(a=>(a.email===email.value))
if(check){
if (check.psw===psw.value) {
    alert('kecdiniz')
}
else{
    alert('psw sehvdir ')
}
}
else{
alert('email sehvdir')
}



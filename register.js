let name=document.querySelector('.name')
let email=document.querySelector('.email')
let psw=document.querySelector('.psw')
let rePsw=document.querySelector('.re_psw')
    

function  funk(e) {
    e.preventDefault()
    let yoxla=users.find(a=>a.email===email.value)
    if (!yoxla) {
        let element={
            id:users.length+1,
            name:name.value,
            email:email.value,
            psw:psw.value

        }
        if (psw.value===rePsw.value) {
            
        }
        else{
            alert('password eyni deyil')
        }
        users.push(element)
        localStorage.setItem('users',element)
    }
    else{
alert('bu istifadeci movcuddur')
    }
}






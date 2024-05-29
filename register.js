let name=document.querySelector('.namee')
let email=document.querySelector('.email')
let psw=document.querySelector('.psw')
let rePsw=document.querySelector('.re_psw')
    

function  funk(e){
    e.preventDefault()
    let yoxla=users.find(a=>a.email===email.value)
    if (!yoxla){

        if(psw.value===rePsw.value){

            let element={
                id:users.length+1,
                name:name.value,
                email:email.value,
                psw:psw.value
            }
            users.push(element)
            localStorage.setItem('users',JSON.stringify(users))
        }
    
        else{
            alert('password eyni deyil')
        }
    }
    else{
alert('bu istifadeci movcuddur')
    }
}






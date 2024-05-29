let firstSectionMain = document.querySelector('.first_section_main')
let popular = document.querySelector('#popular')
let best = document.querySelector('#best')
let action = document.querySelector('#action')
let img='https://image.tmdb.org/t/p/w500'
let bildiris=document.querySelector('.bildiris')
let popularLeft=document.querySelector('.popular_left')
let popularRight=document.querySelector('.popular_right')
let bestleft=document.querySelector('.bestleft')
let bestright=document.querySelector('.bestright')
let secondSectionCards = document.querySelector('.second_section_cards')
let firstSectionCards = document.querySelector('.first_section_cards')

let actionLeft=document.querySelector('.actionleft')
let actionRight=document.querySelector('.actionright')

function getLocal(url) {
    fetch(url)
    .then(resp=>resp.json())
    .then(arr=>arr.forEach(
        x=>{
            firstSectionCards.innerHTML+=`
            <div class='first_section_card'>
            <video controls src=${x.video} ></video>
            <p>${x.name}</p>
            </div>`
        }
    ))
}



window.addEventListener('load',()=>{
    getLocal('./LocalApi.json')
})





function getPopular(url) {
    fetch(url)
.then(resp=>resp.json())
.then(data=>data.results.forEach(a=>{
    popular.innerHTML+=`
<div class='popular_Card'>
<img src=${img+a.backdrop_path}/>
<p>${a.title}</p>
</div>
    `
}))}

let count=0

function slider1(){
    for(let i=0;i<popular.children.length;i++){
        popular.children[i].style.transform=`translateX(-${count*300}px)`
    }
}

// setInterval(()=>{
// if(count<popular.children.length-4){
// count++
// slider1()
// }
// else{
//     count=0
//     slider1()
// }
// },1000)



window.addEventListener('load',()=>{
    getPopular('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard');
})


popularLeft.addEventListener('click',()=>{
if(count>0){
count--
slider1()
}
else{
    count=0
    slider1()
}
})


popularRight.addEventListener('click',()=>{
    if(count<popular.children.length-4){
        count++
        slider1()
        }
        else{
            count=0
            slider1()
        }
})


function getBest(url) {
    fetch(url)
.then(resp=>resp.json())
.then(data=>data.results.forEach(a=>{
    best.innerHTML+=`
<div class='popular_Card'>
<img src=${img+a.backdrop_path}/>
<p>${a.title}</p>
</div>
    `
}))}

window.addEventListener('load',()=>{
    getBest('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy');
})
let bestcount=0

function sliderr(){
    for(let i=0; best.children.length;i++){
        best.children[i].style.transform=`translateX(-${bestcount*300}px)`
    }
}

bestleft.addEventListener('click',()=>{
    if(bestcount>0){
    bestcount--
    sliderr()
    }
    else{
        bestcount=0
        sliderr()
    }
    })
    
    bestright.addEventListener('click',()=>{
        if(bestcount<best.children.length-4){
            bestcount++
            sliderr()
            }
            else{
                bestcount=0
                sliderr()
            }
    })

    function getAction(url) {
        fetch(url)
    .then(resp=>resp.json())
    .then(data=>data.results.forEach(a=>{
        action.innerHTML+=`
    <div class='action_Card'>
    <img src=${img+a.backdrop_path}/>
    <p>${a.title}</p>
    </div>
        `
    }))}

    window.addEventListener('load',()=>{
        getAction('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action');
    })



    let actioncount=0

function slideraction(){
    for(let i=0; action.children.length;i++){
        action.children[i].style.transform=`translateX(-${actioncount*300}px)`
    }
}

actionLeft.addEventListener('click',()=>{
    if(actioncount>0){
        actioncount--
        slideraction()
    }
    else{
        actioncount=0
        slideraction()
    }
})


actionRight.addEventListener('click',()=>{
    if(actioncount<action.children.length-4){
        actioncount++
        slideraction()
    }
    else{
        actioncount=0
        slideraction()
    }
})
bildiris.addEventListener('click',()=>{
    window.location.href='./reglog.html'
})
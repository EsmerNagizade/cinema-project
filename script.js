let firstSectionMain = document.querySelector('.first_section_main')
let popular = document.querySelector('#popular')
let best = document.querySelector('#best')
let img='https://image.tmdb.org/t/p/w500'

let popularLeft=document.querySelector('.popular_left')
let popularRight=document.querySelector('.popular_right')
let bestleft=document.querySelector('.bestleft')
let bestright=document.querySelector('.bestright')




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
let btn=document.querySelector('button')
btn.addEventListener('click',function(){
    let h3=document.querySelector('h3')
    let randomeColor=getRandomeColor()
    h3.innerText=randomeColor

    let div= document.querySelector("div")
    div.style.backgroundColor=randomeColor
    // console.log('color updated');
})

function getRandomeColor(){
     let red=Math.floor(Math.random()*255)
     let green=Math.floor(Math.random()*255)
     let blue=Math.floor(Math.random()*255)
     let color=`rgb( ${red}, ${green}, ${blue})`
     return color
}

// let p=document.querySelector("h3")
// p.addEventListener('click',function () {
//     console.log('h1 was clicked');
// })
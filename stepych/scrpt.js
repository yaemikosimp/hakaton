
let header_left = document.getElementById ('burger')

header_left.addEventListener('click',function(){
    
let content = document.querySelector('.container_3')
content.style.display="flex"
let container2 = document.getElementById('container_1')
let container3 = document.getElementById('container_2')
if (content.classList.contains("hidden")) {
    
    content.classList.remove('hidden')
    content.classList.remove('hidden')
    container2_classList.add('hidden')
    container3_classList.add('hidden')
    
} else {
    content.classList.add('hidden')
    content.classList.add('hidden')
    container2_classList.remove('hidden')
    container3_classList.remove('hidden')
    
}
    
    

})
import { task } from "./taskData2.js";
import { moonData } from "./moonData.js";
import { greenData } from "./greenNatureData.js";
import { flowerData } from "./flowersData.js";
import { magicSkyData } from "./magicSkyData.js";
import { mountainData } from "./mountainData.js";
const greenData1 = greenData();
const flowerData1 = flowerData();
const moonData1 = moonData();
const magicSkyData1 = magicSkyData();
const mountainData1 = mountainData();
const taskData = task();


const main = document.querySelector('.main')
displayImg(moonData1, taskData)
// displayImg(mountainData1, taskData)
// displayImg(flowerData1, taskData)
// displayImg(greenData1, taskData)
// displayImg(magicSkyData1, taskData)



function displayImg(data, task) {
    const slideContainer = document.createElement('div')
    slideContainer.className = 'container'
    slideContainer.innerHTML = `
       ${data.map(el => `
       <div class="slide" id="${el.id}"

       style="background-image: url('${el.imgURL}')">
       <h3> ${el.name}</h3>
       <div class="slideTaskDay">
     <div class="filterTask"><span>All</span><span>Done</span><span>Active</span></div>
       <ul class="taskDay">
       ${task.map(t =>
        `
        <li ${t.id}><span>${t.time}</span><span class="taskValue">${t.task}</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
        
        `
    ).join('')}
         <li><span>8.00</span><span class="taskValue">some-some-some-task</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
 
         <li><span>8.00</span><span class="taskValue">some-task</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
 
         <li><span>8.00</span><span class="taskValue">some-task</span><i class="fas fa-edit"></i><i class="fas fa-check"></i><i class="fas fa-trash"></i></li>
 
       </ul>
 
       </div>
       <div class="count"><span>3 tasks</span> <span>2 done</span> <span>1 active</span></div>
     </div>
    `
    ).join('')}`
    main.appendChild(slideContainer)

    const slides = document.querySelectorAll('.slide')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

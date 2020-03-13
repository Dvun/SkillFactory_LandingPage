const projects = [
    {
      city: 'Rostov-on-Don LCD admiral',
       area: '81 m2',
        time: '3.5 months',
         cost: 'Upon request',
          pic: '../images/image 2.1.png'
        },
    {
      city: 'Sochi Thieves',
       area: '105 m2',
        time: '4 months',
         cost: 'Upon request',
          pic: '../images/image 3.jpg'
        },
    {
      city: 'Rostov-on-Don Patriotic',
       area: '93 m2',
        time: '3 months',
         cost: 'Upon request',
          pic: '../images/image 4.3.jpg'
        }
]


const buttonSliderLeft = document.querySelector('.leftArrow')
const buttonSliderRight = document.querySelector('.rightArrow')
const circlesFirst= document.querySelectorAll('.circle first')
const circlesSecond= document.querySelectorAll('.circle second')
const circlesThird= document.querySelectorAll('.circle third')
const cityText = document.querySelector('#city')
const timeText = document.querySelector('#time')
const areaText = document.querySelector('#area')
const costText = document.querySelector('#cost')
const sliderPic = document.querySelector('#sliderPic')
let slide = 0


  


  buttonSliderRight.onclick = function() {
    
  }


function slideRigth() {
  if (slide >= 2) {
    slide = 0
  } else {
    slide += 1
  }
}

function slideLeft() {
  if (slide >= 0) {
    slide = 2
  } else {
    slide -= 1
  }
}


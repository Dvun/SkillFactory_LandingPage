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
const circles= document.querySelectorAll('.circle')
const cityText = document.querySelector('#city')
const timeText = document.querySelector('#time')
const areaText = document.querySelector('#area')
const costText = document.querySelector('#cost')
const sliderPic = document.querySelector('#sliderPic')
let slide = 0



buttonSliderRight.onclick = () => {
  
  if (slide == 0) {
    circles[2].classList.remove('circle_active')
    circles[0].classList.add('circle_active')
    
  } else if (slide == -1) {
    circles[0].classList.remove('circle_active')
    circles[1].classList.add('circle_active')
    
  } else if (slide == -2) {
    circles[1].classList.remove('circle_active')
    circles[2].classList.add('circle_active')
  }
  slidePlus()
}

buttonSliderLeft.onclick = () => {
  
  if (slide == 0) {
    circles[1].classList.remove('circle_active')
    circles[2].classList.remove('circle_active')
    circles[0].classList.add('circle_active')
    
  } else if (slide == -1) {
    circles[2].classList.remove('circle_active')
    circles[1].classList.add('circle_active')
    circles[0].classList.remove('circle_active')
    
  } else if (slide == -2) {
    circles[1].classList.remove('circle_active')
    circles[0].classList.remove('circle_active')
    circles[2].classList.add('circle_active')
  }
  slideMinus()
}






slidePlus = () => {
  slide -= 1
  if (slide < -2) {
    slide = 0
  }
}

slideMinus = () => {
  slide += 1
  if (slide > 0) {
    slide = -2
  }
  console.log(slide);
}
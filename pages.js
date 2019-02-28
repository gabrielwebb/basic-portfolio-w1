// Variable for pageNumber

let pageNumber = 0
// page content
const pages = [
  {copy: 'a Cincy based Web Creative', background: '#edc7a9', circle: '3e78ed'},

  {
    copy: 'interested in blockchain tech & enjoys hip hop',
    background: '#e34a47',
    circle: '#alfffe'
  },

  {copy: 'available for fun creative work', background: '#d3c7f3', circle: '#f7fe00'},

  {
    copy: 'showing you some of his <a href="https://github.com/gabrielwebb">work</a>',
    background: '#FFFF33',
    circle: '#b472e6'
  }
]

// pick relevant tag variables
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

/// functions
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

const previous = function() {
  pageNumber = pageNumber - 1
  if (pageNumber < 0) {
    pageNumber = 3
  }
  updateSection()
}
///random funct
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)
  updateSection()
}

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// Event Listeners

// runs Next func on next tag click
nextTag.addEventListener('click', function() {
  next()
})
// runs previous func on  prev tag click
previousTag.addEventListener('click', function() {
  previous()
})
/// random func for random tag
randomTag.addEventListener('click', function() {
  random()
})

/// key listener

document.addEventListener('keyup', function(event) {
  console.log(event)
  
  
  if(event.key == "ArrowRight"){
    next()
  }
  
  if(event.key == "ArrowLeft"){
    previous()
  }
})

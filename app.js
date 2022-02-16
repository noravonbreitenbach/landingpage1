var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
	toggle_btn = document.querySelector(".toggle-btn");
	big_wrapper = document.querySelector(".big-wrapper");
	hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
	dark = !dark;
	let clone = big_wrapper.cloneNode(true);
	if(dark){
		clone.classList.remove("light");
		clone.classList.add("dark");
	} else {
		clone.classList.remove("dark");
		clone.classList.add("light");
	}
	clone.classList.add("copy");
	main.appendChild(clone);

	document.body.classList.add("stop-scrolling");

	clone.addEventListener("animationend", () => {
		document.body.classList.remove("stop-scrolling");
		big_wrapper.remove();
		clone.classList.remove("copy");
		declare();
		events();
	});
}

function events() {
toggle_btn.addEventListener("click", toggleAnimation);
hamburger_menu.addEventListener("click", () => {
	big_wrapper.classList.toggle("active");
});
}

events();

var fields = {};

document.addEventListener("DOMContentLoaded", function() {
	fields.firstName = document.getElementById('firstName');
	fields.email = document.getElementById('email');
	fields.newsletter = document.getElementById('newsletter');
	fields.newsletter = document.getElementById('waitinglist');
	fields.question = document.getElementById('message');
   })

function isNotEmpty(value) {
	if (value == null || typeof value == 'undefined' ) return false;
	return (value.length > 0);
}
function isEmail(email) {
	let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return regex.test(String(email).toLowerCase());
   }

function fieldValidation(field, validationFunction) {
	if (field == null) return false;
   
	let isFieldValid = validationFunction(field.value)
	if (!isFieldValid) {
	field.className = 'placeholderRed';
	} else {
	field.className = '';
	}
   
	return isFieldValid;
   }

function isValid() {
	var valid = true;
	
	valid &= fieldValidation(fields.firstName, isNotEmpty);
	valid &= fieldValidation(fields.email, isEmail);
	valid &= fieldValidation(fields.message, isNotEmpty);
   
	return valid;
   }

class User {
	constructor(firstName, email, newsletter, waitinglist, message) {
	this.firstName = firstName;
	this.email = email;
	this.newsletter = newsletter;
	this.waitinglist = waitinglist;
	this.message = message;
	}
   }

function sendContact() {
	fields.gender = getGender();

	if (isValid()) {
		let usr = new User(firstName.value, email.value, message.value);
		alert(`${usr.firstName} thanks for registering.`)
	} else {
		alert("There was an error")
	}

}
// toggle_btn.addEventListener("click", toggleAnimation);

// const slider = document.querySelector('.slider-container'),
//   slides = Array.from(document.querySelectorAll('.slide'))

// // set up our state
// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID,
//   currentIndex = 0

// // add our event listeners
// slides.forEach((slide, index) => {
//   const slideImage = slide.querySelector('img')
//   // disable default image drag
//   slideImage.addEventListener('dragstart', (e) => e.preventDefault())
//   // touch events
//   slide.addEventListener('touchstart', touchStart(index))
//   slide.addEventListener('touchend', touchEnd)
//   slide.addEventListener('touchmove', touchMove)
//   // mouse events
//   slide.addEventListener('mousedown', touchStart(index))
//   slide.addEventListener('mouseup', touchEnd)
//   slide.addEventListener('mousemove', touchMove)
//   slide.addEventListener('mouseleave', touchEnd)
// })

// // make responsive to viewport changes
// window.addEventListener('resize', setPositionByIndex)

// // prevent menu popup on long press
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }

// // use a HOF so we have index in a closure
// function touchStart(index) {
//   return function (event) {
//     currentIndex = index
//     startPos = getPositionX(event)
//     isDragging = true
//     animationID = requestAnimationFrame(animation)
//     slider.classList.add('grabbing')
//   }
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos
//   }
// }

// function touchEnd() {
//   cancelAnimationFrame(animationID)
//   isDragging = false
//   const movedBy = currentTranslate - prevTranslate

//   // if moved enough negative then snap to next slide if there is one
//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

//   // if moved enough positive then snap to previous slide if there is one
//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

//   setPositionByIndex()

//   slider.classList.remove('grabbing')
// }

// function animation() {
//   setSliderPosition()
//   if (isDragging) requestAnimationFrame(animation)
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth
//   prevTranslate = currentTranslate
//   setSliderPosition()
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`
// }
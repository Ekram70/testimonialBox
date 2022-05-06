const container = document.querySelector(".container");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImg.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

updateTestimonial();

setInterval(updateTestimonial, 5000);

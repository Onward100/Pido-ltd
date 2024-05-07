const navMenu = document.querySelector(".nav-bar");
const hamBuregerMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const navLinks = document.querySelectorAll(".nav-links");

hamBuregerMenu.addEventListener("click", () => {
  navMenu.style.transform = "translateY(0)";
});
closeMenu.addEventListener("click", () => {
  navMenu.style.transform = "translateY(-2000px)";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.style.transform = "translateY(-2000px)";
  });
});

// document.body.addEventListener("click", (e) => {
//   if (!navMenu.contains(e.target)) {
//     navMenu.style.transform = "translateY(-2000px)";
//   }
// });

// const name = document.querySelector(".name")
// const phone = document.querySelector(".number")
// const message = document.querySelector(".message")
// const submit = document.querySelector(".send")
// const errMessage = document.querySelectorAll(".errMessage")

// submit.addEventListener("click", () =>{
//   if(phone.value === ""){
//     setTimeout(() =>{
//       errMessage.forEach(err => {
//         err.innerHTML = "fields can't be empty"
//         err.style.color = "red"
//     })
      
//     }, 300);
//   }
// })
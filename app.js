document.querySelector("#contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  document.querySelector("#contactForm").classList.add("hidden");
  document.querySelector(".finalMessage").classList.remove("hidden");
});


function home() {
  
  window.location.href = "index.html"; 
}
AOS.init({
  
  mirror: true   
});
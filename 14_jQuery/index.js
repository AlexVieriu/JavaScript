//186. What is jQuery?

// alert("salut boss");


// 187. How to Incorporate jQuery into Websites


// 190. Manipulating Styles with jQuery

// $("h1").css("color", "green")

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title margin-50");
// $("h1").hasClass("margin-50");


// 191. Manipulating Text with jQuery

// $("button").text("Bye");
// $("button").html("<em>Bye</em>");


// // 192. Manipulating Attributes with jQuery

// console.log($("img").attr("src"));              // get 
// $("a").attr("href", "http://www.yahoo.com");    // set

// $("h1").addClass("big-title margin-50");
// console.log($("h1").attr("class"));

// // 193. Adding Event Listeners with jQuery

// // change the color of all buttons with JS
// for(var i=0; i<3; i++){
//     document.querySelectorAll(".button1")[i].addEventListener("click", function(){
//         document.querySelector(".button1").style.color = "purple";
//     })
// }

// // change the color of all buttons with jQuery
// $(".button2").click(function () { 
//     $(".button2").css("color", "purple");    
// });

// // change color when clicking on the h1
// $("h1").click(function () { 
//     $("h1").css("color", "purple"); 
//     setTimeout(() => {
//         $("h1").css("color", "yellow");  
//     }, 100);
// });

// // write the keypress in the console
// $("input").keydown(function (e) { 
//     console.log(e.key);
// });

// // keydown for the all document 
// $("body").keydown(function (e) {          
//     console.log(e.key);
// });

// $(document).keydown(function (e) {          
//     console.log(e.key);
// });

// // Challenge: show the key pressed in the h1 tag
// $(document).keydown(function (e) { 
//     $("h1").text(e.key);
// });

// $("h1").on("mouseover", function () {
//     $("h1").css("color", "purple");
// });


// 194. Adding and Removing Elements with jQuery

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");
// $("h1").remove();


// 195. Website Animations with jQuery

// $(".button1").on("click", function () {
//     $("h1").hide();
// });

// $("h1").show();

// $(".button2").on("click", function () {
//     $("img").toggle();
// });

// $(".button2").on("click", function () {
//     $("img").fadeOut();
// });

// $(".button2").on("click", function () {
//     $("img").fadeIn();
// });
 
// $(".button2").on("click", function () {
//     $("img").fadeToggle();
// });

// $(".button2").on("click", function () {
//     $("img").slideUp();
// });

// $(".button2").on("click", function () {
//     $("img").slideDown();
// });
 
// $(".button2").on("click", function () {
//     $("img").slideToggle();
// });

// $(".button2").on("click", function () {
//     $("img").animate({margin: 20 });
// });

// $(".button2").on("click", function () {
//     $("img").animate({opacity: 0.7 });
// });

// $(".button2").on("click", function () {
//     $("img").animate({width: 100 });
// });

// $(".button2").on("click", function () {
//     $("img").slideUp().slideDown().animate({opacity: 0.7});
// });

// $(".button1").click(function () { 
//     $("h1").slideUp().slideDown().addClass("font-size-50 margin");    
// });
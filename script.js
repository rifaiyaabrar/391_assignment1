const location2 = (window.location.href);
const date = (document.lastModified);
const hello = document.querySelector(".script");
const hello2 = () => {
    hello.textContent = `Last Modified date: ${date}      Location: ${location2}`
} 

// $(document).on("scroll", function () {
//     var pageTop = $(document).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var tags = $(".tag");

//     for (var i = 0; i < tags.length; i++) {
//         var tag = tags[i];

//         if ($(tag).position().top < pageBottom) {
//             $(tag).addClass("visible");
//         } else {
//             $(tag).removeClass("visible");
//         }
//     }
// });


var sections = document.querySelectorAll('section');
var options = {
rootMargin: '0px',
threshold: 0.25
}
var callback = (entries) => {
entries.forEach((entry) => {
var target = entry.target;
if (entry.intersectionRatio >= 0.25) {
target.classList.add("visible");
} else {
target.classList.remove("visible");
}
})
}
var observer = new IntersectionObserver(callback, options)
sections.forEach((section, index) => {
observer.observe(section)
})
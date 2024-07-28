// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// // counter design
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration){
//         let obj = document.getElementById(id),
//         current = start,
//         range = end = start,
//         increment = end > start > 1 = -1
//         step = math.abs(math.floor(duration / range)),
//         timer = setInterval(() => {
//             current += increment;
//             obj.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         }, stop);
//     }
// }

// counter("count1", 0, 1287, 3000);
// counter("count1", 100, 5786, 2500);
// counter("count1", 0, 1440, 3000)
// counter("count1", 0, 7110, 3000);
// });


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500); // Assuming you meant to use different IDs for each counter
    counter("count3", 0, 1440, 3000);  
    counter("count4", 0, 7110, 3000);
});



function changeBg(){
    var banner-section = document.getElementById('banner-section')
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    } else{
        banner-section.classList.add('bgColor')
    }
}

window.addEventListener('scroll', changeBg);


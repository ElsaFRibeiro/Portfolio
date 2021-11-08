// Changing class list for Menu

// Hide all from Menu

hideAll();
removeBold();
removeUnderline();
removeCircleColor();
hideAllSubmenu();     
hideAllSubmenu365();






// UXUI List
document.querySelector('.uxui_nav')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.uxui');
            boldSelected('.uxui_nav');
            underlineSelected('.uxui_nav');
            coloredCirclesMenu('.grey_line_0');
    
})


// UXUI Circle
document.querySelector('#dk_blue_uxui')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.uxui');
            boldSelected('.uxui_nav');
            underlineSelected('.uxui_nav');
            coloredCirclesMenu('.grey_line_0');
    
})

// UXUI Submenu Show
document.querySelector('#button_uxui_xmac')
        .addEventListener('click', function () {
            showSelectedSubmenu('section.xmac_uxui_info')
})

document.querySelector('#button_uxui_365')
        .addEventListener('click', function () {
            showSelectedSubmenu365('section.xmac_uxui_365')
})



// Design List
document.querySelector('.design_nav')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.design');
            boldSelected('.design_nav');
            underlineSelected('.design_nav');
            coloredCirclesMenu('.grey_line_1');

        })
        

// Design Circle
document.querySelector('#light_green_design')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.design');
            boldSelected('.design_nav');
            underlineSelected('.design_nav');
            coloredCirclesMenu('.grey_line_1');
            
        })


// Jewelry List
document.querySelector('.jewelry_nav')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.jewelry');
            boldSelected('.jewelry_nav');
            underlineSelected('.jewelry_nav');
            coloredCirclesMenu('.grey_line_2');



        })


// Jewelry Circle
document.querySelector('#dark_green_jewelry')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.jewelry');
            boldSelected('.jewelry_nav');
            underlineSelected('.jewelry_nav');
            coloredCirclesMenu('.grey_line_2');

        })


// Web List
document.querySelector('.web_nav')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.web');
            boldSelected('.web_nav');
            underlineSelected('.web_nav');
            coloredCirclesMenu('.grey_line_3');



        })

// Web Circle
document.querySelector('#pink_web')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.web');
            boldSelected('.web_nav');
            underlineSelected('.web_nav');
            coloredCirclesMenu('.grey_line_3');
        })

// artwork 
document.querySelector('.artwork_nav')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.artwork');
            boldSelected('.artwork_nav');
            underlineSelected('.artwork_nav');
            coloredCirclesMenu('.grey_line_4');

            
        })

// artwork Circle
document.querySelector('#purple_artwork')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.artwork');
            boldSelected('.artwork_nav');
            underlineSelected('.artwork_nav');
            coloredCirclesMenu('.grey_line_4');

            

        })        

// About 
document.querySelector('.about_nav')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.about');
            boldSelected('.about_nav');
            underlineSelected('.about_nav');
            coloredCirclesMenu('.grey_line_5');



        })
// About Circle
document.querySelector('#blue_about')
        .addEventListener('click', function () {
            removeUnderline();
            hideAll();
            removeBold();
            removeCircleColor();
            showSelected('article.about');
            boldSelected('.about_nav');
            underlineSelected('.about_nav');
            coloredCirclesMenu('.grey_line_5');

        })
        


// Function to show/hide selected in Menu List/Circles and submenu

// hide all the <article> menu
function hideAll() {
    const allArticles = document.querySelectorAll('article');
    // array -> for of -> display none
    for (const articleHTML of allArticles) {
        articleHTML.style.display = "none";
    }
}

// hide all submenu XMAC
function hideAllSubmenu() {
    const xmacArticle = document.querySelectorAll('.xmac_uxui_info');
    // array -> for of -> display none
    for (const article of xmacArticle) {
        article.style.display = "none";
    }
}

// hide all submenu 365 Alert
function hideAllSubmenu365() {
    const articles365 = document.querySelectorAll('.xmac_uxui_365');
    // array -> for of -> display none
    for (const article365 of articles365) {
        article365.style.display = "none";
    }
}



// show only the "selected" - Menu
function showSelected(selector) {
    const selectedlist = document.querySelectorAll(selector);
    for (const selected of selectedlist) {
        selected.style.display = "";
        
    }
}

// show only the "selected" - SubMenu XMAC
function showSelectedSubmenu(selector) {
    const selectedxmac = document.querySelectorAll(selector);
    for (const select of selectedxmac) {
        select.style.display = "";   
     
    }
}

// show the "selected" - SubMenu 365
function showSelectedSubmenu365(selector) {
    const selected365 = document.querySelectorAll(selector);
    for (const select365 of selected365) {
        select365.style.display = "";   
     
    }
}



// bold only the "selected"
function boldSelected(selector) {
    const selectedElement = document.querySelectorAll(selector);
    for (const elementtoBold of selectedElement) {
        elementtoBold.style.fontWeight="bold";
        
    }
}   


// remove bold 
function removeBold() {
    const boldedElements = document.querySelectorAll('li');
    for (const boldedElement of boldedElements) {
        boldedElement.style.fontWeight="100";
    }
}   

// remove Circle Colors 
function removeCircleColor() {
    const coloredCircle = document.querySelectorAll('.grey_line');
    for (const circle of coloredCircle) {
        circle.style.borderColor = "none";
    }
}  

// Circles Color
function coloredCirclesMenu(selector) {
    const menuCircles = document.querySelectorAll(selector);

    for (const circle of menuCircles) {
        if (circle.className.includes('grey_line_5')) {
            circle.style.borderColor = "#5cc2cf";
        } else if (circle.className.includes('grey_line_1')) {
            circle.style.borderColor = "#2a8b75";
        } else if (circle.className.includes('grey_line_2')) {
            circle.style.borderColor = "#cdda17";
        } else if (circle.className.includes('grey_line_3')) {
            circle.style.borderColor = "#af4450";
        } else if (circle.className.includes('grey_line_0')) {
            circle.style.borderColor = "#7f9cc2";
        } 
    }
}

// remove underline 
function removeUnderline() {

    const underlinedElements = document.querySelectorAll('li');
   
    for (const underlinedRemove of underlinedElements) {
         if (underlinedRemove.className.includes('about_nav')) {
            underlinedRemove.style.borderTop = "none";
         } else if (underlinedRemove.className.includes('design_nav')) {
            underlinedRemove.style.borderTop = "none";
         } else if (underlinedRemove.className.includes('jewelry_nav')) {
            underlinedRemove.style.borderTop = "none";
        } else if (underlinedRemove.className.includes('web_nav')) {
            underlinedRemove.style.borderTop = "none";
        } else if (underlinedRemove.className.includes('artwork_nav')) {
            underlinedRemove.style.borderTop = "none";
        } else if (underlinedRemove.className.includes('uxui_nav')) {
            underlinedRemove.style.borderTop = "none";
        }
    }

} 


// underline only the "selected"
function underlineSelected(selector) {

    const toUnderline = document.querySelectorAll(selector);

    for (const underline of toUnderline) {
        if (underline.className.includes('about_nav')) {
            underline.style.borderTop = "1.5px solid #5cc2cf";
        } else if (underline.className.includes('design_nav')) {
            underline.style.borderTop = "1.5px solid #2a8b75";
        } else if (underline.className.includes('jewelry_nav')) {
            underline.style.borderTop = "1.5px solid #dbd815";
        } else if (underline.className.includes('web_nav')) {
            underline.style.borderTop = "1.5px solid #af4450";
        } else if (underline.className.includes('uxui_nav')) {
            underline.style.borderTop = "1.5px solid #7f9cc2";
        } else {
            underline.style.borderTop = "1.5px solid #760b85";
        }  
    }
}




















// Slideshow Design  

var slidePosition = 1;
SlideShowDesign(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShowDesign(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShowDesign(slidePosition = n);
}

function SlideShowDesign(n) {
  let i;
  let d_slides = document.getElementsByClassName("design_container");
  let d_circles = document.getElementsByClassName("design_dots");
  if (n > d_slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = d_slides.length}
  for (i = 0; i < d_slides.length; i++) {
    d_slides[i].style.display = "none";
  }
  for (i = 0; i < d_circles.length; i++) {
    d_circles[i].className = d_circles[i].className.replace(" enable", "");
  }
  d_slides[slidePosition-1].style.display = "block";
  d_circles[slidePosition-1].className += " enable";
} 



// Slideshow Jewelry  


var slidePositionJ = 1;
SlideShowJewelry(slidePositionJ);

// forward/Back controls
function plusSlidesJ(m) {
    SlideShowJewelry(slidePositionJ += m);
}

//  images controls
function currentSlideJ(m) {
    SlideShowJewelry(slidePositionJ = m);
}

function SlideShowJewelry(m) {
    let i;
    let jslides = document.getElementsByClassName("jewelry_container");
    let jcircles = document.getElementsByClassName("jewelry_dots");
    if (m > jslides.length) {slidePositionJ = 1}
    if (m < 1) {slidePositionJ = jslides.length}
    for (i = 0; i < jslides.length; i++) {
        jslides[i].style.display = "none";
    }
    for (i = 0; i < jcircles.length; i++) {
        jcircles[i].className = jcircles[i].className.replace(" enable", "");
    }
    jslides[slidePositionJ-1].style.display = "block";
    jcircles[slidePositionJ-1].className += " enable";
}

  
// Slideshow Artwork  


var slidePositionW = 1;
SlideShowArt(slidePositionW);

// forward/Back controls
function plusSlidesW(o) {
    SlideShowArt(slidePositionW += o);
}

//  images controls
function currentSlideW(o) {
    SlideShowArt(slidePositionW = o);
}

function SlideShowArt(o) {
    let i;
    let wslides = document.getElementsByClassName("artwork_container");
    let wcircles = document.getElementsByClassName("artwork_dots");
    if (o > wslides.length) {slidePositionW = 1}
    if (o < 1) {slidePositionW = wslides.length}
    for (i = 0; i < wslides.length; i++) {
        wslides[i].style.display = "none";
    }
    for (i = 0; i < wcircles.length; i++) {
        wcircles[i].className = wcircles[i].className.replace(" enable", "");
    }
    wslides[slidePositionW-1].style.display = "block";
    wcircles[slidePositionW-1].className += " enable";
}

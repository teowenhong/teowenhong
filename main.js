window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    }, 1000);
})

const nav = document.querySelector(".navbar-item");
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        nav.classList.add("close");
    })
}

window.addEventListener("scroll",() => {
    let fromTop = window.scrollY;

    navListAnchor = nav.querySelectorAll("a");

    navListAnchor.forEach(link => {
        let section = document.querySelector(link.hash);

        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add("active");
        }

        else{
            link.classList.remove("active");
        }
    });
});

if(window.innerWidth < 1000){
    burger = document.querySelector(".menu-btn");
    console.log(burger);
    burger.addEventListener("click", function(){
        nav.classList.toggle("close");
    })
}

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $part = $('.part');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $part.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();
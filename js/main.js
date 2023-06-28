$('.btn-menu').click(function(){
  $(this).toggleClass('active');
  $('.navbar').toggleClass('show');
  $('body').toggleClass('overflow-none');
});

$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  $(this).parents('.dropdown').find('.dropdown-menu').toggleClass('show');
});

$(".modal-open").click(function(e){
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $('body').removeClass('overflow-none');
  $('body').addClass('overflow-none');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
      $('.login__mobile-link').removeClass('active');
    }
  }
  for(let elem of modalsGroup){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
      $('.login__mobile-link').removeClass('active');
    }
  }
})

new Swiper(".customer-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".customer-next",
    prevEl: ".customer-prev",
  },
});

new Swiper(".product-customer-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".product-customer-next",
    prevEl: ".product-customer-prev",
  },
});

if(window.innerWidth < 768){
  new Swiper(".project-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
  });
}

$('.presentation__link').click(function(e){
  e.preventDefault();
  $('.presentation').toggleClass('show');
  $(this).text() === 'Показать еще ' ? $(this).text('Скрыть') :  $(this).text('Показать еще ');
});

let video = document.querySelector("#video-test-net");
let videoDuration = document.querySelector(".video-block__duration");
let playBtn = document.querySelector(".play-btn");

if(video){
  playBtn.addEventListener('click', function () {
    $(this).toggleClass('collapse');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
  }, false);

  let $video = $("#video-test-net"),
  mousedown = false;

  $video.click(function(){
    if (this.paused) {
        this.play();
        return false;
    }
    return true;
  });

  $video.on('mousedown', function () {
    mousedown = true;
  });

  $(window).on('mouseup', function () {
    mousedown = false;
  });

  $video.on('play', function () {
    $video.attr('controls', '');
  });

  $video.on('pause', function () {
    $(playBtn).toggleClass('collapse');
  if (!mousedown) {
      $video.removeAttr('controls');
  }
  });
}

$('.catalogue-link').click(function(e){
  e.preventDefault();
  $('.aside-nav').toggleClass('show');
  $(this).toggleClass('active');
  $(this).text() === 'Показать каталог' ? $(this).text('Скрыть каталог') :  $(this).text('Показать каталог');
});

$('.showmore').click(function(e){
  e.preventDefault();
  $(this).parent().addClass('active');
});

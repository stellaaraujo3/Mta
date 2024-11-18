 
 window.addEventListener('scroll', function () {
    var alturaScroll = document.documentElement.scrollTop;
    if (alturaScroll >= 158) {
      document.querySelector('.menu-principal').classList.add("menu-fixo");
    } else {
      document.querySelector('.menu-principal').classList.remove("menu-fixo");
    }
  });
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

console.log('Вёрстка валидная +10 \n<header>, <main>, <footer> +2 \n шесть элементов <section> (по количеству секций) +2 \nтолько один заголовок <h1> +2\nпять заголовков <h2> +2\n (панель навигации) +2\nдва списка ul > li > a +2\nдесять кнопок <button> +2\n<input type="email"> и <input type="tel"> +2\n<textarea> +2\nplaceholder +2\nВёрстка соответствует макету +48\n используются флексы +2\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\nиконки добавлены в формате .svg +2\nизображения добавлены в формате .jpg +2\nесть favicon +2\nплавная прокрутка по якорям +5\nссылки в футере ведут на гитхаб автора проекта и на страницу курса +5\nизменение или цвета шрифта +5\nплавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n итог:110')
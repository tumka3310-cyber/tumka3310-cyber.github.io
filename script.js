// Анимация для кнопки
document.querySelector(".md3-button").addEventListener("click", function() {
    alert("Скоро будет больше информации!");
});

// Анимация при загрузке страницы
window.addEventListener("load", function() {
    document.querySelector(".logo").style.opacity = "0";
    document.querySelector(".logo").style.transform = "translateY(20px)";

    setTimeout(() => {
        document.querySelector(".logo").style.transition = "all 0.5s ease";
        document.querySelector(".logo").style.opacity = "1";
        document.querySelector(".logo").style.transform = "translateY(0)";
    }, 100);
});

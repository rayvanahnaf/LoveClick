window.onload = function () {
    var bodyDom = document.querySelector('body');
    var h = document.querySelector('.heart-wrapper');
    // add class small to make all hearts small 

    var newHearthtml = '<div class="heart-wrapper active"><div class="heart"><div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div></div><div class="ring"></div><div class="circles"></div></div>'
    bodyDom.addEventListener('click', function (event) {
        var s = '<li>text</li>'; // HTML string

        var div = document.createElement('div');
        div.innerHTML = newHearthtml;

        var x = event.pageX - 60;
        var y = event.pageY - 60;
        div.style.position = 'absolute';
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        div.addEventListener("animationend", function () {
            this.style.display = 'none';
        }, false);
        document.querySelector('body').appendChild(div);
    }, false);

};
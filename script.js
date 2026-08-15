function upDate(element) {

    var image = document.getElementById("image");

    image.style.backgroundImage = "url('" + element.src + "')";

    image.innerHTML = element.alt;
}


function unDo() {

    var image = document.getElementById("image");

    image.style.backgroundImage = "url('')";

    image.innerHTML = "Hover over an image below to display here.";
}

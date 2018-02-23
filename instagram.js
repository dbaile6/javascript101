var body = document.querySelector("body");
var galleryDiv = document.createElement("div");
var lightBoxDiv = document.createElement("div");
var lightBoxImg = document.createElement("img");
lightBoxDiv.classList.add("enlarged");
galleryDiv.classList.add("gallery-class");

var gallery = [
    {link: 'photo1.jpeg'},
    {link: 'photo2.jpeg'},
    {link: 'photo3.jpeg'}
];
body.appendChild(lightBoxDiv);
body.appendChild(galleryDiv);
lightBoxDiv.appendChild(lightBoxImg);


for (var i = 0; i<gallery.length; i++) {
    var pic = gallery[i];
    var galImg = document.createElement('img');
    galImg.src = pic.link;
    galleryDiv.appendChild(galImg);
    galleryDiv.classList.add('gallery-class');
    galImg.addEventListener('click', lightBox);
}
function lightBox() {
    lightBoxImg.setAttribute("src", this.src);
    lightBoxDiv.classList.toggle('visible');
    lightBoxImg.addEventListener('click', normalState);
}
function normalState() {
    lightBoxDiv.classList.toggle('visible');
}

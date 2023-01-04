document.addEventListener('DOMContentLoaded', () => {
var userRating = document.querySelector('.apiLinkClass');
// var getLink = JSON.parse(userRating.dataset.link);
var getLink = userRating.dataset.link;

console.log(getLink);

const xhr = new XMLHttpRequest();
// console.log({{particle.apiLink}})
xhr.open("GET", getLink);

xhr.onload = function () {
  if (this.status === 200) {
    let obj = JSON.parse(this.responseText);
    console.log(obj);
  }
};
xhr.send();
    
});
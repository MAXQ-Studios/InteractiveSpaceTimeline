var coll = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const dates = document.querySelectorAll('.date');

    dates.forEach(date => {
        date.addEventListener('click', () => {
            const description = date.nextElementSibling;
            description.classList.toggle('expanded');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dates = document.querySelectorAll('.explain');

    dates.forEach(date => {
        date.addEventListener('click', () => {
            const description = date.nextElementSibling;
            description.classList.toggle('explaination');
        });
    });
});
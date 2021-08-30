// sticky nav bar
let bodyScroll = document.querySelector('html ,body');
let sticknav = document.querySelector('.sticky-nav');

window.addEventListener('scroll', function () {
  //  console.log(bodyScroll.scrollTop);
  //   console.log(sticknav);
  if (bodyScroll.scrollTop > 165) {
    sticknav.style.display = 'block';
  } else {
    sticknav.style.display = 'none';
  }
});


/*start occordion list */
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/* end occordion list */

/* start select specific occordion list */
function openQuestion(evt, question) {
  let i, answer, tablinks;
  answer = document.getElementsByClassName("answer");
  for (i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(question).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* end select specific occordion list */

// Scroll top
let iconScroll = document.querySelector('.scroll');
//let showMore = document.querySelector('.scroll');

window.addEventListener('scroll', function () {
  if (bodyScroll.scrollTop >= 60) {
    iconScroll.style.display = 'block';

  } else {
    iconScroll.style.display = 'none';
  } //showMore.style.cssText = 'transition: all 0.5s ease-in-out;';
})
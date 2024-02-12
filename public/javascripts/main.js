function bannerSwitcher() {
  var inputs = document.querySelectorAll('.sec-1-input')
  var checkedInput = document.querySelector('.sec-1-input:checked')
  var next = checkedInput ? checkedInput.nextElementSibling : inputs[0]
  if (next) {
    next.checked = true
  } else {
    inputs[0].checked = true
  }
}

var bannerTimer = setInterval(bannerSwitcher, 5000)

document.querySelectorAll('nav .controls label').forEach(function (label) {
  label.addEventListener('click', function () {
    clearInterval(bannerTimer)
    bannerTimer = setInterval(bannerSwitcher, 5000)
  })
})

///// Anchor Smooth Scroll /////
// document.querySelectorAll('.main-menu a, .learn-more-button a').forEach(function(link) {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     var target = this.getAttribute('href');
//     document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
//   });
// });

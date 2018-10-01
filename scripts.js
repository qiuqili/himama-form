window.addEventListener('focusout', check);
function check(e) {
  var input = e.target;
  var field = input.parentNode.parentNode;
  var inputs = Array.from(field.querySelectorAll("input[type='email'],input[type='text'],input[type='tel']"));

  var allFilled = inputs.every(i => i.value);

  if (allFilled) {
    field.previousElementSibling.classList.add('colorful');
  } else {
    field.previousElementSibling.classList.remove('colorful');
  }

  if (input.value === '') {
    input.classList.remove('filled');
  } else {
    input.classList.add('filled');
  }
}

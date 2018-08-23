
//name is focused on load, hide certain boxes
$(document).ready(function () {
  $('#name').focus();
  $('#other-title').hide();
  $('#payment').val("credit card");
  $('fieldset div p').hide();
  $('#payment option[value="select_method"]').prop("disabled",true)
  $('#colors-js-puns').hide()
  $('#mail').addClass('invalid')
  $('#cc-num').addClass('invalid')
  $('#zip').addClass('invalid')
  $('#cvv').addClass('invalid')
});
//This function shows the input text box for other roles
//when "other" is chosen from drop down box and hides when it's unselected.
function title(){
$('#title').change( function(){
  if ($(this).val() === "other") {
  $('#other-title').show();
  } else {
  $('#other-title').hide();
    }
  });
}

title()

// function to make certain colors appear when a value is picked
// and hides colors if neither "js puns" or "heart js" is chosen
function design(){
$('#design').change( function(){
  if ($(this).val() === "js puns"){
    $('#colors-js-puns').show()
    $('#color').val('cornflowerblue')
    $('#color option:gt(2)').hide()
    $('#color option:lt(3)').show()
    } else if ($(this).val() === "heart js"){
      $('#colors-js-puns').show()
      $('#color').val('tomato')
      $('#color option:lt(3)').hide()
      $('#color option:gt(2)').show()
    } else{
      $('#colors-js-puns').hide()
    }
    });
}
design()

/* function to both add a sum for the cost of the Activities
 and disable certain activities if others are selected.
 had to append a div to activities and innerHTML changes
  depending on the checkbox, which adds or subtracts  */
function sum(){
let totalSum = 0;
$('.activities').append('<div id="divSum"></div>')
let changeSum = function(sum){
  totalSum += sum;
  document.getElementById('divSum').innerHTML = "Total: $" + totalSum;
  }

$('.activities input[name="all"]').change( function() {
if($(this).is(':checked')) {
  changeSum(200)
  } else {
  changeSum(-200)
    }
});

$('.activities input[name="js-frameworks"]').change( function() {
  if ($(this).is(':checked')) {
    $('.activities input[name="express"]').prop('disabled', true);
    $('.activities label:eq(3)').css("color", "grey").css("text-decoration", "line-through")
    changeSum(100)
    } else {
      $('.activities input[name="express"]').prop('disabled', false)
      $('.activities label:eq(3)').css("color", "black").css("text-decoration", "none")
      changeSum(-100)
        }
});

$('.activities input[name="js-libs"]').change( function() {
  if ($(this).is(':checked')) {
    $('.activities input[name="node"]').prop('disabled', true)
    $('.activities label:eq(4)').css("color", "grey").css("text-decoration", "line-through")
    changeSum(100)
    } else {
      $('.activities input[name="node"]').prop('disabled', false)
      $('.activities label:eq(4)').css("color", "black").css("text-decoration", "none")
      changeSum(-100)
        }
});

$('.activities input[name="express"]').change( function() {
  if ($(this).is(':checked')) {
    $('.activities input[name="js-frameworks"]').prop('disabled', true)
    $('.activities label:eq(1)').css("color", "grey").css("text-decoration", "line-through")
    changeSum(100)
    } else {
      $('.activities input[name="js-frameworks"]').prop('disabled', false)
      $('.activities label:eq(1)').css("color", "black").css("text-decoration", "none")
      changeSum(-100)
        }
});

$('.activities input[name="node"]').change( function () {
  if ($(this).is(':checked')) {
    $('.activities input[name="js-libs"]').prop('disabled', true)
    $('.activities label:eq(2)').css("color", "grey").css("text-decoration", "line-through")
    changeSum(100)
    } else {
      $('.activities input[name="js-libs"]').prop('disabled', false)
      $('.activities label:eq(2)').css("color", "black").css("text-decoration", "none")
      changeSum(-100)
        }
});
$('.activities input[name="build-tools"]').change( function () {
  if ($(this).is(':checked')) {
    changeSum(100)
    } else {
    changeSum(-100)
      }
  });
$('.activities input[name="npm"]').change( function() {
  if ($(this).is(':checked')) {
    changeSum(100)
    } else {
    changeSum(-100)
      }
 });
}
sum()

/* function to show the fields pertinent to payment selection
 and hides the rest.  When picking paypal or  Bitcoin
 removes class from creditcard related inputs. */
function paymentInfo () {
$('#payment').change(function () {
    if ($(this).val() === "credit card") {
      $('#credit-card').show();
      $('fieldset div p').hide();
    } else if ($(this).val() === "paypal") {
      $('fieldset div p:eq(0)').show();
      $('#credit-card').hide();
      $('fieldset div p:eq(1)').hide();
      $('#cc-num').removeClass()
      $('#zip').removeClass()
      $('#cvv').removeClass()
    } else if (($(this).val() === "bitcoin")) {
      $('fieldset div p:eq(1)').show();
      $('#credit-card').hide();
      $('fieldset div p:eq(0)').hide();
      $('#cc-num').removeClass()
      $('#zip').removeClass()
      $('#cvv').removeClass()
    }
  })

}
paymentInfo()

/* how I added validation classes, name was easy enough
 make sure the input value had something in interval
 if not, it was invalid.  Added an on focus so it'd give a ready
 border to let user know it wasn't valid yet.
 border is green when valid */
function name() {
$('#name').on("input", function () {
    let inputs = $(this);
    let name = inputs.val();
    if (name) {
      inputs.removeClass("invalid").addClass("valid");
    } else {
      inputs.removeClass("valid").addClass("invalid");
    }
})
$('#name').on("focus", function() {
    let inputs = $(this);
    let name = inputs.val();
    if (name === "") {inputs.removeClass("valid").addClass("invalid");
    }
  })
}
name()

/* this one was a bit trickier, had to find an email validation
 and learn about test function, which tests the  parameters set
 during the variable email. doesn't turn green until @ and .com/.net/etc
 is used. */

 function mail () {

$('#mail').on("input", function() {
  let inputs = $(this);
  let email = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  let true_email = email.test(inputs.val());
    if (true_email) {
      inputs.removeClass("invalid").addClass("valid");
  }  else {
      inputs.removeClass("valid").addClass("invalid");
      }
  })
  $('#mail').on("focus", function() {
    let inputs = $(this);
    let email = inputs.val();
    if (email === "") {
      inputs.removeClass("valid").addClass("invalid");
    }
  })
}
mail()

/* function for when the other title was chosen and is used to validate it's inputs
 more on input and focus valid/invalid class use. */
function otherTitle () {
$('#other-title').on("input", function () {
    let inputs = $(this);
    let name = inputs.val();
    if (name) {
      inputs.removeClass("invalid").addClass("valid");
    } else {
      inputs.removeClass("valid").addClass("invalid");
    }
  })
$('#other-title').on("focus", function() {
    let inputs = $(this);
    let name = inputs.val();
    if (name === "") {inputs.removeClass("valid").addClass("invalid");
    }
  })
}
otherTitle()

/* ran into errors after choosing other, then another roles
 so added this function to remove classes from #other-title */
function notOther () {
$('#title').change(function () {
    if ($(this).val() !== "other") {
      $('#other-title').removeClass()
    }
  })
}
notOther()

/* This was a fun part, making sure that the input was a certain length
and that it was only numbers that were valid chars.  Took me a while to find
the correct tool (isNumeric). but got there eventually and it works well.
*/
function credit () {
$('#cc-num').on("input",function () {
    let inputs = $(this);
    let credNumbs = inputs.val().length > 12 && inputs.val().length < 17
    if ($.isNumeric($('#cc-num').val()) && (credNumbs)) {
      inputs.removeClass("invalid").addClass("valid")
    } else {inputs.removeClass("valid").addClass("invalid")
    }
  })

$('#zip').on("input",function () {
    let inputs = $(this);
    let post = inputs.val().length > 4  && inputs.val().length < 6
    if ($.isNumeric($('#zip').val()) && (post)) {
      inputs.removeClass("invalid").addClass("valid")
    } else {
      inputs.removeClass("valid").addClass("invalid")
    }
  })

$('#cvv').on("input",function () {
    let inputs = $(this);
    let cvv = inputs.val().length > 2 && inputs.val().length < 4;
    if ($.isNumeric($('#cvv').val()) && (cvv)) {
      inputs.removeClass("invalid").addClass("valid");
    } else {
      inputs.removeClass("valid").addClass("invalid");
    }
  })
}
credit()

/* the last piece of the puzzle, validation has to check if there's any invalid
classes in the inputs and that at least one checkbox is checked. it would then
go through and give invalid classes to any input without valid input.  Then takes
user back to top and shows a message of needing to fill in all inputs and mark
at least one checkbox.  But if all is valid, then alert pops up thanking user.
*/
function validate () {
  $('button[type="submit"]').click(function(e) {
    if (($('input:text').hasClass("invalid"))) {
      e.preventDefault();
      $("fieldset:eq(0)").prepend('<p class="invalid">Please Correct the highlighted areas and make sure to check at least one activity.</p>')
      $('html,body').animate({scrollTop: 0});
    }if (($('input').hasClass("valid"))) {
      $("fieldset:eq(0) legend p").hide()
    }if (($('input:checkbox:checked').length < 1)) {
      $("fieldset:eq(2) legend").append('<p class="invalid">Please pick an activity.</p>')
      e.preventDefault();
      $("fieldset:eq(2) legend").animate({scrollTop: 0});
    }if (($('input:checkbox:checked').length >= 1)) {
      $("fieldset:eq(2) legend p").hide()
    }if($('#name').val() === "") {
      $('#name').addClass("invalid")
    } if ($('#mail').val() === "") {
      $('#mail').addClass("invalid")
    } if ($('#payment').val() === "credit card"  && $('#cc-num').val() === "") {
      $('#cc-num').addClass("invalid")
    } if ($('#payment').val() === "credit card"  && $('#zip').val() === "") {
      $('#zip').addClass("invalid")
    } if ($('#payment').val() === "credit card"  && $('#cvv').val() === "") {
      $('#cvv').addClass("invalid")
    }
})
}
validate()

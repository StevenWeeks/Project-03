

$(document).ready(function () {
  $('#name').focus();
  $('#other-title').hide();
  $('#payment').val("credit card");
  $('fieldset div p').hide();
  $('#payment option[value="select_method"]').prop("disabled",true)
});

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

function design(){
$('#design').change( function(){
  if ($(this).val() === "js puns"){
    $('#color').val('cornflowerblue')
    $('#color option:gt(2)').hide()
    $('#color option:lt(3)').show()
    } else if ($(this).val() === "heart js"){
      $('#color').val('tomato')
      $('#color option:lt(3)').hide()
      $('#color option:gt(2)').show()
      }
    });
}
design()

$('.activities input[name="all"]')
$('.activities input[name="js-frameworks"]').click( function(){
  if ($(this).is(':checked')){
    $('.activities input[name="express"]').prop('disabled', true);
    $('.activities label:eq(3)').css("color", "grey").css("text-decoration", "line-through")
    } else {
      $('.activities input[name="express"]').prop('disabled', false)
      $('.activities label:eq(3)').css("color", "black").css("text-decoration", "none")
        }
});

$('.activities input[name="js-libs"]').click( function(){
  if ($(this).is(':checked')){
    $('.activities input[name="node"]').prop('disabled', true)
    $('.activities label:eq(4)').css("color", "grey").css("text-decoration", "line-through")
    } else {
      $('.activities input[name="node"]').prop('disabled', false)
      $('.activities label:eq(4)').css("color", "black").css("text-decoration", "none")
        }
});

$('.activities input[name="express"]').click( function(){
  if ($(this).is(':checked')){
    $('.activities input[name="js-frameworks"]').prop('disabled', true)
    $('.activities label:eq(1)').css("color", "grey").css("text-decoration", "line-through")
    } else {
      $('.activities input[name="js-frameworks"]').prop('disabled', false)
      $('.activities label:eq(1)').css("color", "black").css("text-decoration", "none")
        }
});

$('.activities input[name="node"]').click( function(){
  if ($(this).is(':checked')){
    $('.activities input[name="js-libs"]').prop('disabled', true)
    $('.activities label:eq(2)').css("color", "grey").css("text-decoration", "line-through")
    $('')
    } else {
      $('.activities input[name="js-libs"]').prop('disabled', false)
      $('.activities label:eq(2)').css("color", "black").css("text-decoration", "none")
        }
});
$('.activities input[name="build-tools"]')
$('.activities input[name="npm"]')

function clickShow(){
  let start = 0;
  let money = $("<div></div>").html("Total:$" + start).addClass('moneys')
$('.activities').append(money);
$('.moneys').hide()

  $('.activities input[type="checkbox"]').click(function(){
if ($('.activities input[type="checkbox"]').is(':checked')){
  $('.moneys').show()
  } else {
  $('.moneys').hide()
    }

  });

  $('.activities input[type="checkbox"]').click(function(){

  });
}
clickShow()

function paymentInfo(){
$('#payment').change(function(){
  if ($(this).val() === "credit card") {
    $('#credit-card').show();
    $('fieldset div p').hide();
  } else if ($(this).val() === "paypal") {
    $('fieldset div p:eq(0)').show();
    $('#credit-card').hide();
    $('fieldset div p:eq(1)').hide();
  } else if (($(this).val() === "bitcoin")){
    $('fieldset div p:eq(1)').show();
    $('#credit-card').hide();
    $('fieldset div p:eq(0)').hide();
    }
  })

}
paymentInfo()

$('#name').on("input", function(){
  let inputs = $(this);
  let name = inputs.val();
  if (name){inputs.removeClass("invalid").addClass("valid");
  } else {inputs.removeClass("valid").addClass("invalid");
    }
})

$('#mail').on("input", function(){
  let inputs = $(this);
  let email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  let true_email = email.test(inputs.val());
    if (true_email){inputs.removeClass("invalid").addClass("valid");
  }  else {inputs.removeClass("valid").addClass("invalid");
      }
  })

  $('#other-title').on("input", function(){
    let inputs = $(this);
    let name = inputs.val();
    if (name){inputs.removeClass("invalid").addClass("valid");
    } else {inputs.removeClass("valid").addClass("invalid");
      }
  })
$('#cc-num').on("input",function(){
  let inputs = $(this);
  let credNumbs = inputs.val().length > 12  && inputs.val().length < 17;
    if ($.isNumeric($('#cc-num').val()) && (credNumbs)){inputs.removeClass("invalid").addClass("valid");
      } else {inputs.removeClass("valid").addClass("invalid");
    }
})

$('#zip').on("input",function(){
  let inputs = $(this);
  let post = inputs.val().length > 4  && inputs.val().length < 6;
    if ($.isNumeric($('#zip').val()) && (post)){inputs.removeClass("invalid").addClass("valid");
  } else {inputs.removeClass("valid").addClass("invalid");
      }
})

$('#cvv').on("input",function(){
  let inputs = $(this);
  let cvv = inputs.val().length > 2 && inputs.val().length < 4;
    if ($.isNumeric($('#cvv').val()) && (cvv)){inputs.removeClass("invalid").addClass("valid");
  } else {inputs.removeClass("valid").addClass("invalid");
      }
})
function validate(){
  $('button[type="submit"]').click(function(){
    
})
}

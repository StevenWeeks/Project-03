

$(document).ready(function () {
  $('#name').focus();
  $('#other-title').hide();
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
  let money = $("<p></p>").text("Total:$" + start).addClass('moneys')
$('.activities').append(money);
$('.moneys').hide()

  $('.activities input[type="checkbox"]').click(function(){
if ($('.activities input[type="checkbox"]').is(':checked')){
  $('.moneys').show()
} else {
  $('.moneys').hide()
}

  })
}
clickShow()

'use strict';

function fancySchmancy() {
  return $("p #bacon").addClass("iAmFancy");
}

function addText("I love Kittens") {
  return $("p:second").append();
}

function showDolphin() {
  $("img[alt='smiling dolphin 2']").show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function faceIt() {
  $('#favorite-snacks').fadeIn(2000);
}

function fadeOut() {
  $("p:second").fadeOut(0);
}

function findItByClass() {
  return $('a').hasClass('flatironLink')
}

function formValue() {
  return $("input:last").val();
}

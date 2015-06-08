'use strict'

var $ = window.jQuery
var page = window.page

page('/', home)
page('/signin', signin)
page()

function home(ctx) {
  console.log('Page navigating to: HOME')
  console.log('Context :' + JSON.stringify(ctx))
  window.location = '/';
}

function signin(ctx) {
  $(document).on('click', '.Signin-button', function (event) {
    event.preventDefault();

    var username = $('.Signin-name-input')[0].value;
    if (!username) return alert('Ingresa un nombre válido');

    page('/');
  });
}

page({hashbang: true});
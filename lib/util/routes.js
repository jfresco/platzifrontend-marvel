'use strict'

var $ = window.jQuery
var page = window.page

// ya tenemos page

page('/', restrict, home)
page('/battle', battle)
page('/avengers', avengers)
page('/signin', signin)
page('*', function(){
  $('body').text('Not found!')
})


function restrict(ctx, next) {
  console.log('RESTRICTING')
  console.log('Context :' + JSON.stringify(ctx))
  // if (! ctx.params.username) {
  //   page('/signin')
  // } else {
    next();
  // }
}

function home(ctx, next) {
  console.log('Page navigating to: HOME')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/'
}

function battle(ctx, next) {
  console.log('Page navigating to: BATTLE')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/battle'
}

function avengers(ctx, next) {
  console.log('Page navigating to: AVENGER')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/avengers'
}

function signin(ctx, next) {
  // window.location = '/signin'
}

$('.Signin-button').on('click', function (event) {
  event.preventDefault()
  var username = $('.Signin-name-input')[0].value
  console.log('USERNAME: ' + username)
  username ? page('/?username=' + username) : page('/signin?reason=no_username');
})
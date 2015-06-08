var $ = require('jquery')
var page = require('page')

page('/signin', signin)

function signin(ctx, next) {
  // window.location = '/signin'
}

$('.Signin-button').on('click', function (event) {
  event.preventDefault()
  var username = $('.Signin-name-input')[0].value
  console.log('USERNAME: ' + username)
  username ? page('/?username=' + username) : page('/signin?reason=no_username');
});

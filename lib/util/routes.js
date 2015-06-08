var page = require('page')

page('/', restrict, home)
page('*', function(){
  $('body').text('Not found!')
})


function restrict(ctx, next) {
  console.log('RESTRICTING')
  console.log('Context :' + JSON.stringify(ctx))
  // if (! ctx.params.username) {
  //   page('/signin')
  // } else {
    next()
  // }
}

function home(ctx, next) {
  console.log('Page navigating to: HOME')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/'
}

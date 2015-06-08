var page = require('page')

page('/avengers', avengers)

function avengers(ctx, next) {
  console.log('Page navigating to: AVENGER')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/avengers'
}

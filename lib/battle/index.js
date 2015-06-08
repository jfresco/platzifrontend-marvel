var $ = require('jquery')
var page = require('page')

page('/battle', battle)

function battle(ctx, next) {
  console.log('Page navigating to: BATTLE')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/battle'
}

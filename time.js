const moment = require('moment')
const now = moment()
const hour = now.format('H')

let greet

if (hour >= 5 && hour < 12) {
  greet = "Good morning"
} else if (hour >= 12 && hour < 18) {
  greet = "Good afternoon"
} else if (hour >= 18 && hour < 5) {
  greet = "Good evening";
}

module.exports = {
  greet
}

"use strict"

module.exports = {
  attributes: {
    name: {
      required: true,
      type: "string"
    },
    age: {
      required: true,
      type: "number",
      min: 0,
      max: 9000
    }
  }
}

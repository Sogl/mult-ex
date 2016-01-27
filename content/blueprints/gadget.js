"use strict"

module.exports = {
  attributes: {
    /*
     * Properties in our table/collection
     * are defined as objects in our blueprints.
     */
    type: {
      required: true,
      type: "string"
    },

    cost: {
      required: true,
      type: "string"
    },

    /*
     * But sometimes, we just want to define
     * it's type, so that's okay as well.
     */
    brand: "string",

    /*
     * This gadget is owned by someone,
     * set up a one to one relationship
     * between this gadget and a person
     */
    owner: {
      model: "gadget"
    }
  }
}

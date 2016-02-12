"use strict"

module.exports = {
  /*
   * We define our columns/keys in the `attributes`
   * property of our blueprints.
   */
  attributes: {
    /*
     * Properties in our table/collection
     * are defined as objects in our blueprints.
     */
    name: {
      required: true,
      type: "string"
    },

    /*
     * But sometimes, we just want to define
     * it's type, so that's okay as well.
     */
    age: {
       type: "integer",
       min: 0,
       max: 100
    },
    secret: "string",

    /*
     * A person can have many gadgets so
     * we set up an association to another
     * collection (blueprint) which will
     * be automatically populated for us.
     */
    gadgets: {
      collection: "gadget"
    },

    /*
     * A person also has a user.
     */
    user: {
      model: "user"
    },

    /**
     * We have a `secret` to keep, only this
     * person should ever know their secret
     * so let's make sure we don't return it
     * in any of our endpoints.
     *
     * @return {Object -> Person} Our person without the secret.
     */
    toJSON: function() {
      // Get our Person as an object.
      const person = this.toObject()

      // Get rid of their secret!
      delete person.secret

      // Return our now safe Person.
      return person
    }
  }
}

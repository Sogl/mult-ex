"use strict"

module.exports = {
  // Where is your content? blueprints, etc
  content: `${__dirname}/content`,

  // Configure a login with Twitter auth strategy.
  // This could be a config for many other services.
  auth: {
    password: "YOUR SECURE COOKIE PASSWORD HERE",
    providers: [
      {
        provider: "twitter",
        clientId: "",
        clientSecret: "",
        isSecure: false
      },
      {
        provider: "github",
        clientId: "",
        clientSecret: "",
        isSecure: false
      }
    ]
  },

  // Configure the Hapi server.
  api: {
    host: "localhost",
    port: 1811,
    routes: { cors: true },
    router: { stripTrailingSlash: true }
  },

  // Set up our desired database adapter (defaults to Mongo)
  db: {
    adapters: {
      development: require("sails-mongo"),
      production: require("sails-mongo")
    },
    connections: {
      development: {
        adapter: "development",
        host: "localhost",
        port: 27017,
        database: "multicolour"
      },

      production: {
        adapter: "production",
        host: "localhost",
        port: 27017,
        database: "multicolour"
      }
    }
  }
}

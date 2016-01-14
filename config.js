"use strict"

module.exports = {
  // Where is your content? blueprints, etc
  content: `${__dirname}/content`,

  settings: {
    // Set the timeout to 30 seconds.
    timeout: 3e4,

    results: {
      // This limits the number of results
      // per page, it also affects the number
      // of results returned by any associations
      // your blueprints have
      per_page: 20
    }
  },

  auth: {
    // CHANGE THIS
    password: "wbhurigrwbjkgbjkwrnguhguirwhgo9824yt8942hio24tjpo24thioy98GO*I^&IRD%^F*YIUOVFU",

    // Configure a Twitter auth strategy.
    providers: [
      // {
      //   provider: "twitter",
      //   clientId: "",
      //   clientSecret: "",
      //   isSecure: false
      // }
    ]
  },

  // Configure the Hapi server.
  api_connections: {
    port: 1811,
    routes: {
      cors: {
        origin: [ "http://localhost:1811" ]
      }
    },
    router: { stripTrailingSlash: true }
  },

  api_server: {
    connections: {
      routes: {
        security: true
      }
    },
    debug: { request: ["error"] }
  },

  db: {
    adapters: {
      development: require("sails-mongo")
    },
    connections: {
      development: {
        adapter: "development",
        host: "localhost",
        port: 27017,
        database: "multicolour"
      }
    }
  }
}

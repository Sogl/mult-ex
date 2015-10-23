"use strict"

// Configure our service.
const my_service = require("multicolour")
  // Configure the service core and scan for content.
  .new_from_config_file_path("./config.js")
  .scan()

  // Register the server plugin.
  .use(require("multicolour-server-hapi"))

  // Register the auth plugin to the server.
  .get("server")
    .use(require("multicolour-auth-oauth"))

  // Start the service.
  .start()

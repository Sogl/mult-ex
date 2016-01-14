"use strict"

// Configure our service.
const my_service = require("multicolour")
  // Configure the service core and scan for content.
  .new_from_config_file_path("./config.js")
  .scan()

  // Register the server plugin.
  .use(require("multicolour-server-hapi"))

  // Register the auth plugin to the server.
my_service.get("server")
  .use(require("multicolour-auth-oauth"))
  .use(require("multicolour-hapi-jsonapi"))
  .reply("csrf_enabled", false)

  // Start the service.
my_service.start()

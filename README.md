# multicolour-example
Example Multicolour App with Hapi server, Mongo and OAuth.

## What is Multicolour?

Multicolour is a library that lets you write JSON to automatically create your REST API with JSONAPI support, OAuth support while letting you choose your database technology and even using multiple database technologies across blueprints.

### Getting started

1. Make sure you have an instance of Mongo running that you can connect to.  
2. Update the database configuration to your Mongo connection settings in `config.js`.  
3. Run `npm i` to get the dependencies for the app.  
4. To use the auth plugin you'll need a registered app on one of the below services and to add your configuration to `config.js`.

```text
Twitter  
Facebook  
GitHub  
Google  
Instagram  
LinkedIn  
Yahoo  
Foursquare  
VK  
ArcGIS Online  
Windows Live  
Nest
Phabricator  
BitBucket  
Reddit  
Tumblr
```

Running `npm start` will stand your server up and you can view the Swagger docs by visiting [http://localhost:1811/docs](http://localhost:1811/docs).

Edit and create blueprints in the `content/blueprints` to add/edit/remove endpoints from your API.  

To learn more about the structure of these schemas, see the [blueprint documentation](https://github.com/Multicolour/multicolour/wiki/Blueprints)

Read more on the [Multicolour wiki](https://github.com/Multicolour/multicolour/wiki)

MIT New World Code 2016

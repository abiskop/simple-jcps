#simple-jcps*

###*JSON Configurable Personal Site

This is a stripped-down version of the [JSON Configurable Personal Site](https://github.com/christophior/JSONConfigurablePersonalSite) project built by [Herald Christophior Villarreal](https://github.com/christophior), who really deserves the credit for this.

I use it to maintain a personal web site for [myself](http://www.a2x.me).

**Motivation**: I loved the idea as well as the theme of the original project - however I wanted something simpler that does not require running *node* on the server.
Instead, I wanted to have a simple HTML file that I can simply slap onto Amazon S3 or the like.

Basically, I took the original code, then

- ripped out everything that was not strictly needed until only the CSS and the templates were left,
- replaced the [LinkedIn maintained fork of the *dust* rendering engine](https://github.com/linkedin/dustjs) with [handlebars](http://handlebarsjs.com) because I could not get *dust* to work properly and it seems poorly maintained
- and finally added a hacky *node* script that generates an *index.html* and *style.css* from the templates and the given JSON config.


##Usage

Clone repo & install dependencies:

```
git clone https://github.com/abiskop/simple-jcps.git
cd simple-jcps
npm install
```

Run via:

```
npm start
```

This will generate `index.html` as well as `css/style.css` using the information provided via the JSON file `info.json`.

Please refer to [the original project](https://github.com/christophior/JSONConfigurablePersonalSite#requiredinfojson) for information on how the site may be configured via the JSON file.

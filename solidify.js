/*jslint node: true */
'use strict';

var context = require('./info');
var fs = require('fs');
var hb = require('handlebars');

fs.readFile(__dirname + '/index.html.handlebars.template', { encoding: 'utf8' }, function(err, data) {
    if (err) throw err;
    var renderedIndex = renderTemplateWithContext(data, context);
    fs.writeFile(__dirname + '/index.html', renderedIndex, { encoding: 'utf8' }, function(err) {
        if (err) throw err;
        fs.readFile(__dirname + '/style.css.handlebars.template', { encoding: 'utf8' }, function(err, data) {
            if (err) throw err;
            var renderedCss = renderTemplateWithContext(data, context);
            fs.writeFile(__dirname + '/css/style.css', renderedCss, { encoding: 'utf8' }, function(err) {
                if (err) throw err;
                console.log('done.')
            })
        })
    });
});

function renderTemplateWithContext(rawTemplate, context) {
    var template = hb.compile(rawTemplate);
    var rendered = template(context);
    return rendered;
}

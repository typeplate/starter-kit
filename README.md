# Typeplate [Bower](http://twitter.github.com/bower) Package
<a href="//typeplate.com"><img src="http://typeplate.com/img/logo.png" alt="typeplate logo" width="216" height="216"></a>
## What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## Broweser Tested, Developer Approved
<img src="https://raw.github.com/paulirish/browser-logos/master/all-desktop.png" alt="" width="375">

## File Size
Not much goin&rsquo; on here in terms of bulk. As you can see, Typeplate is just a measely 3kb when compressed. That's really, really small.

**Sass, LESS & Stylus**

- Raw = **17kb**
- Compressed = **3kb**

**CSS**

- Raw = **7kb**

## Installation
Based on use cases, we recommend using typeplate just after your reset stylesheet (i.e. [normalize](http://necolas.github.com/normalize.css)) and your compass ``@import`` in order to operate as we've intended, but as you'll see from our <a href="//typeplate.com/demo">demo</a> it isn't necessary.

###&sect; Installation via Bower

Yup that&rsquo;s right! We&rsquo;re in the bower package registry. Simply run ``bower install typeplate`` and watch the magic happen. This is an example of how to include either version in your project. We should also mention that Compass is totally optional.

**Sass**

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[root_project_path]/components/typeplate/scss/typeplate";

**LESS**

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[root_project_path]/components/typeplate/less/typeplate.less";

**Stylus**

	@import "[your_project_path]/reset";
	@import "[root_project_path]/components/typeplate/stylus/typeplate.styl";

**CSS**

You could also use the CSS version instead (btw&hellip;we don&rsquo;t condone this method depicted below. In reality you should copy the contents of the CSS file and paste the contents in the top of your projects stylesheet):

	<head>
		<link rel="stylesheet" href="[root_project_path]/components/normalize-css/normalize.css">
		<link rel="stylesheet" href="[root_project_path]/components/css/typeplate.css">
	</head>

## Bower Installation

&sect; **Package Management** : [Bower](http://twitter.github.com/bower)

In order to install bower you must first have [Node](http://nodejs.org) and [npm](https://npmjs.org) installed on your machine. Once [Node](http://nodejs.org) and [npm](https://npmjs.org) are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

	npm install bower -g

##What Else Is There?

With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography

######©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).

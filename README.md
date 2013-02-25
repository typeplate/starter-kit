# Typeplate [Bower](http://twitter.github.com/bower) Package
<a href="//typeplate.com"><img src="http://typeplate.com/img/logo.png" alt="typeplate logo" width="216" height="216"></a>
## What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## Broweser Tested, Developer Approved
We've even made sure to support IE7-8 while still supporting all current and major standards supporting browser makers.

<img src="https://raw.github.com/paulirish/browser-logos/master/all-desktop.png" alt="" width="375">

## File Size
Not much goin on here in terms of bulk. As you can see, Typeplate is just a measely 2.806 kb when compressed. That's really, really small.

- Raw ``.scss`` = **16.96kb**
- Compressed ``.css`` = **3kb**

## Customizing
This will be the explanation on how to customize typeplate and what the vars can do.

## Installation
Based on use cases for most developers' workflow, we recommend using typeplate just after your reset stylesheet (i.e. [normalize](http://necolas.github.com/normalize.css)) and your compass ``@import`` in order to operate as we've intended, but as you'll see from our <a href="//typeplate.com/demo">demo</a> it isn't necessary.

Example using ``.scss`` syntax:

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[your_project_path]/typeplate";

    // Custom Author Styles
	// ====================================

###&sect; Installation via ``.scss @import``

Simply download our ``typeplate.scss`` file and import from your project's ``.scss`` file like so:

	@import "[your_project_path]/typeplate";

###&sect; Installation via ``.css``

If the Sass version isn't your cup of tea, we've provided a CSS version. Simply place the contents of ``typeplate.css`` inside your project's stylesheet in the order specified from the example above.

###&sect; Installation via Bower

Yup that&rsquo;s right! We&rsquo;re in the bower package registry. Simply run ``bower install typeplate-scss`` for the Sass version or ``bower install typeplate-css`` for the CSS version and watch the magic happen. This is an example of how to include either version in your project:

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[root_project_path]/components/typeplate-scss/typeplate";

You could also use the CSS version instead (btw&hellip;we don&rsquo;t condone this method depicted below. In reality you should copy the contents of the CSS file and paste the contents in the top of your projects stylesheet):

	<head>
		<link rel="stylesheet" href="[root_project_path]/components/normalize-css/normalize.css">
		<link rel="stylesheet" href="[root_project_path]/components/typeplate-css/typeplate.css">
	</head>

## Bower Installation

&sect; **Package Management** : [Bower](http://twitter.github.com/bower)

To keep track of our packages and allow for easy updating we use [Bower](http://twitter.github.com/bower) Package Manager which installs all components in the "components" directory of this project. In order to install bower you must first have Node and npm installed on your machine. Once Node and npm are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

	npm install bower -g

##What Else Is There?

With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography

######©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).

<a href="//typeplate.com"><img src="http://typeplate.com/img/logo.png" alt="typeplate logo" width="216" height="216"></a>

## &sect; What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## &sect; Browser Tested, Developer Approved
<img src="https://raw.github.com/paulirish/browser-logos/master/main-desktop.png" alt="" width="375">

## &sect; File Size
Not much goin&rsquo; on here in terms of bulk. As you can see, Typeplate is just a measely 3kb when compressed. That's really, really small.

- Raw Sass = **18kb**
- Compressed Sass = **3 KB**
- Raw CSS = **10 KB**

## Installation

- Rule #1 in Typeplate Club… Always use ``<meta charset="utf-8">`` in your document ``<head>``. Doing so alleviates authors need to use a charset from within a stylesheet. Anything imported into a document using ``<meta charset="utf-8">`` is encoded as ``utf-8`` globally.

- Based on use cases for most developers' workflow, we recommend using Typeplate just after your reset stylesheet (i.e. [normalize](http://necolas.github.com/normalize.css)) and your compass ``@import`` in order to operate as we've intended, but as you'll see from our <a href="http://typeplate.com/demo">demo</a> it isn't necessary.

### &sect; Installation via ``.scss @import``

1. Download and unzip the [Sass ``.zip`` pkg](http://github.com/typeplate/starter-kit/blob/development/typeplate-sk.zip?raw=true).
2. Place the new directory from the ``.zip`` into your project's Sass directory
3. Import from your project's primary ``.scss`` file like so:

```scss
// Imports
// ====================================

@import "compass"; // Not required. For example purposes only.
@import "[your_project_path]/reset"; // Not required. For example purposes only.
@import "[your_project_path]/typeplate-sk/typeplate";


// Custom Author Styles
// ====================================
```

Authors can also venture one step further and include a custom variables file in order to override the defaults we've provided.

```scss
@import "[your_project_path]/typeplate-custom-vars"; // Must come first
@import "[your_project_path]/typeplate-vars"; // Must follow typeplate-custom-vars
```

### &sect; Installation via ``.css``

If the Sass version isn't your cup of tea, we've provided a CSS version. Simply place the contents of ``typeplate-sk.css`` inside your project's stylesheet (reset, typeplate, author styles).

###### Option #1 This method is not the best as it results in more HTTP requests.
```html
<head>
    <link rel="stylesheet" href="[project_path]/css/normalize.css"><!-- Reset of your choice (optional). We like normalize even though it's not a reset -->
    <link rel="stylesheet" href="[project_path]/css/typeplate-sk.css"><!-- typeplate styles -->
    <link rel="stylesheet" href="[project_path]/css/main.css"><!-- main stylesheet -->
</head>
```

###### Option #2 This method is the best as it results in less HTTP requests.

```html
<head>
    <link rel="stylesheet" href="[project_path]/css/main.css"><!-- main stylesheet with typeplate-sk.css inside -->
</head>
```

## Contributing

In order to contribute you need the confidence to work with Gulp, the CLI and Ruby Gems. Our main work is done on the [development branch](https://github.com/typeplate/starter-kit/tree/development) and distributed on master. Gulp tasks are as follows:

```bash
# Install Gulp dependencies
$ npm install

# Install Gems
$ bundle install

# Watch and compile Sass
$ gulp

# Prepare output for dist directory
$ gulp prep

# Place output for dist directory
$ gulp build

# Final prep for deployment
$ gulp ship
```

## &sect; What Else Is There?
With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography
3. [MOLTEN LEADING](https://github.com/Wilto/Molten-Leading) - Slingin &rsquo; Hot Leading
4. [Team Sass Modular Scale](https://github.com/Team-Sass/modular-scale) - Sassy Modular Scale

###### ©credits
Typeplate Starter Kit &copy;2014 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
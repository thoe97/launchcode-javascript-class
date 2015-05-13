# Get It Done! (jQuery Edition)

##Introduction
We're going to exercise our new jQuery skills to build the front end of a task list app using jQuery and Bootstrap. Let's call it Get It Done!&trade;

If you'd like a warm-up, check out the [jQuery Tutorial at w3schools](http://www.w3schools.com/jquery/). You can also find jQuery lessons on Treehouse (login info is on the ReBootU blackboard site).

## Getting ready
In the `getitdone-jquery` directory set up your project files. You'll need an `index.html` file along with `css`, `js` and `lib` directories. Download [jQuery](http://jquery.com/download/) and [Boostrap](http://getbootstrap.com) and place the files within your `lib` directory.

Stub out your `index.html` file, including the jQuery JS file, Bootstrap CSS and Bootstrap JS. You should have something similar to the following in your `<head>`:
```html
<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="lib/bootstrap/css/bootstrap-theme.min.css">
<script type="text/javascript" src="lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="lib/bootstrap/js/bootstrap.min.js"></script>
```

You'll want to create your own JS file too. Call it whatever you like (e.g. `getitdone.js`) and put it in the `js` directory. Ditto for CSS, if you want to add to Bootstrap's styles.

## What to do

Use Bootsrap and jQuery to build a to-do list app. How you design and implement your app is up to you, but you should include the following features:
* A text input for users to enter items (a placeholder attribute may be helpful).
* Wrap your input in a `<form>` element and attach a submit event handler. Your handler should cancel form submission (since we don't want to go back to the server), and do something with the value of your input element.
* You should have a list of to-dos that items are added to.
* Each item in the list should be able to be "completed" by checking it off in some way. How this works in the interafce is up to you. Additionally, whether you keep those to-dos around in a "completed" status is up to you as well.
* Users should be able to delete to-dos from their list without completing them.
* Use [Bootstrap CSS](http://getbootstrap.com/css/) and [Bootstrap components](http://getbootstrap.com/components/) to make your elements look attractive and consistent (e.g. you may find Forms, Input groups, Buttons, or Glyphicons useful).
* Make sure your content is in a [Bootstrap container](http://getbootstrap.com/css/#grid) and uses the grid system, if you have multiple rows or columns.
* You should implement one additional feature.

When you're done, commit and push your code, and let me know via email.

##Resources

### To-do list apps (for inspiration)
Some of these are web-based, and some are apps (and some are both). Some are subscription-based, but there are often free trials on those.
* [Teux Deux](https://teuxdeux.com)
* [Remember the Milk](https://www.rememberthemilk.com)
* [Clear](http://realmacsoftware.com/clear/)
* [Wunderlist](https://www.wunderlist.com)
* [Todoist](https://en.todoist.com/seeYou)

###Bootstrap
* [Official site](http://getbootstrap.com)
* [w3schools Bootstrap tutorial](http://www.w3schools.com/bootstrap/)


###jQuery
* [Official site](https://jquery.com)
* [w3schools jQuery documentation](http://www.w3schools.com/jquery/)
* [jQuery learning center](http://learn.jquery.com)

# FORM VALIDATION

For this sprint, you are being asked to create a **form** using the DOM which will validate a range of different user input scenarios.

### Objectives:

- understand concept of form validationinformation is sent to the server
- use CSS and html attributes to help with validation and navigation
- design an engaging and navigable UX with clear feedback

## Task:

You need to write a typical **account creation form** for a fictional website. If all details are valid, 'submit' should take the user to a new page.

- You should use `css` to provide extra styling - try setting `id`s and using [DOM classlist methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- You should use `DOM` methods if you want to hide things or create new elements.
- You should make use of a variety of [**html DOM events**](https://www.w3schools.com/jsref/dom_obj_event.asp) to trigger feedback at the appropriate time. Some useful ones will be `change` and `keyup` events.
- You should attempt use of `event.target` - another way of accessing the item that has triggered the event(https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

## Sign-Up Validation

Focus on the validation before looking at the form 'submit' functionality.

### For all boxes, bare in mind the following:

- As a user I want to be told why my username is invalid
- As a colour blind user I want feedback to not only be based on colour
- As a non-native speaker, seeing red / green would be an easier way for me to understand feedback than just text.

| Field         | Restrictions                                                         | When user should find out                                                     |
| ------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Username      | must be a mix of letters, numbers and at least one special character | when they've _finished_ typing but before they click submit                   |
| Firstname     | only allow letters, spaces, hyphens and apostrophes                  | as they're typing (look at what DOM events that will be useful here )         |
| Lastname      | only allow letters, spaces, hyphens and apostrophes                  | as they're typing (look at what DOM events that will be useful here )         |
| Date of Birth | needs to be a valid date and at least 18 years old                   | before they click submit (i.e as soon as they choose a date or finish typing) |

## Submit button

Users shouldn't be able to 'submit' without all fields filled in and should tell user which fields they've missed.

If they've completed all the boxes and they're all valid, then pressing the submit button should direct them to a different page (a new html file).

## Bonus Page

Before you add much to this bonus page, go back and make sure that _all_ of the above is completed and add some styling to your sign-in (think alignment and being responsive to mobile - look at resources below)

There is lots of flexibility of what this page could do! Make sure whatever you choose uses event listeners to make you more comfortable with DOM manipulation. There are some examples below but by all means use your own ideas:

- Rabbit farm: an image of a rabbit which duplicates for every click
- Shopping trolley: one side of the screen is the shop with images of items, the other side is your trolley. For each click of an item, put that image into the trolley
- Whack-a-mole: multiple black boxes and one mole which 'moves' to (or replaces) a different box when you click it.

### Helpful links:

Form validation is more than coding - it is a service you provide to users, and as such, there are practices and expectations in terms of accessibility, usability and functionality. Best practice rules are ignored at your peril! Here are some interesting articles that document the sort of approaches you should adopt when designing your form, from [smashingmagazine](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) and [designmodo](https://designmodo.com/ux-form-validation/).

There are a lot of [html input attribute types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that your browser can use to modify behaviour on your form, some of which you may never use again, but could be experimented with now.

[CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) interpret other element attributes. Don't forget that CSS can be used more broadly to signal things too; people make inferences from colour, font size and font style, for example.

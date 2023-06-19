# FORM VALIDATION

Instructions for this sprint can be found here:

https://l2c.northcoders.com/courses/fe/form-validation



## Form choices:

Below are some examples of forms that your users could use to submit information. Choose one of the following options or come up with your own theme if you're feeling creative. Just remember, the point of this is to validate the users inputs and provide appropriate feedback so make sure that you can apply some kind of restriction to the user input.

### Account creation

Design a typical **account creation form** for a fictional website. If all details are valid, `submit` should take the user to a new page showing them the details of their newly created account.

Fields to collect from your user:

| Field            | Restrictions                                                                |
| ---------------- | --------------------------------------------------------------------------- |
| First Name       | Required                                                                    |
| Last Name        | Required                                                                    |
| Username         | Must be a mix of letters and numbers, no other characters or spaces allowed |
| Avatar Image url | Valid Url                                                                   |

#### Submit Page

Once the user has signed up to your website they should be taken to a profile page where they can view all of the information they've just submitted. Think about the layout of profile pages you may have used in the past and create a user friendly site displaying their information.

_Additional_

- Allow your users to choose between _light_ and _dark_ mode for their profile. Style their profile page according to their preference.

### Horoscope Generator

Create a form to collect some personal information from the user in order to generate their horoscope. The horoscopes should change based on the information the user has provided but can be generated in any way you see fit.

Fields to collect from your user:

| Field      | Restrictions                                      |
| ---------- | ------------------------------------------------- |
| First Name | Required                                          |
| Last Name  | Required                                          |
| Star Sign  | Must be a valid star sign (Aries, Taurus, etc...) |

#### Submit Page

Use the users details to display their horoscope. The one they recieve should be based on the star sign they've submitted.

_Additional_

- Collect the users Date of Birth. Generate a different horoscope based upon whether the user is over or under 30 years old.

### Business Card Generator

Create a form to collect some personal information from the user in order to generate a professional looking business card. The presentation of the card will be very important.

Fields to collect from your user:

| Field        | Restrictions                  |
| ------------ | ----------------------------- |
| First Name   | Required                      |
| Last Name    | Required                      |
| Company      | Required                      |
| Job Title    | Required                      |
| Email        | Must be a valid email address |
| Phone Number | Must be a valid phone number  |

#### Submit Page

Use the users submitted details to produce a professional looking business card.

_Additional_

- Give the users a choice of templates to alter the style of card produced.

### Meme Generator

Create a form that allows users to create their own memes. The form should allow the user to choose an image to caption as well as the accompanying text.

Fields to collect from your user:

| Field        | Restrictions      |
| ------------ | ----------------- |
| Top Text     | Max 50 characters |
| Bottom Text  | Max 50 characters |
| Image Choice | Required          |

#### Submit Page

The users text superimposed onto their chosen image.

_Additional_

- Allow the users to choose images that require different amounts of text. e.g. 1 or more text inputs.

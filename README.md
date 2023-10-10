An ensemble of exercices on JS DOM, separated in 3 ways. 

Here are the instructions;

1. Introduction: 
	
    > Edit the script.js to
    > - Display the document title in the console
    > - Change the document title to `Modifying the DOM`
    > - Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the `rgb()` notation and 3 random-generated numbers between 0 and 255).
    > - Using the children method and a `for ... of loop`, display every children elements of the second child element of your document (display all children elements of the `<body>`

2. Selectors:

    > Without modifying the index.html file open the script.js to do the following tasks:
    > - Add a `title` attribute to every element that has the important class, stating `This is an important item`. Tip: adding a title attribute to an element is different from changing the title of a document.
    > - Select all the img tags and loop through them. If they have no `important` class, turn their display property to `none`
    > - Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
    > - Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

3. Create: 

	
    > - Modify the script.js to create a new `<section>` with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the `<article>`
    > - If the background is dark the text should be white, if the background is light the text should be black
    > - Find a way so that everytime you load the page the order of the elements changes!

4. TheCollection:

   Solo Project! Come check [this](https://github.com/RosaBld/TheCollection) and admire [here](https://magical-sopapillas-4b0f55.netlify.app/)! 

5. Navigate: 

    > Modify the script.js, do not create any new nodes!
    >
    > - Select the last child of the `<ol>` tag and put it at the beginning of the list
    > - Move the `<h2>` of the third section in the second one and vice-versa
    > - Delete the last section from the DOM, we don't need it anyways


6. Events:

   > Add an event listener on the document `<body>`, listening for the keypress event. (hint: have a look at this)
   > - When the `spacebar` is hit randomly change the background color of the whole page
   > - Log when the `spacebar` is used the same way you used for the generated squares.
   > - When the l key is pressed the log gets deleted (erases the generated `<li>`s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
   > - When the s key is pressed the squares get deleted (erases the generated squares)
   > Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square

7. Dark-Kitchen:

   Group project. You can come [here](https://github.com/LidwinePrior/Dark-kitchen) or even [here](https://tiny-panda-e8e1ab.netlify.app/)!

8. Forms:

   > As always you should NOT edit the index.html, modify the script.js file :
   >
   > - Add a `keyup` listener on the first input field, so that once you type a letter in this field, it goes into the `<span id="display-firstname">`. The content of the field and the span should always remain the same.
   > - Add a `keyup` listener on the second input (the number input), so that if the age is below 18 the content of the section `a-hard-truth` remains hidden, otherwise show them this hard to swallow fact.
   > - Well this is a common one. Add a `keyup` listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
   > - Finally, use a `change` listener on the `<select>` field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

9. Time Out and Intervals:

   > - Write a function that mimics the behaviour of a typewriter.
   > - Using `setInterval` display the word `Keller` one character at a time (one letter per second). Once the word is written on the screen clear the interval.
   > - Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
 
9b. Whack-A-Mole

   > The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. The game doesn't have to picture moles, or animal cruelty you can simply display circle `<div>`s to begin with. Everytime you click on a mole, your score increases.
   > 
   > If you'd like to spice things up, you can create an increasing difficulty by reducing the timeframe in which the mole appears.

10. The Dates:
 
   > - Find the timezones of :
   > * Anchorage (USA)
   > * Reykjavik (Iceland)
   > * Saint-Petersburg (Russia)
   > - And display the date and time of these cities along with the time and date of Brussels.
   >
   > - Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
   > - Write a function to find how many days have passed since any point in time (after 1970).
   >
   > - Using timestamps, find the exact time and date we will be in 80000 hours.
   > - Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for `keyup` events, dynamically display the date in the number of hours given by the input.

11. Project-Planner:

For this exercice, it's all about a group project. You can come see it on the repo of my fellow [coworker](https://github.com/Pierremarien/project-planner)

As you'll see, it's a simple but fonctional project planner. You can read all about it in the Readme.

You can also check on the deployment page [here](https://pierremarien.github.io/project-planner/).

12. Asynchrone:

Ex 1:
 
   > Create a new directory , containing 3 files:
   >
   > - index.html
   > - script.js
   > - a json file containing an array with a few strings ( learn what's a json file )
   >
   > Create a `<button>`, when clicked the json's contentn is loaded with a `fetch('your-json-file.json')`, then dynamically generate a `<ul>` list containing each rule in a `<li>`.

Ex 2:

   > Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

Random-Quote:

Solo Project !

   > Publish a web page that shows a random quote from an available Web Service, from the Quotes serving website: https://thatsthespir.it
   > 
   > The web service sits at this URL: https://thatsthespir.it/api. It is called the endpoint".
   > 
   > Steps:
   >
   > - Send a request to a remote server via javascript using async/await and try/catch.
   > - Treat the answer :
>    - If the request failed, show an error message to the user.
>     - If the request succeed, transform a JSON response into Html, injected in the DOM.
   > - Make a button to generate another random quote.
   > - WMake it look good via CSS (inspiration).
   > - Publish it as a GitHub Page
   > - When it works, share the link on your startup's discord channel.

You can check it out [here](https://rosabld.github.io/random-quote-using-async-await/) ! 

---

Enjoy checking what I've done so far! o/

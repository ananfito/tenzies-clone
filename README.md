# Tenzies Clone

A clone of the popular dice game, Tenzies.

## Table of Contents 

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overivew

This project was introduced in Module 11 "React Basics" of the Scrimba Frontend Career Path. It is a clone of the popular dice game, [Tenzies](https://ilovetenzi.com/), and is played the same way. 

The goal of the game is to roll the 10 dice until they are the same. During gameplay, players can set aside the number they are trying to reach -- this means these dice will not be rolled during the next roll. Players continue rolling until they achieve all with the same number.

### Screenshot

#### Desktop

![Game title and instructions at the top. In the middle, ten dice laid out in two rows of five. Underneath the dice, the game stats: number of rolls, game time, and best time.](./screenshot_tenzies_desktop.png)

![Game title and instructions at the top. In the middle, ten dice laid out in two rows of five with two dice selected, or held, and highlighted in green. Underneath the dice, the game stats: number of rolls, game time, and best time.](./screenshot_tenzies_desktop-dice-selected.png)

#### Mobile

![Game title and instructions at the top. In the middle, ten dice laid out in two rows of five. Underneath the dice, the game stats: number of rolls, game time, and best time.](./screenshot_tenzies_mobile.png)

![Game title and instructions at the top. In the middle, ten dice laid out in two rows of five with two dice selected, or held, and highlighted in green. Underneath the dice, the game stats: number of rolls, game time, and best time.](./screenshot_tenzies_mobile-dice-selected.png)

### Links

A live version can be viewed at: https://tenzies-clone.netlify.app. 

## My Process

The bulk of this project was completed during follow-along tutorials, however the following features were completed independently: 

- Abilty to track time
- Store best time in local storage
- Track the number of rolls
- Use CSS to add dice dots

### Built with

- HTML
- CSS
- JavaScript
- React JS

### What I learned 

This project packed a lot into! It was great opportunity to review key practices with React, such as `useState` and `useEffect`, but I think my biggest takeaway from this project was learning how to use the CSS to create the dice dots. 

As I learned from [this DEV.to blog post by Edwin](https://dev.to/ekeijl/creating-dice-using-css-grid-j4), the trick here is to use CSS grid with `grid-template-areas` and the `nth-child()` pseudo-selector to specify where the dots (or pips) will appear. 

Here's an excerpt of the CSS: 

```css
.pip {
  display: block;
  align-self: center;
  justify-self: center;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0;
  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}

.pip:nth-child(2) {
  grid-area: b;
}

.pip:nth-child(3) {
  grid-area: c;
}

.pip:nth-child(4) {
  grid-area: d;
}

.pip:nth-child(5) {
  grid-area: e;
}

.pip:nth-child(6) {
  grid-area: f;
}

.pip:nth-child(odd):last-child {
grid-area: g;
}
```

I found this solution to be particularly clever and helpful in completing the independent portions of the project. For a full explantion, I strongly encourage you to read Edwin's post. 

### Useful Resources

- [w3collective: Create a custom React stopwatch timer component](https://w3collective.com/react-stopwatch/) - This tutorial was helpful in setting up the time keeping portion of the project. 
- [Creating Dice Using CSS Grid by Edwin](https://dev.to/ekeijl/creating-dice-using-css-grid-j4) - This DEV.to post was immensely helpful in setting up the CSS for the dice dots. 

## Author

Thank you for reading about this project. If you'd like to connect with me for mentoring, collaboration, or employment opportunities, you can do so via the following links:

- <a href="mailto:msg.for.anthony.p6ht3@simplelogin.com?subject=Nice GitHub Project&body=Hey Anthony, I saw your GitHub project. Let's talk!">Email</a>
- [LinkedIn](https://linkedin.com/in/anthonynanfito)
- [Portfolio](https://ananfito.github.io)
- [Blog](https://ananfito.hashnode.dev)

## Acknowledgements

[Helen Chong's example of the game](https://github.com/helenclx/Tenzies-Game) was **very** useful to me in finding the tutorial for the dice dots *and* for giving me the inspiration to use a `switch` statement within in the dice component. 

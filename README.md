# 'Etch-a-Sketch' Project

![Status](https://img.shields.io/badge/status-completed-brightgreen)

This repository contains the solution for "Etch-a-Sketch" project from The Odin Project.


## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Screenshots](#screenshots)
- [Technical Details](#technical-details)
  - [Built with](#built-with)
  - [Key Feature](#key-feature)
  - [How to Play](#how-to-play)
- [Credits](#credits)


## Overview

Etch-a-Sketch project is a browser version of game between a sketchpad and an Etch-A-Sketch.
This project was assigned by The Odin Project Curriculum (Foundations Course), for practising DOM Manipulation skills. 

📌 *Note: The application is not responsive and is optimized only for desktop use.*

## Links 

* Solution URL: [GitHub Repo](https://github.com/dinruz/etch-a-sketch)

* Live Site URL: [Etch-a-Sketch](https://dinruz.github.io/etch-a-sketch/)

## Screenshots

<table>
  <tr>
    <th colspan="2" style="text-align: center;">
      <h3>Start of the Game</h3>
    </th>
    <th style="text-align: center;">
      <h3>Drawing</h3>
    </th>
  </tr>

  <tr>
    <td style="text-align: center;">
      <h4>16x16 (Default)</h4>
      <img src="assets/screenshot/screenshot1.jpg" alt="Start-16x16" width="200">
      <p>Start of the game with the default grid size of 16x16.</p>
    </td>
    <td style="text-align: center;">
      <h4>80x80 (Custom)</h4>
      <img src="assets/screenshot/screenshot2.jpg" alt="Start - 80x80" width="200">
      <p>Start of the game with manually set grid size of 80x80 (canvas size same as the default).</p>
    </td>
    <td style="text-align: center;">
      <h4>Drawing (16x16)</h4>
      <img src="assets/screenshot/screenshot3.jpg" alt="Drawing" width="200">
      <p>Display of the drawing on canvas (grid size: 16x16) with random colors & opacity effect.</p>
    </td>
  </tr>
</table>
    

## Technical Details 

### Built with 

* **HTML5** (Semantic structure)
* **CSS3** (Flexbox for dynamic grid creation)
* **Vanilla JavaScript** (DOM manipulation and event listeners)
*  Visual Studio Code

### Key Feature 

The application implements a unique drawing feature:

* **Random Color Generation:** On each cell hover, a random RGB color is generated.
* **Opacity Effect:** The generated color is applied with a fixed opacity of 40%.


### How to Play

* **Drawing** (The Sketch)

    Simply move your cursor over the canvas. 
    Each square your cursor passes over will change color, leaving a permanent mark on the canvas.

 * **Clearing the Canvas** 

    Click the "Clear Canvas 🗑️" button. 
    All squares are reset to their original background color -  giving you a fresh canvas.

 * **Change Grid Size** 

    Click the "Set Grid Size ⊞ " button. 
    Enter a new numerical value (e.g., 50) when prompted to define the dimensions (50x50). The maximum is 100 (100x100).
    The previous grid is removed, and a new grid is rendered with the specified size.


##  Credits

🔗 Author: [**dinruz**](https://www.github.com/dinruz) 

🔗 Instructions: [**The Odin Project**](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) 


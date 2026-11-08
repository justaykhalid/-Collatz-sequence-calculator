# Collatz Conjecture Calculator
 
A small web app that takes a positive integer and shows its full Collatz sequence, along with some statistics about it. Built with plain HTML, CSS and JavaScript.
 
## Live Demo
Try it in your browser: **[justaykhalid.github.io/-Collatz-sequence-calculator](https://justaykhalid.github.io/-Collatz-sequence-calculator/)**

## What is the Collatz conjecture?
 
Start with any positive integer `n` and repeat:
 
- If `n` is **even**, divide it by 2.
- If `n` is **odd**, multiply it by 3 and add 1.
The conjecture says that no matter which number you start with, you will always end up at `1`. Nobody has proven this yet.
 
Example, starting from `6`:
 
```
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
```
 
## Features
 
- Generates the full sequence for any valid positive integer
- Shows sequence statistics:
  - Starting number
  - Total steps to reach 1
  - Average number in the sequence
  - Highest number reached
- Input validation (rejects zero, negatives and decimals)
- Responsive layout that works on phones, tablets and desktops
- Scrollable output box so very long sequences don't stretch the page
- Close button to dismiss the results
## Tech Stack
 
- HTML5
- CSS3 (flexbox, media queries)
- Vanilla JavaScript
- [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/) (used for the navbar)
## Project Structure
 
```
.
├── index.html   # page structure
├── style.css    # styling and responsive rules
├── index.js     # Collatz logic and DOM updates
└── README.md
```
 
## Getting Started
 
No build step or install is needed.
 
1. Download or clone the project.
2. Open `index.html` in your browser.
3. Type a positive integer and press **Submit**.
## How It Works
 
1. `submitBtn.onclick` reads the input and clears any previous results.
2. `validate()` checks that the number is a positive integer.
3. `calcLoop()` keeps calling `mainCalc()` until the value reaches `1`, storing every step in an array.
4. The array is printed in the output box, and the statistics are computed from it:
   - **Total steps** = array length - 1
   - **Highest number** = `Math.max(...array)`
   - **Average** = sum of the array / array length
Example for `6`: the sequence is `6, 3, 10, 5, 16, 8, 4, 2, 1`, so there are 8 steps, the highest number is 16, and the average is 6.11.
 
## Known Limitations
 
- **Large numbers lose accuracy.** JavaScript's normal numbers are only exact up to `9,007,199,254,740,991`. Above that, the results can be wrong.
- **Trailing comma.** The output ends with a comma after the final `1`.
- **No input cap.** Extremely large inputs can make the page slow or freeze it.
## Future Improvements
 
- [ ] Support very large numbers using `BigInt`
- [ ] Remove the trailing comma from the output
- [ ] Add a chart that visualizes the sequence
- [ ] Add a copy-to-clipboard button for the sequence
## Author
 
**AYKHALID**
GitHub: [justaykhalid](https://github.com/justaykhalid)
 

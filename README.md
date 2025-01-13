# Slot Machine Game

## Overview
This is a simple Slot Machine game built with JavaScript. The game simulates a slot machine where players can bet on lines, spin the machine, and win or lose money based on the outcome. It provides an engaging way to practice JavaScript concepts such as arrays, objects, loops, functions, and user input handling.

---

## Features
- Deposit money to play.
- Choose the number of lines to bet on (1-3).
- Place bets per line.
- Spin the slot machine to generate random results.
- Determine winnings based on matching symbols.
- Play multiple rounds until the player runs out of money.

---

## Game Rules
1. **Symbols and Their Values:**
   - `A`: 5x the bet per line.
   - `B`: 4x the bet per line.
   - `C`: 3x the bet per line.
   - `D`: 2x the bet per line.
2. The slot machine has 3 rows and 3 columns.
3. To win, all symbols in a row must match.
4. Winnings are calculated based on the symbol value and the bet amount.

---

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your computer.

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd slot-machine-game
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```

---

## Usage
1. Run the game:
   ```bash
   node index.js
   ```
2. Follow the prompts to:
   - Deposit money.
   - Choose the number of lines to bet on.
   - Place your bet per line.
   - Spin the slot machine.
3. View the results of each spin and your updated balance.
4. Decide whether to play again or quit.

---

## File Structure
```plaintext
|-- index.js      # Main game logic
|-- README.md     # Project documentation
```

---

## Example Gameplay
```plaintext
Enter a deposit amount: 50
Enter the number of lines to bet on (1-3): 2
Enter the bet per line: 10

Spinning...
C | B | A
A | A | A
D | C | B

You won, $50
You have a balance of $80
Do you want to play again (y/n)? n
```

---

## Technologies Used
- JavaScript (Node.js)

---

## Future Enhancements
- Add a graphical user interface (GUI) for a better user experience.
- Increase the number of rows and columns for more complex gameplay.
- Add more symbols and adjust their probabilities.
- Save game progress.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements
- Thanks to [prompt-sync](https://www.npmjs.com/package/prompt-sync) for enabling user input in Node.js.


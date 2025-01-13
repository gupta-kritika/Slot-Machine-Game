const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = { A: 2, B: 4, C: 6, D: 8 };
const SYMBOL_VALUES = { A: 5, B: 4, C: 3, D: 2 };

let balance = 0;

// Deposit money
document.getElementById("deposit-btn").addEventListener("click", () => {
  const depositAmount = parseFloat(document.getElementById("deposit-input").value);
  if (!isNaN(depositAmount) && depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
    enableSpin();
    document.getElementById("message").innerText = "";
  } else {
    alert("Enter a valid deposit amount.");
  }
});

// Enable spin button if conditions are met
function enableSpin() {
  const lines = document.getElementById("lines-input").value;
  const bet = document.getElementById("bet-input").value;
  document.getElementById("spin-btn").disabled = !(lines > 0 && bet > 0 && bet * lines <= balance);
}

// Update balance display
function updateBalance() {
  document.getElementById("balance").innerText = balance.toFixed(2);
}

// Spin logic
document.getElementById("spin-btn").addEventListener("click", () => {
  const lines = parseInt(document.getElementById("lines-input").value);
  const bet = parseFloat(document.getElementById("bet-input").value);

  if (lines <= 0 || lines > 3 || bet <= 0 || bet * lines > balance) {
    alert("Invalid bet or lines.");
    return;
  }

  balance -= bet * lines;
  updateBalance();

  const reels = spin();
  const rows = transpose(reels);
  displayRows(rows);

  const winnings = calculateWinnings(rows, bet, lines);
  balance += winnings;
  updateBalance();

  const message = winnings > 0 ? `You won $${winnings}!` : "Better luck next time!";
  document.getElementById("message").innerText = message;

  enableSpin();

  if (balance <= 0) {
    alert("You're out of money! Please deposit more to continue.");
    document.getElementById("spin-btn").disabled = true;
  }
});

// Generate slot machine reels
function spin() {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
}

// Transpose reels to rows
function transpose(reels) {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
}

// Display rows
function displayRows(rows) {
  rows.forEach((row, i) => {
    const rowDiv = document.getElementById(`row-${i + 1}`);
    rowDiv.innerHTML = row.map(symbol => `<div>${symbol}</div>`).join("");
  });
}

// Calculate winnings
function calculateWinnings(rows, bet, lines) {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    if (symbols.every(symbol => symbol === symbols[0])) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }
  return winnings;
}

// Input change events
document.querySelectorAll("#lines-input, #bet-input").forEach(input => {
  input.addEventListener("input", enableSpin);
});

// Function to generate random dice roll (1-6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to animate the dice roll using setTimeout
function animateDice(elementId, callback) {
    const diceElement = document.getElementById(elementId);
    let rollCount = 0;

    const animationInterval = setInterval(() => {
        diceElement.textContent = `🎲`; // Simulate dice rolling animation
        rollCount++;
        if (rollCount >= 10) {
            clearInterval(animationInterval); // Stop the animation after 10 rolls
            const finalRoll = rollDice();
            diceElement.textContent = `🎲${finalRoll}`; // Show the final roll

            // Pass the final roll value to the callback function
            callback(finalRoll);
        }
    }, 100); // Change the dice every 100ms to simulate rolling animation
}

// Function to handle dice roll for both players
function rollDiceForPlayers() {
    document.getElementById("result").textContent = "";

    // Roll for Player 1
    animateDice("dice1", function(player1Roll) {
        // Once Player 1's dice roll is done, roll for Player 2
        animateDice("dice2", function(player2Roll) {
            // Now both players' rolls are done, compare them
            if (player1Roll > player2Roll) {
                document.getElementById("result").textContent = "Player 1 Wins!";
            } else if (player1Roll < player2Roll) {
                document.getElementById("result").textContent = "Player 2 Wins!";
            } else {
                document.getElementById("result").textContent = "It's a Draw!";
            }
        });
    });
}

// Add event listener to the "Roll Dice" button
document.getElementById("rollBtn").addEventListener("click", rollDiceForPlayers);

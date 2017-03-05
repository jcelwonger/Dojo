function randomChance(quarters, walkAway) {
    var jackpot = Math.floor(Math.random() * 101);
    var spin = Math.floor(Math.random() * 101);
    if (walkAway !== undefined) {
        while (quarters < walkAway && quarters > 0) {
            if (spin === jackpot) {
                quarters += jackpot;
                return quarters;
            } else {
                quarters -= 1;
            }
        }
        return 0;
    } else {
        while (quarters > 0) {
            if (spin === jackpot) {
                quarters += jackpot;
                return quarters;
            } else {
                quarters -= 1;
            }
        }
        return 0;
    }
}
console.log(randomChance(20, 30));

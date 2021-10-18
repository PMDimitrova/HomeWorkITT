let n = 47;

let suit = n % 4;
let power = (n - suit)/ 4 + 1; // first part is finding all the powers that have passed, +1 is the current power

let firstSuit = suit; //new variable so that we can change it later in the for loop, without loosing the initial card suit

for (let i = power; i <= 13; i++) {
    for (let j = firstSuit; j <= 4; j++) {
        switch (i) {
            case 1:
                process.stdout.write("2 ");
                break;
            case 2:
                process.stdout.write("3 ");
                break;
            case 3:
                process.stdout.write("4 ");
                break;
            case 4:
                process.stdout.write("5 ");
                break;
            case 5:
                process.stdout.write("6 ");
                break;
            case 6:
                process.stdout.write("7 ");
                break;
            case 7:
                process.stdout.write("8 ");
                break;
            case 8:
                process.stdout.write("9 ");
                break;
            case 9:
                process.stdout.write("10 ");
                break;
            case 10:
                process.stdout.write("Jack ");
                break;
            case 11:
                process.stdout.write("Queen ");
                break;
            case 12:
                process.stdout.write("King ");
                break;
            case 13:
                process.stdout.write("Ace ");
                break;
        }
        switch (j) {
            case 1:
                process.stdout.write("Spade");
                break;
            case 2:
                process.stdout.write("Diamond");
                break;
            case 3:
                process.stdout.write("Heart");
                break;
            case 4:
                process.stdout.write("Club");
                break;
        }
        console.log();
        firstSuit = 1; // we are setting the next cycle to start from 1 so that every suit is listed
    }
}
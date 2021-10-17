let n = 47;

let power = n % 12;
let suit = n % 4;

for (let i = power; i <= 13; i++) {
    for (let j = suit; j <= 4; j++) {
        switch (power) {
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
        switch (suit) {
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
    }
    console.log();
}
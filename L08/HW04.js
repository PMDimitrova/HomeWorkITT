function whichNameIsMorePowerful(name1, name2){
    let powerOfFirst = findPower(name1);
    let powerOfSecond = findPower(name2);

    return (powerOfFirst > powerOfSecond) ? name1 : name2;

    function findPower(input){
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input.charCodeAt(i);
        }

        return sum;
    }
}

console.log(whichNameIsMorePowerful('Anna Dosewa Asenowa', 'Iwo Peew Peew'));
console.log(whichNameIsMorePowerful('Ali Bali Dali', 'Nesho Twyrdenewyobrazimo Dylgo'));
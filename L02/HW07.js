let time = 13;
let money = 0;
let iAmHealthy = true;

if (!iAmHealthy){
    console.log("I'll stay at home and");
    if(money){
        console.log("I'll buy some medicine.");
    }else{
        console.log("I'll drink some tea.");
    }
}else{
    if((money < 10)&& (time < 17)){ //no money, no time
        console.log("I'll go drink coffee with my friends after I finish my work.");
    }else if((money > 10) && (time > 17)) { // money and time
        console.log("I'll go get a dinner with my boyfriend.");
    }else if ((money < 10) && (time > 17)){ // no money but free time
        console.log("I'll invite my friends over and hope they bring beer with them.");
    }else { // money but no time
        console.log("I'll just have to be patient and I'll text some friends to arrange something after work");
    }
}
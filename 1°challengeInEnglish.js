const ethanolPrice = 4.23;
const gasolinePrice = 5.80;
const distanceKM = 280;
const averageConsumption = 12;
const fuel = "ethanol";

class TripCalculator {
    constructor(ethanolPrice, gasolinePrice, distanceKM, averageConsumption, moneySpend) {
        this.ethanolPrice = ethanolPrice;
        this.gasolinePrice = gasolinePrice;
        this.distanceKM = distanceKM;
        this.averageConsumption = averageConsumption;
        this.moneySpend = moneySpend;
    }

    tripInfoGasoline() {
        console.log(`A trip of ${this.distanceKM} kilometers with a car that uses ${this.averageConsumption} kilometers per liter of gasoline at $ ${this.gasolinePrice} per liter, you will spend $ ${this.moneySpend} on gasoline.`);
    }

    tripInfoEthanol() {
        console.log(`A trip of ${this.distanceKM} kilometers with a car that uses ${this.averageConsumption} kilometers per liter of ethanol at $ ${this.ethanolPrice} per liter, you will spend $ ${this.moneySpend} on ethanol.`);
    }
}

function expenseCalculator(distanceKM, averageConsumption, usedFuel) {
    const calculation = (distanceKM / averageConsumption) * usedFuel;
    return calculation.toFixed(2);
} 

let usedFuel;
switch (fuel) {
    case "gasoline":
        usedFuel = gasolinePrice;
        break;
    case "ethanol":
        usedFuel = ethanolPrice;
        break;
}

let moneySpend = expenseCalculator(distanceKM, averageConsumption, usedFuel);

if (fuel === "gasoline") {
    const information = new TripCalculator(ethanolPrice, gasolinePrice, distanceKM, averageConsumption, moneySpend);
    information.tripInfoGasoline();
} else if (fuel === "ethanol") {
    const information = new TripCalculator(ethanolPrice, gasolinePrice, distanceKM, averageConsumption, moneySpend);
    information.tripInfoEthanol();
}

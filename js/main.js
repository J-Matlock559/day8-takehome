class Car {
    constructor(make, model, year, price){
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

let car1 = new Car("Nissan", "Sentra", 2016, "$19,999");
let car2 = new Car("Dodge", "Stratus", 2005, "$12,000");
let car3 = new Car("Toyota", "Corolla", 2022, "$29,999");
let car4 = new Car("Tesla", "Model 3", 2021, "$59,999");

const carArray = [car1, car2, car3, car4];


carArray.forEach(element => {
    const para = document.createElement('p');
    para.innerText = 
    `Make: ` + element.make + `
    Model:  ` + element.model + `
    Year: ` + element.year + `
    Price: ` + element.price;
    document.body.appendChild(para);
});

/* function displayCars() {
    for(i = 1; i < 5; i++){

        const para = document.createElement('p');
        let carNum = "car" + i;
        para.innerText = carNum.make;
        document.body.appendChild(para);
    }
}

displayCars(); */
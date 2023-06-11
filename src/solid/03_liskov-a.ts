import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle } from './03_liskov-b';


(() => {

    const printCarSeats = (cars: Vehicle[]) => {

        cars.forEach ( car => {
            console.log(car.constructor.name +  ' | ' + car.getNumberOfSeats() );
        })

    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(5),
    ];


    printCarSeats(cars);

})();
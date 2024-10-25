export class Car {
    carId: string;
    model: string;
    price: string;
    imageUrl: string

    constructor (carId: string, model: string, price: string,imageUrl: string)
    {
        this.carId = carId;
        this.model = model;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
//defines the structure of the bin object received back from backend, mimics the mongoose schema of bin

export default class Bin {
    _id: string | undefined;
    usrID: string | undefined;
    food: string | undefined;
    quantity: string | undefined;
    date_added: Date | undefined;

    constructor(foodname: string, quantity: number) {
        this.food = foodname;
        this.quantity = quantity.toString();
    }
}
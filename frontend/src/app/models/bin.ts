//defines the structure of the bin object received back from backend, mimics the mongoose schema of bin

export default class Bin {
    _id: string | undefined;
    food: string | undefined;
    quantity: string | undefined;
    date_added: Date | undefined;
}
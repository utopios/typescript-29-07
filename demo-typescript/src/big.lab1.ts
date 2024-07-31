type ID = number;
type Category = 'Electronics' | 'Clothing' | 'Food';

// enum Category {
//     Electronics = "Electronics",
//     Clothing = "Clothing",
//     Food = "Food"
// }

interface Item<T> {
    id: ID;
    category : Category;
    metadata: T | number
}

export interface Product<T> extends Item<T> {
    name: string,
    price: number,
    metadata: T
}


interface InventoryItem<T> extends Product<T> {
    quantiy: number
}

export interface RealElectronicProduct {
    wattage: number,
    model: string
}


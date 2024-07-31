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


export interface InventoryItem<T> extends Product<T> {
    quantiy: number
}

export interface RealElectronicProduct {
    wattage: number,
    model: string
}

export class Inventory<T extends InventoryItem<any>> {
    private items: T[] = [];

    addItem(item: T):void {
        this.items.push(item)
    }

    updateItem(id: ID, updateData: Partial<T>): void {
        const item = this.items.find(item => item.id === id)
        if(item) {
            Object.assign(item, updateData)
        }
    }

    findItemsByCategory(category: Category): T[] {
        return this.items.filter(item => item.category === category)
    }

}
export interface RepairedHistory {
    dateRepaired: Date;
    state: string;
    description: string;
    urgency: string;
}

export interface WarehouseItem {
    id: string;
    sku: number;
    name: string;
    description: string;
    category: string;
    dateReceived: Date;
    state: string;
    urgency: string;
    repairedHistory: RepairedHistory[];
}

export interface RepairedItem extends WarehouseItem {
    dateRepaired: Date;
}

export interface Warehouse {
    warehouse: WarehouseItem[];
    repaired: RepairedItem[];
}

export interface WarehouseStore {
    warehouse: Warehouse;
    addWarehouseItem: (item: WarehouseItem) => void;
    moveItemToRepaired: (itemId: string, dateRepaired: Date) => void;
}

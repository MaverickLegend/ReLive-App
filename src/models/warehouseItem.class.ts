import type { WarehouseItem } from '@/types/warehouse';
import type { RepairedHistory } from '@/types/warehouse';

export class WarehouseArticle implements WarehouseItem {
    id: string;
    sku: number;
    name: string;
    description: string;
    category: string;
    dateReceived: Date;
    state: string;
    urgency: string;
    repairedHistory: RepairedHistory[] = [];

    constructor(
        id: string,
        sku: number,
        name: string,
        description: string,
        category: string,
        dateReceived: Date,
        state: string,
        urgency: string,
        repairedHistory: RepairedHistory[] = [],
    ) {
        this.id = id;
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.category = category;
        this.dateReceived = dateReceived;
        this.state = state;
        this.urgency = urgency;
        this.repairedHistory = repairedHistory;
    }
}

import { defineStore } from 'pinia';
import axios from 'axios';

interface Item {
    id: string;
    model: string;
    brand: string;
    quantity: number;
    category: string;
    itemType: string;
}

const API_BASE_URL = 'http://localhost:3000/api';

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        items: [] as Item[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchInventory() {
            this.loading = true;
            try {
                const response = await axios.get(`${API_BASE_URL}/inventory`);
                this.items = response.data;
            } catch (err) {
                this.error = 'Error fetching inventory';
                console.log(err);
            } finally {
                this.loading = false;
            }
        },
        async fetchItemDetails(itemType: string, id: string) {
            try {
                const response = await axios.get(`${API_BASE_URL}/${itemType.toLowerCase()}/${id}`);
                return response.data;
            } catch (err) {
                this.error = 'Error fetching item details';
                console.error(err);
            }
        },
    },
});

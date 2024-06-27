import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import type { WarehouseItem } from '@/types/warehouse';

const toPlainObject = (instance: any): Record<string, any> => {
    const obj: Record<string, any> = {};
    for (const key in instance) {
        if (Object.prototype.hasOwnProperty.call(instance, key)) {
            obj[key] = instance[key];
        }
    }
    return obj;
};

export const addWarehouseItem = async (articleData: WarehouseItem): Promise<WarehouseItem> => {
    const plainArticleData = toPlainObject(articleData);
    try {
        await addDoc(
            collection(db, 'warehouseStore', 'O9pxOnIOlzzsKL9QtR6r', 'warehouse'),
            plainArticleData,
        );
        console.log('Document written with ID: ', articleData.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
    return articleData;
};

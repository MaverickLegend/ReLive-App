import { db } from '@/firebase';
import { collection, doc, getDoc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';

import type { WarehouseItem, RepairedItem, RepairedHistory } from '@/types/warehouse';

export const moveItemToRepaired = async (itemId: string, dateRepaired: Date): Promise<void> => {
    try {
        // Obtener el documento desde la colección 'warehouse'
        const warehouseRef = doc(db, 'warehouseStore', 'O9pxOnIOlzzsKL9QtR6r', 'warehouse', itemId);
        const warehouseDoc = await getDoc(warehouseRef);

        if (warehouseDoc.exists()) {
            // Obtener los datos del documento warehouse
            const warehouseData = warehouseDoc.data() as WarehouseItem;

            // Crear un nuevo objeto RepairedItem con los datos necesarios
            const repairedItem: RepairedItem = {
                ...warehouseData,
                dateRepaired: dateRepaired, // Agrega el estado después de la reparación aquí
            };

            // Actualizar el historial de reparaciones
            const repairedHistoryEntry: RepairedHistory = {
                dateRepaired: dateRepaired,
                state: warehouseData.state, // Agrega el estado después de la reparación aquí
                description: warehouseData.description,
                urgency: warehouseData.urgency,
            };

            const updatedRepairedHistory = [...warehouseData.repairedHistory, repairedHistoryEntry];

            // Agregar el artículo reparado a la colección 'repaired'
            await addDoc(
                collection(db, 'warehouseStore', 'O9pxOnIOlzzsKL9QtR6r', 'repaired'),
                repairedItem,
            );

            // Eliminar el artículo de la colección 'warehouse'
            await deleteDoc(warehouseRef);

            // Actualizar el documento warehouse para incluir el nuevo historial de reparaciones
            await updateDoc(warehouseRef, {
                repairedHistory: updatedRepairedHistory,
            });

            console.log(`Item with ID ${itemId} moved to 'repaired' collection.`);
        } else {
            console.error(`Document with ID ${itemId} does not exist in 'warehouse' collection.`);
        }
    } catch (error) {
        console.error('Error moving item to repaired:', error);
    }
};

export default moveItemToRepaired;

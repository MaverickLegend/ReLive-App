// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '@/firebase';
// import type { Article } from '@/types/interfaces';

// // Función de utilidad para convertir la instancia en un objeto plano
// const toPlainObject = (instance: any): Record<string, any> => {
//     const obj: Record<string, any> = {};
//     for (const key in instance) {
//         if (Object.prototype.hasOwnProperty.call(instance, key)) {
//             obj[key] = instance[key];
//         }
//     }
//     return obj;
// };

// export const addArticle = async (articleData: Article): Promise<Article> => {
//     const plainArticleData = toPlainObject(articleData);
//     try {
//         await addDoc(collection(db, 'articles'), plainArticleData);
//         console.log('Document written with ID: ', articleData.id);
//     } catch (error) {
//         console.error('Error adding document: ', error);
//     }
//     return articleData;
// };
import type { Article } from '@/types/interfaces';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';

export const addArticle = async (endpoint: string, articleData: Article): Promise<Article> => {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, articleData);
        console.log('Document written with ID: ', response.data.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
    return articleData;
};

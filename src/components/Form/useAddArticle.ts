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

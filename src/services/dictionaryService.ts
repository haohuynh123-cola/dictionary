import axios from 'axios';
import { Word } from '../types';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const searchWord = async (word: string): Promise<Word[]> => {
    try {
        const response = await axios.get(`${API_URL}/${word}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            throw new Error('Không tìm thấy từ này trong từ điển');
        }
        throw new Error('Đã xảy ra lỗi khi tìm kiếm từ');
    }
};
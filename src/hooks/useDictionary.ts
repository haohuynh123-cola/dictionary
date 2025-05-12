import { useState } from 'react';
import { Word } from '../types';
import { searchWord } from '../services/dictionaryService';

interface UseDictionaryResult {
    data: Word[] | null;
    loading: boolean;
    error: string | null;
    search: (word: string) => Promise<void>;
}

export const useDictionary = (): UseDictionaryResult => {
    const [data, setData] = useState<Word[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const search = async (word: string) => {
        if (!word.trim()) {
            setError('Vui lòng nhập từ cần tra cứu');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const result = await searchWord(word);
            setData(result);
        } catch (err) {
            setData(null);
            setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi không xác định');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, search };
};
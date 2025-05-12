import React, { useState, FormEvent } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

interface SearchBarProps {
    onSearch: (word: string) => void;
    loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Nhập từ cần tra cứu"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ backgroundColor: '#fff' }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading || !searchTerm.trim()}
                        sx={{ minWidth: '120px' }}
                    >
                        {loading ? 'Đang tìm...' : 'Tra cứu'}
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default SearchBar;
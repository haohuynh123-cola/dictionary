import React from 'react';
import { Container, Typography, Box, Alert, CircularProgress } from '@mui/material';
import SearchBar from '../components/SearchBar';
import WordDetail from '../components/WordDetail';
import { useDictionary } from '../hooks/useDictionary';

const HomePage: React.FC = () => {
    const { data, loading, error, search } = useDictionary();

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Từ Điển Tiếng Anh
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
                    Tra cứu từ vựng, phát âm và ý nghĩa
                </Typography>
            </Box>

            <SearchBar onSearch={search} loading={loading} />

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Alert severity="error" sx={{ my: 2 }}>
                    {error}
                </Alert>
            )}

            {data && data.length > 0 && (
                <Box>
                    {data.map((wordData, index) => (
                        <WordDetail key={index} wordData={wordData} />
                    ))}
                </Box>
            )}

            {!loading && !error && !data && (
                <Box sx={{
                    textAlign: 'center',
                    py: 8,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    border: '1px dashed #ccc'
                }}>
                    <Typography variant="body1" color="text.secondary">
                        Nhập từ vựng để bắt đầu tra cứu
                    </Typography>
                </Box>
            )}
        </Container>
    );
};

export default HomePage;
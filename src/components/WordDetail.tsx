import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Chip
} from '@mui/material';
import { Word } from '../types';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface WordDetailProps {
    wordData: Word;
}

const WordDetail: React.FC<WordDetailProps> = ({ wordData }) => {
    const playAudio = (audioUrl: string) => {
        if (audioUrl) {
            const audio = new Audio(`https:${audioUrl}`);
            audio.play().catch(error => console.error('Lỗi phát âm thanh:', error));
        }
    };

    // Tìm URL âm thanh đầu tiên có sẵn
    const audioUrl = wordData.phonetics.find(p => p.audio)?.audio || '';

    return (
        <Card elevation={3} sx={{ mb: 4, overflow: 'visible' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" component="h1" sx={{ mr: 2, fontWeight: 'bold' }}>
                        {wordData.word}
                    </Typography>

                    {audioUrl && (
                        <IconButton
                            color="primary"
                            onClick={() => playAudio(audioUrl)}
                            sx={{ backgroundColor: '#e3f2fd', '&:hover': { backgroundColor: '#bbdefb' } }}
                        >
                            <VolumeUpIcon />
                        </IconButton>
                    )}
                </Box>

                {wordData.phonetic && (
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                        {wordData.phonetic}
                    </Typography>
                )}

                {wordData.origin && (
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
                            Nguồn gốc:
                        </Typography>
                        <Typography variant="body2" paragraph>
                            {wordData.origin}
                        </Typography>
                    </Box>
                )}

                <Divider sx={{ mb: 3 }} />

                {wordData.meanings.map((meaning, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                        <Chip
                            label={meaning.partOfSpeech}
                            color="primary"
                            sx={{ mb: 2, fontWeight: 'bold' }}
                        />

                        <List disablePadding>
                            {meaning.definitions.map((def, defIndex) => (
                                <ListItem
                                    key={defIndex}
                                    alignItems="flex-start"
                                    sx={{
                                        pl: 0,
                                        pr: 0,
                                        mb: 2,
                                        flexDirection: 'column'
                                    }}
                                >
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1">
                                                {defIndex + 1}. {def.definition}
                                            </Typography>
                                        }
                                        secondary={
                                            def.example && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontStyle: 'italic' }}
                                                >
                                                    "{def.example}"
                                                </Typography>
                                            )
                                        }
                                    />

                                    {def.synonyms.length > 0 && (
                                        <Box sx={{ mt: 1 }}>
                                            <Typography variant="body2" component="span" fontWeight="bold">
                                                Từ đồng nghĩa:
                                            </Typography>{' '}
                                            <Typography variant="body2" component="span">
                                                {def.synonyms.join(', ')}
                                            </Typography>
                                        </Box>
                                    )}

                                    {def.antonyms.length > 0 && (
                                        <Box sx={{ mt: 1 }}>
                                            <Typography variant="body2" component="span" fontWeight="bold">
                                                Từ trái nghĩa:
                                            </Typography>{' '}
                                            <Typography variant="body2" component="span">
                                                {def.antonyms.join(', ')}
                                            </Typography>
                                        </Box>
                                    )}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};

export default WordDetail;
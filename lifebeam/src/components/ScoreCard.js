import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export const ScoreCard = ({title, score, description, color}) => {
    return (
        <Paper elevation={3} style={{ borderRadius: '0', borderLeft: `4px solid ${color}`, padding: '16px', height: '250px' }}>
            <Box fontSize={16} m={1} fontWeight="fontWeightLight">
                { title }
            </Box>
            <Box fontSize={42} m={2} fontWeight="fontWeightBold" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
                { score }
            </Box>
            <Box fontSize={16} m={2} fontWeight="fontWeightLight">
                { description }
            </Box>
        </Paper>
    )
};

export default ScoreCard;
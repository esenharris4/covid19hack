import React from 'react';
import Box from '@material-ui/core/Box';
import './score.css';

export const Score = ({ number}) => {

    const description = (number) => {
        if (number > 750) {
            return 'high'
        }
        else if (number > 500) {
            return 'medium'
        }
        else {
            return 'low'
        }
    }

    return (
        <Box fontSize={24} fontFamily="fontFamily" m={1} className={`app-score--${description(number)}`}>
            { number }
        </Box>
    );
}

export default Score;
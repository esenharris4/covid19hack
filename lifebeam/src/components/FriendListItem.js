import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import './FriendListItem.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Score} from './score';

export const FriendListItem = ({name, score, recommended}) => {
    return (
        <Paper elevation={3} className="fli-c-layout">
            <div>
                <Avatar src="images/avatar-0.jpg"/>
                <Box fontSize={16} m={1}>
                    { name }
                </Box>
            </div>
            <div>
                <Score number={score} />
                { recommended == 'true' && (
                    <Fab color="secondary" size="small">
                        <AddIcon/>
                    </Fab>
            ) }
            </div>
        </Paper>
    )
};

export default FriendListItem;
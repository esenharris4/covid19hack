import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import './FriendListItem.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export const FriendListItem = ({name, score, recommended}) => {
    return (
        <Paper elevation={3} className="fli-c-layout">
            <Avatar src="images/avatar-0.jpg"/>
            <Box fontSize={16} m={1}>
                {name}
            </Box>
            { recommended == 'true' && (
                <div className="fli-c-layout-fab">
                    <Fab color="secondary" size="small">
                        <AddIcon/>
                    </Fab>
                </div>
            ) }
        </Paper>
    )
};

export default FriendListItem;
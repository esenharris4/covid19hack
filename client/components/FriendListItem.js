import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import './FriendListItem.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Score} from './score';
import Avatar from './../components/avatar';

export const FriendListItem = ({avatar, name, score, recommended, color, backgroundColor}) => {
    return (
        <Paper elevation={3} className="fli-c-layout">
            <div>
                { avatar &&
                    <Avatar avatar={avatar}/>
                }
                <Box fontSize={20} m={3}>
                    { name }
                </Box>
            </div>
            <div>
                { score &&
                    <div style={{ display: 'inlineFlex', backgroundColor: backgroundColor, color: color, width: '150px', padding: '8px', borderRadius: '50px', height: '20px', textAlign: 'center', display: 'inline'}}>
                        {score} social score
                    </div>
                }
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
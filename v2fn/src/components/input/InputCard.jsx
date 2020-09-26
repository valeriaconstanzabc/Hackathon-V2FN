import React from 'react';
import { IconButton, Button, InputBase, Paper } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade} from '@material-ui/core/styles';


const useStyle = makeStyles((theme)=>({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
      },
      input: {
        margin: theme.spacing(1),

      },
      btnConfirm: {
        background: '#5AAC44',//cambiar color boton//
        color: '#fff',
        '&:hover': {
          background: fade('#5AAC44', 0.75),
        },
      },
      confirm: {
        margin: theme.spacing(0, 1, 1, 1),
      },
    }));
export default function InputCard({ setOpen }) {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.card}>
            <Paper>
                <InputBase  
                multiline 
                onBlur={()=> setOpen(false)}
                fullWidth
                className={classes.input}
                inputProps={{
                    classes: classes.input,
                }}
                placeholder="Enter a title of this card..."
                />
            </Paper>
            </div> 
            <div className={classes.confirm}>
                <Button 
                classsName={classes.btnConfirm} 
                onClick={()=> setOpen(false)}
                >Add Card</Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

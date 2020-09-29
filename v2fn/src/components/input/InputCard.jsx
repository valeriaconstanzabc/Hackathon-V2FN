import React, { useState, useContext} from 'react';
import { IconButton, Button, InputBase, Paper } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade} from '@material-ui/core/styles';
import storeApi from '../../utils/storeApi'

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
export default function InputCard({ setOpen, listId, type }) {
    const classes = useStyle();
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const [cardTitle,setCardTitle] = useState('');
    const handleOnChange= (e) => {
      setCardTitle(e.target.value);
    };
    const handlebtnConfirm = () => {
      if(type ==='card'){
      addMoreCard(cardTitle, listId);
      setCardTitle('');
      setOpen(false);
    }else{
      addMoreList(cardTitle);
      setCardTitle('');
      setOpen(false);
    }
  };



    return (
        <div>
            <div className={classes.card}>
            <Paper>
                <InputBase  
                onChange={handleOnChange}
                multiline 
                onBlur={()=> setOpen(false)}
                fullWidth
                className={classes.input}
                inputProps={{
                    classes: classes.input,
                }}
                value={cardTitle}
                placeholder={type==='card'?'Enter a title of this card...'
                                           :'Enter list title...'
                                          }
                />
            </Paper>
            </div> 
            <div className={classes.confirm}>
                <Button 
                classsName={classes.btnConfirm} 
                onClick={handlebtnConfirm}>
                  {type ==='card'?'Add Card':"Add List"}</Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

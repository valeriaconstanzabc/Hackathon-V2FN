import React from 'react';
import { Paper, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from './Card';
import InputContainer from '../input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';

// Estilos de TODO//
const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        background: 'rgba(160, 160, 179, 0.2)',
        marginLeft: theme.spacing(1),
        fontSize: '18px',

        
    },
    cardContainer:{
        marginTop:theme.spacing(4),

        

    }

}));
export default function List({ list, index }) {
    const classes = useStyle();
    console.log(list.title)
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided)=> (
        <div {...provided.draggableProps} ref={provided.innerRef}>
            <Paper className={classes.root} {...provided.dragHandleProps}>
                <CssBaseline />
                <Title title={list.title} listId={list.id}/>
                <Droppable droppableId={list.id}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef} 
                        {...provided.droppableProps} 
                        className={classes.cardContainer}
                        >
                            {list.cards.map((card, index) => (
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <InputContainer listId={list.id} type="card" />
            </Paper>
        </div>
        )}
        </Draggable>
    );
}

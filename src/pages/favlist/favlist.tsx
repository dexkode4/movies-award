import React, { useContext, useState, useEffect } from 'react'
import { favContext } from '../../context/favoriteContext';
import styles from './fav.module.scss';
import { MovieSummary } from './favlist.component';
import {
    DragDropContext,
    Draggable,
    Droppable,
    DroppableProvided,
    DraggableLocation,
    DropResult,
    DroppableStateSnapshot, DraggableProvided, DraggableStateSnapshot
} from 'react-beautiful-dnd';
import { IMovie } from '../../interface';




function FavList() {
    const state = useContext(favContext);
    const [favs, setFavs] = useState(state?.favorites)

    useEffect(() => {
        setFavs(state?.favorites)
    }, [state?.favorites])

    function handleOnDragEnd(result: DropResult) {
        if (!result.destination) return;

        const items: any = favs;
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setFavs(items);
    }


    return (
        <div className={styles.favlist}>

            <header className={styles.header}>
                {state?.size ? <h1>nominations</h1> : <h1>You have no nomination</h1>}
            </header>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="droppable">

                    {
                        (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (

                            <div {...provided.droppableProps} ref={provided.innerRef}  className={styles.movieSummaryContainer}>

                                {
                                    favs?.map((movie, index) => (
                                        <Draggable key={movie.imdbID} draggableId={movie.imdbID} index={index}>
                                            {(providedDraggable: DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (
                                                <div
                                                    ref={providedDraggable.innerRef}
                                                    {...providedDraggable.draggableProps}
                                                    {...providedDraggable.dragHandleProps}
                                            

                                                >
                                                    <MovieSummary movie={movie} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))
                                }

                            </div>

                        )
                    }

                    {/* {favs?.map((movie) => (
                        <MovieSummary movie={movie} />
                    ))} */}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default FavList

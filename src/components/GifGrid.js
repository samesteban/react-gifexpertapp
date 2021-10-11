import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images,loading} = useFetchGifs(category);

    return (
        <div className="card-grid-group">
            <h3 className={ loading ? 'animate__animated animate__flash animate__infinite animate__slow' : 'done'}> { loading ? 'Cargando' : category } </h3>

            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </div>
    )
}

import React from 'react'
import { useFectchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFectchGifs(category);
    
    return (
        <>
        
        <h3 className='animate__animated animate__bounce'>{category}</h3>
        {loading && <p className='nimate__animated animate__flash'>Loading</p> }
        <div className="card-grid">
        {
            images.map(img => (
                <GifGridItem 
                    key = {img.id}
                    {...img}
                />
            ))
        }
        </div>
        </>

    )
}

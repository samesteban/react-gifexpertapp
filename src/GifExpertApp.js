import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2 className="app-title">GifExpertApp</h2>
            
            <AddCategory setCategories={setCategories} />
            
            <ul>
               {
                   categories.map(category => <GifGrid key ={ category } category={ category } />)
               } 
            </ul>
        </>
    )
}
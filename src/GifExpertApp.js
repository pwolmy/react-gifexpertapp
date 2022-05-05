import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);
    const handleAdd = () => {
        //setCategories([...categories,'Evangelion']);
        //con callback
        setCategories( cats => [...cats,'Evangelion']);
    };

    return(
        <>
        <h2>Gif ExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>

        <ol>
        {
            categories.map(category => 
                <GifGrid 
                    key = {category} 
                    category = {category} 
                />
            )
        }
        </ol>
        </>
    );
}

export default GifExpertApp;

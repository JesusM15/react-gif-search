import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category )=>{

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setImages(newImages);       
        setIsLoading(false); 
    }

    //adentro del useEffect se tendran 2 argumentos
    //una funcion como argumento( el evento a disparar es decir ).
    //lista de dependencias, las condiciones con las cuales quiero volver a ejecutar el callback
    useEffect( () => {
        getImages();
    }, []); //al dejar las llave vacia( es decir, la lista vacia) el hook solo se disparara la primera vez que se cree y construya el componente.


    return {
        images,
        isLoading
    }
}
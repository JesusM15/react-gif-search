import { useState } from "react"
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () =>{

    // const [categories, setCategories] = useState([ ]);
    const [categories, setCategories] = useState('');

    const onAddCategory = ( newCategory ) =>{
        // ... es un operador spret hace una 'copia' de todas las categorias que hay y añade valorant
        // setCategories( [...categories, 'Fortnite'] );
        // setCategories(cat => [...cat, 'Fortnite']);
        //si categories incluye newCategory como in en python
        // if (categories.includes(newCategory)) return;
        // console.log(newCategory);
        // setCategories( [...categories, newCategory] );
        setCategories(newCategory);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifSearch</h1>

            {/* input */}
            <AddCategory 
                // setCategories={ setCategories } 
                //on se suele hacer cuando emite algo
                onNewCategory={ onAddCategory }
            />

            {/* listado de gifs */}
                    {/* gif item */}
                    {/* (category, indice)=> */}
                    {/* // tiene que tener una clave unica
                        // return <li key={ category }>{category}</li> */}
                { 
                    // categories.map( ( category ) =>
                    //     (
                    //         <GifGrid 
                    //             key={ category } 
                    //             category={ category } 
                    //         />
                    //     )    
                    // )
                    <GifGrid 
                        key={ categories }
                        category={ categories }
                    />

                }    
        </>
    )
}
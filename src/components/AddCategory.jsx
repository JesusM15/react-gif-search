//functional component
//cada componente puede tener sus propios estados hooks
import { useState } from "react";
//                          (props) es lo que desestructuro
export const AddCategory = ( { onNewCategory } ) =>{

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) =>{
        setInputValue( target.value );
        // console.log( target.value );
        // console.log( event.target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        // setCategories( categories => [inputValue, ...categories] ); 
        setInputValue(' ');
    }

    return (
        //se renderiza por default read-only
        // solo se usa <></> fragmentos cuando son hermanos los elementos pero si solo retorna uno puede tener dentro varios
        <form onSubmit={ onSubmit }>
            <input 
                type='text'
                placeholder='Buscar gifs'
                value= { inputValue }
                onChange= { onInputChange }
            />
        </form>
    )
}
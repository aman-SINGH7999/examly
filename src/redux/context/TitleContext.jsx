import { createContext, useState } from "react";

export const TitleContext = createContext();

export const TitleProvider = (props) => {
    const [title, setTitle] = useState('Title');
    return (
        <TitleContext.Provider value = {{
            title, setTitle
        }}>
            {props.children}
        </TitleContext.Provider>
    );
}
import { useState, createContext } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
    const [state, setState] = useState(false);

    const store = {
        state,
        setState,
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

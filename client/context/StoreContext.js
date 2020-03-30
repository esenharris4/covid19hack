import React, { useState } from 'react';

const StoreContext = React.createContext({});

const initialState = {
    friendsAddedList: [{}]
};

const StoreProvider = ({ children }) => {
    const [state, setState] = useState({ ...initialState });

    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreProvider, StoreContext };
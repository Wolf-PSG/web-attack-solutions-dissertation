import React, { createContext, useReducer, useContext } from 'react';
const AttackStateContext = createContext();
const AttackDispatchContext = createContext();

const attackReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_ATTACK':
            return {
                ...state,
                attack: action.payload,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

export const AttackProvider = ({ children }) => {
    const [state, dispatch] = useReducer(attackReducer, { attack: null });
    return (
        <AttackDispatchContext.Provider value={dispatch}>
            <AttackStateContext.Provider value={state}>
                {children}
            </AttackStateContext.Provider>
        </AttackDispatchContext.Provider>
    );
};

export const useAttackState = () => useContext(AttackStateContext);
export const useAttackDispatch = () => useContext(AttackDispatchContext);

import { createContext } from 'react';

export type InitialStateType = {
    categories: string[];
  }
const initialState: InitialStateType = {
    categories: []
}

const Context = createContext<InitialStateType>(initialState);

export default Context;




import {Category, initialState} from "./CategoriesContext";

type Id =  {
    id: string
}

type Action = 
|  {
    type: 'CATEGORIES'
    data?: Category
    }
| {
    type: 'CHECKED'
    payload: Id
  }


export default function reducer(state=initialState,  action: Action) {
    switch(action.type) {
        case "CATEGORIES":
            return {
                ...state,
                loading: false,
                categories:[ action.data ]
            };
        case "CHECKED":
            return {
                ...state,
                categories: [state.data.categories.filter(id => id === action.payload.id)]
            }
        default:
            return state
    }
}



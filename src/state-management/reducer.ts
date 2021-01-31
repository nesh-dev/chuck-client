
import { CategoriesQueryResult  } from '../generated/graphql';

type CategoriesAction = {
    type: string
    category: string
}

export default function reducer(state: CategoriesQueryResult, action: CategoriesAction) {
    switch(action.type) {
        case "CATEGORIES":
            return {
                categories:[]
            };
        default:
            return state
    }
}



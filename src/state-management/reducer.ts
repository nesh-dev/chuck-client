
import InitialStateType from './Provider'

type CategoriesAction = {
    type: string
    category: string
}

export default function reducer(state: any, action: any) {
    console.log(action, 'KKKK')
    switch(action.type) {
        case "CATEGORIES":
            return {
                categories:[ action.data ]
            };
        default:
            return state
    }
}



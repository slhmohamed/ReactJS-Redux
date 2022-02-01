import { ADD_POST, GET_POSTS,EDIT_POST, DELETE_POST } from "../actions/post.action";
const initialState={};

export default function postReducer(state=initialState,
    action){
        switch(action.type){
            case GET_POSTS:
                return action.payload
            case ADD_POST:
                return [action.payload, ...state]
                case EDIT_POST:
                    return [action.payload,...state]
                    case DELETE_POST:
                        return state.filter((post)=>post.id !==action.payload.postId)
                default: return state
        }
    }
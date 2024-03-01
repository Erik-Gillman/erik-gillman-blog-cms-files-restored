import {UserState} from "./user.model";
import {createReducer, on} from "@ngrx/store";
import {UserActions} from "./user.actions";



const initState: UserState = {
  userName: "",
  userId: 0,
  isLogged: false
}

export const UserReducer = createReducer(
  initState,
  on(UserActions.userChange, (state: UserState, props) => {
    return {
      ...state,
      userName: props.userName,
      userId: props.userId,
      isLogged: props.isLogged
    }
  })
)

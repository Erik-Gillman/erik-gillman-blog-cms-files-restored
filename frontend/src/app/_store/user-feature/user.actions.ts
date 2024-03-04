import {createActionGroup, props} from "@ngrx/store";

export const UserActions = createActionGroup({
  source: "User Info Change",
  events:{
    "userInfoChange":props<{userName: string, userId: number, isLogged: boolean}>()
  }
  }
)

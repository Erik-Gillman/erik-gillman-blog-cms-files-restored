import {createActionGroup, props} from "@ngrx/store";

export const UserActions = createActionGroup({
  source: "User Change",
  events:{
    "userChange":props<{userName: string, userId: number, isLogged: boolean}>()
  }
  }
)

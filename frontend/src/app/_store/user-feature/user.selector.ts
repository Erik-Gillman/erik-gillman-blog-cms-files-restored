import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.model";

const userFeature = createFeatureSelector<UserState>("currUser")

export const selectUserId = createSelector(
  userFeature,
  (userFeature) =>{
    return userFeature.userId
  }
)

export const selectUserName = createSelector(
  userFeature,
  (userFeature) =>{
    return userFeature.userName
  }
)

export const selectIsLogged = createSelector(
  userFeature,
  (userFeature) =>{
    return userFeature.isLogged
  }
)

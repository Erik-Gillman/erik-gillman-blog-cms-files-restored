import {ApplicationConfig} from "@angular/core";
import {provideStore} from "@ngrx/store";
import {UserReducer} from "./_store/user-feature/user.reducer";
import {selectUserName} from "./_store/user-feature/user.selector";

export const appConfig: ApplicationConfig = {
  providers: [provideStore({newUser: UserReducer})]
};

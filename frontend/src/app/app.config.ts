import {ApplicationConfig} from "@angular/core";
import {provideStore} from "@ngrx/store";
import {UserReducer} from "./_store/user-feature/user.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideStore({currUser: UserReducer})]
};

import { Route, Switch } from "react-router-dom"
import { memo,FC } from "react";

import { Login } from "../pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templete/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={({ match: { url }}) =>(
        <Switch>
          {homeRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              <HeaderLayout>{route.children}</HeaderLayout>
            </Route>
          ))}
        </Switch>

      )} />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})
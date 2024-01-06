import './styles/main.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContext} from "shared/lib/contexts";
import {UserInfo, Links} from "shared/lib/constants";
import {getKeyStorage} from "shared/lib/utils";
import {PrivateRoute} from "./model/private-route";
import {BgAnimation, Container} from "shared/ui";
import {Main, Game, NotFound, PageResult} from "pages";

const listRoutes = [
  {
    tpl: <Game />,
    path: Links.Game
  },
  {
    tpl: <PageResult />,
    path: Links.Results
  },
  {
    tpl: <NotFound />,
    path: Links.NotFound
  },
]

export const App = () => {
  const [authorization, setAuthorization] = useState(!!getKeyStorage(UserInfo.Name));

  return (
    <BrowserRouter>
      <BgAnimation/>
      <Container>
        <UserContext.Provider value={{
          auth: authorization,
          setAuth: setAuthorization
        }}>
        <Routes>
          <Route path={Links.Main} element={<Main />}/>
          <Route element={<PrivateRoute auth={authorization} />}>
            {listRoutes.map(({tpl, path}, i) =>
              <Route key={path + i} path={path} element={tpl}/>
            )}
          </Route>
        </Routes>
        </UserContext.Provider>
      </Container>
    </BrowserRouter>
  )
}

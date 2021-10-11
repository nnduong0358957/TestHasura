import "./App.css";
import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import routes from "./routes";

function App() {
  const history = useHistory();

  const showContentMenu = (routes) => {
    var result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  };

  useEffect(() => {
    const checkLogin = async () => {
      const publicPage = ["/TestHasura/login", "/TestHasura/register"];
      const loginUser = await localStorage.getItem("token");

      const checkIsValidPage = routes.some(
        (route) => route.path === history.location.pathname
      );

      if (checkIsValidPage) {
        const checkIsPublicPage = publicPage.some(
          (page) => page === history.location.pathname
        );

        if (loginUser && checkIsPublicPage) {
          history.push("/TestHasura");
        }

        if (!loginUser && !checkIsPublicPage) {
          history.push("/TestHasura/login");
        }
      } else {
        if (loginUser) history.push("/TestHasura");
        else history.push("/TestHasura/login");
      }
    };

    checkLogin();
  }, [history]);

  return (
    <div className="all">
      <div className="App">
        <Switch>{showContentMenu(routes)}</Switch>
      </div>
    </div>
  );
}

export default App;

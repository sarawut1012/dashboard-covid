import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import routes from "./Config/router";

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} component={route.component} />
                ))}
            </Switch>
        </Router>
    );
}

export default App;

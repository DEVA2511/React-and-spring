import AddEmployeeComponent from "./commponent/AddEmployeeComponent";
import Employee from "./commponent/Employee";
import { FooterCommponent } from "./commponent/FooterCommponent";
import { HeaderComponent } from "./commponent/HeaderComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Employee}></Route>
            <Route path="/employees" component={Employee}></Route>
            <Route
              path="/add-employee"
              component={AddEmployeeComponent}
            ></Route>
            <Route
              path="/edit-employee/:id"
              component={AddEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        <FooterCommponent />
      </Router>
    </div>
  );
}

export default App;

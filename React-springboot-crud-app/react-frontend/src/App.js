import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponests from './components/HeaderComponests';
import FooterComponests from './components/FooterComponests';
import CreateEmployeeComponents from './components/CreateEmployeeComponents';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
     
     
      <HeaderComponests />
    <div className="container">
          <Switch>  {/*라우터 설정 */}
              <Route path = "/" exact component={ListEmployeeComponents}></Route>
              <Route path = "/employees" component={ListEmployeeComponents}></Route>
              <Route path = "/add-employee" component={CreateEmployeeComponents}></Route>
              <Route path = "/update-employee/:id" component={UpdateEmployeeComponent}></Route> {/**:id는 변수 */}
            
          </Switch>
        </div>
          <FooterComponests/>
    </Router>
  </div>  
  );
}

export default App;

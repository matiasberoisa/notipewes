import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  const title = 'EL NOTIPEEWEES';
    
  return(
  <Router>
    <div className="App">
      <h1 style={{
        backgroundColor : 'white',
        borderRadius : '10px',
        width : '265px',
      }}>{ title }</h1>
      <Navbar></Navbar>
      <div className="content">
      <Switch>
        <Route  exact path='/'> 
        <Home></Home>
        </Route>
        <Route  path='/create'>
        <Create></Create>
        </Route>
        <Route  path='/blogs/:id'>
        <BlogDetails></BlogDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
        </div>
    </div>
  </Router>
  );
}
// se usa el exact path para cuando se use el route de /create no sea la misma pestaña, si no que sea exactamente http://localhost:3000/
export default App;
// en route path se vincula con la id del blog details para cargar los blogs
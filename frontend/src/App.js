import {BrowserRouter,Route} from 'react-router-dom' 
import Navbar from './components/Navbar';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
import Login from './pages/Login';
import LogOut from './pages/LogOut';
import Register from './pages/Register';
import Task from './pages/Task';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route path="/" exact component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/home" component={Home}/>
    <Route path="/task/:id?" component={Task}/>
    <Route path="/add-task" component={AddTask}/>
    <Route path="/edit-task/:id?" component={EditTask}/>
    <Route path="/logout" component={LogOut}/>
    <Route path="/task-detail/:id?" component={TaskDetail}/>
       
    </BrowserRouter>
  );
}

export default App;

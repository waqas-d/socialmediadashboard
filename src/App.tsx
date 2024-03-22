import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent';



function App() {
  return (
    <BrowserRouter>
     <DashboardComponent/>
    </BrowserRouter>
    
  )
}

export default App;

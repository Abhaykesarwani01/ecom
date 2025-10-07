import './App.css';
import CustomerRouters from './Routers/CustomerRouters';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>} />
      </Routes>
    </div>
  );
}

export default App;

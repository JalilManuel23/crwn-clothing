import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

import Home from "./routes/home/home.component";
import Authetication from './routes/sign-in/authetication.component';

const Shop = () => {
  return <h1>Shop page</h1>
}

const App = () => {
    return(
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={ <Home/> } />
          <Route path='shop' element={ <Shop/> } />
          <Route path='auth' element={ <Authetication/> } />
        </Route>
      </Routes>
    );
}

export default App;
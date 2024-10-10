import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AddExpense from './Pages/AddExpense';
import MyExpense from './Pages/MyExpense';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/myExpense' element={<MyExpense/>}/>
            <Route path='/addExpense' element={<AddExpense/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

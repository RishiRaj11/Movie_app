import React,{useContext} from 'react'
import Header from './components/header/Header';
import DataProvider from './components/context/DataProvider';


const App = () => {

  return (
    <DataProvider>
      <Header />
      
    </DataProvider>
  )
}

export default App;
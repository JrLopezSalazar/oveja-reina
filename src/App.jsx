
import './App.css'

import ProductCard from './components/ProductCard'
import CategoryProductCards from './components/CategoryProductCards'
import Banner from './components/Banner'
import NavBottom from './components/NavBottom'

//import Navbar from './components/Navbar'


function App() {
  

  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <CategoryProductCards />
      <ProductCard />
      <NavBottom />
    </>
  )
}

export default App

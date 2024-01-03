

import './App.css'
import NavBar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CategoryProductCards from './components/CategoryProductCards'
import Banner from './components/Banner'
import NavBottom from './components/NavBottom'


function App() {
  

  return (
    <>
      <NavBar />
      <Banner />
      <CategoryProductCards />
      <ProductCard />
      <NavBottom />
    </>
  )
}

export default App

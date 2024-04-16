import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'
import Boxes from './components/Boxes'
import Testimonoals from './components/Testimonoals'
import AddNewLinstingPage from './components/AddNewLinstingPage'
import CommunityComponent from './components/CommunityComponent'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <HeroComponent />
      <Boxes />
      <AddNewLinstingPage />
      <Testimonoals /> */}
      <CommunityComponent />
      <Footer />
    </>
  )
}
export default App

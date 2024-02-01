import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
function App(){
  let component
  switch(window.location.pathname){
    case "/":
      component=<Home/>
      break
    case "/pricing":
      component=<Pricing></Pricing>
      break
    case "/about":
      component=<About></About>
      break
  }
  return (
    <>
    <Navbar/>
    {component}
    </>)
}
export default App;

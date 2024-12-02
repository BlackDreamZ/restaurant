
import './App.css'
import {RestaurantMainPage} from "./pages/RestaurantMainPage/component.jsx";

export const App = ({restaurants}) => {
  return (
    <>
      <RestaurantMainPage restaurants={restaurants}/>
    </>
  )
}

export default App;

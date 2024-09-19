import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './Navbar';
import FirstCover from './FirstCover';
import TextFirst from './TextFirst';
import ImageFirst from './ImageFirst';
import iceCream from "./images/ice-cream.png"
import strawberry from "./images/strawberry.jpg"
import punchie1 from "./images/punchie1.jpg"
function App() {
 

  return (
    <>
    <Navbar/>
    <FirstCover/>
    <ImageFirst
    title={"The Original Strawberry"}
    paragraph={" Refreshing and tangy, Ghana's strawberry FanYogo offers a burst of fruity goodness in every sip. Perfect for cooling down on asunny day, it's a sweet treat for any occasion."}
    iceCreamImage={iceCream}
    productImage={strawberry}
    />
    <TextFirst 
    title={"Punchie Peach"}
    iceCreamImage={iceCream}
    paragraph={"The all-new Punchie Peach delivers a smooth and vibrant peach flavor. Cool down with this creamy, fruity delight and savor a taste of summer."}
    productImage={punchie1}/>

    </>
  )
}

export default App

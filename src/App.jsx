import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './Navbar';
import FirstCover from './FirstCover';
import TextFirst from './TextFirst';
import ImageFirst from './ImageFirst';
import iceCream from "./images/ice-cream.png"
import strawberry from "./images/strawberry.jpg"
import punchie1 from "./images/punchie1.jpg"
import fanArt from "./images/fanart.jpg"
import banana2 from "./images/banana2.jpg"
import pPunchie from "./images/ppunchie.jpg"

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

  <ImageFirst
    title={"Mango and Passion Fruit"}
    paragraph={" Introducing the new mango and passion fruit: a tropical blend of sweet mango and tangy passion fruit. Refreshingly exotic, it's perfect for sunny days."}
    iceCreamImage={iceCream}
    productImage={fanArt}
    />

<TextFirst 
    title={"Funky Banana"}
    iceCreamImage={iceCream}
    paragraph={"Meet Funky Banana: a creamy, playful mix of banana with a zesty twist. This smooth and refreshing treat is a must-have for any summer adventure."}
    productImage={banana2}/>

<ImageFirst
    title={"Punchie Peach"}
    paragraph={" Peach FanYogo The all-new Punchie Peach delivers a smooth and vibrant peach flavor. Cool down with this creamy, fruity delightand savor a taste of summer."}
    iceCreamImage={iceCream}
    productImage={pPunchie}
    />
    </>
  )
}

export default App

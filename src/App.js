import BringYour from "./components/bringYour";
import HomeBanner from "./components/homeBanner";
import HowHargon from "./components/howHargon";
import Header from "./components/navbar";
import Testimony from "./components/testimony";
import WhyChoose from "./components/whyChoose";


function App () {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <WhyChoose/>
      <BringYour/>
      <HowHargon/>
      <Testimony/>
    </div>
  )
}

export default App;

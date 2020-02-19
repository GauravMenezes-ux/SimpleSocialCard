import React from 'react';
import 'tachyons';
//import {FlexDiv} from './styledComps/styledComps'
import SocialCard from './components/SocialCard';


function App() {
  return (
    <div style={{minWidth:"1200px", height: "100vh", display: "flex", alignItems: "start", flexWrap: "wrap"}}>
      <SocialCard name="Gaurav Menezes" imageVal="https://robohash.org/gaurav?set=set5&size=100x100"/>
      <SocialCard name="Suresh Pulla K" imageVal="https://robohash.org/suresh?set=set5&size=100x100"/>
      <SocialCard name="Shashwat Gupta" imageVal="https://robohash.org/shashwat?set=set5&size=100x100"/>
      <SocialCard name="Strinath Cholleti" imageVal="https://robohash.org/srinath?set=set5&size=100x100"/>
    </div>
    /*
    <FlexDiv>
      <SocialCard/>
      <SocialCard/>
      <SocialCard/>
      <SocialCard/>
    </FlexDiv>*/
  );
}

export default App;

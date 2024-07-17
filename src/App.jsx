import React from "react";
import Intro from "./componests/Intro";
import Nav from "./componests/Nav";
import Trending from "./componests/Trending";
import Hero from "./componests/Hero";
import Footer from "./componests/footer";
function App() {
  return (
    <>
      
       

        {/* intro */}
              <div className="intro" id="top">
                <Nav/>
                <Intro/>
              </div>
           
          {/*batas intro */}

          {/*trending*/}
             <Trending/> 
          <Hero/>
          <a href="#top" className="btn btn-primary p-2 tombol">Go to top </a>
          <div>       

          
 <Footer/>
  </div>
         
    </>
  );
}

export default App;

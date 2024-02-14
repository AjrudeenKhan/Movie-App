import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router ,Route, Routes,BrowserRouter} from 'react-router-dom';

function App(){
  return(
    <Router>
          <Navbar/>  
          <Routes>
            {/* <Route path='/' Component={Movies}/>  */}
            <Route path='/'  Component={()=>(
              <>
              <Banner  /> 
              <Movies />
              </>
              )}/>   
            <Route path='/favourites' Component={Favourite}/>
           </Routes>
    </Router>

  )
}



// function App() {
//   return (
    
    
//     <Router>
//      <Navbar/>  
//      <Routes>
     
//        <Route path='/' component={Movies}/> 
//        <Route path='/favourites' component={Favourite}/>
//        </Routes>
//        <Router/>
//        );
//       }
      
      {/* //   <BrowserRouter>
      //     <Navbar/>
      //   <Routes>
      //     <Route path="/" element={<Movies />}>
           
      //       <Route path="/favourites" element={<Favourite/>} />
           
      //     </Route>
      //   </Routes>
      // </BrowserRouter> */}
       {/* 
             <Route path='/' excat render={(props)=>(
              <>
              <Banner {...props} /> 
              <Movies {...props}/>
              </>
              )}/>   */}
              {/* <Route path="/" exact render={(props) => (
         <>
           <Banner {... props}/>
           <Movies {... props} />
         </>
       )} /> */}
       
          
             
              {/* <Route path='/' Component={Movies}/> */}
        
            {/* <Banner/>
            <Movies/>  
             <Favourite/>  */}
         
       
       export default App;

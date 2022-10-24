import NavHeader from './components/NavHeader';
import Status from './components/Status';
import Client from './Client';
import Send from './components/Send';


function App() {

 
  return (
  <div className='flex flex-col'>
  <NavHeader/>

 <div className='flex flex-row '>
    <Status/>
    <Send/> 
 </div>

  <div className='pt-32'>
    <Client/>
  </div>

  </div>
  );
}


export default App;


import './App.css';
import Info from './Components/Info/info';
import Main from './Components/main/main';

function App() {
  // let type=''
  // const add=()=>{
  //   type='add';
  // }
  // console.log(1);
  return (
    <div 
      style={{display:'flex'}}
    >
      <Main/>
      {/* <Info
        type={type}
      /> */}
    </div>
  );
}

export default App;

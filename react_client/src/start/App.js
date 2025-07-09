// import logo from './logo.svg';
// import './App.css';
import {Multi} from './study01';
import ShowData from './study02';
import ListUl from './study03';
import Test from './study04';
import StatusImproveMent from './study05';
import { From1 ,Textarea,CheckBoxs,RefDemo} from './study06';
function App() {
  // const content = <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  return (
    <>
    {/* <Multi />  */}
    {/* <ShowData/> */}
    <ListUl/>
    {/* <Test/> */}
    <Test name = "DaPeng"/>
    <StatusImproveMent />
    <From1 />
    <Textarea />
    <CheckBoxs />
    <RefDemo />
    </>
  );
}

export default App;

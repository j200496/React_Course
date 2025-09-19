import logo from './logo.svg';
import './App.css';
import Teacher from './components/Teacher';
import Employee from './components/Employee';
import DataBinding from './components/DataBinding';
import EventBinding from './components/EventBinding';
import UseState from './components/UseState';
import UseStateObj from './components/UseStateObj';
import ConditionalRender from './components/ConditionalRender';
import DinamicCssClass from './components/DinamicCssClass';
import MapOperator from './components/MapOperator';
import GetApi from './components/GetApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
   <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Home' element={<Home></Home>}/>
          <Route path="DataB" element={<DataBinding />} />
          <Route path="EventB" element={<EventBinding />} />
          <Route path="UseState" element={<UseState />} />
          <Route path="UseStateObj" element={<UseStateObj />} />
          <Route path="DinamicCssClass" element={<DinamicCssClass />} />
          <Route path="Conditional" element={<ConditionalRender />} />
          <Route path="MapOperator" element={<MapOperator />} />
          <Route path="GetApi" element={<GetApi />} />
           </Route>
        </Routes>
        </BrowserRouter>
      <br></br>
   {/*<EventBinding></EventBinding>*/}
       {/*<UseState></UseState>*/}
       {/*<UseStateObj></UseStateObj>*/}
       {/*<ConditionalRender></ConditionalRender>*/}
      { /*<DinamicCssClass></DinamicCssClass>*/}
      {/*<MapOperator></MapOperator>*/}
      {/*<GetApi></GetApi>*/}
    </div>

  );
}

export default App;

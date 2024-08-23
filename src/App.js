
import './App.css';
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';

function App() {
  const data=[{
    name:"t-shirt",
    day:"20",
    month:"january",
    year:'2200'

  },
  {
    name:"half-shirt",
    day:"202",
    month:"january2",
    year:'22002'

  }
]
  return (
    <div>
  <Item name={data[0].name}/>
  <ItemDate day={data[0].day} month={data[0].month} year={data[0].year}/>
  <Item name={data[1].name}/>
  <ItemDate day={data[1].day} month={data[1].month} year={data[1].year} />
  <Item/>
  <ItemDate/>
  <Item/>
  <ItemDate/>
  <Item/>
  <ItemDate/>
  
    <div className="App">
    <h2>saurav kumar</h2>
    </div>
    </div>
  
  );
}

export default App;

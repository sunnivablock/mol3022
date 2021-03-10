import { Typography } from '@material-ui/core';
import './App.css';
import dna from './dna_PNG40.png';
import Page from './components/page';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <div style={{display:"flex", flexDirection:"row"}}>
          <img style={{padding:"30px"}} width={100} height={100} src={dna}></img>
          <div style={{padding:"50px"}}>
            <Typography variant="h4">Bio prosjekt</Typography>
          </div>
          <img style={{padding:"30px"}} width={100} height={100} src={dna}></img>
        </div>
        <Page/>        
      </header>
    </div>
  );
}

export default App;

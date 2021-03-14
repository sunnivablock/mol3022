import { Typography } from '@material-ui/core';
import './App.css';
import dna from './dna_PNG40.png';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <div style={{display:"flex", flexDirection:"row"}}>
          {/* <img style={{padding:"30px"}} width={100} height={100} src={dna}></img> */}
          <div style={{paddingBottom:"50px"}}>
            <Typography variant="h4">Transcription Factor Binding Site Generator</Typography>
          </div>
          {/* <img style={{padding:"30px"}} width={100} height={100} src={dna}></img> */}
        </div>
        <Graph/>        
      </header>
    </div>
  );
}

export default App;

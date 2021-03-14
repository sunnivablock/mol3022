import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField, Button } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";
import { calculateMatches, calculatePWM } from "../functionality/calculations";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import { Bar, Chart, Line } from "react-chartjs-2";


function Graph() {
    const [id, setId ] = useState("");
    const [oneMatrix, setOneMatrix ] = useState({});
    const [sequence, setSequence] = useState("");
    const [dnaError, setDNAError]= useState(false);
    const [match, setMatch] =useState();

    const fetchData = (id1) => {
      getMatrix(id1).then(function(result) {
        setOneMatrix(result.pfm)
        return result;
    });
    }
        
    const checkValidDNA = (str) => {
      if (str.match(/^[ACGTacgt]*$/) ){
        setSequence(str)
        setDNAError(false)
      }
      else{
        setDNAError(true)
      }
    }

    return(
      <div className="container">
       <div style={{padding:'25px', display:"flex", flexDirection:"column"}}>
       {/* <p style={{alignSelf:'flex-start', fontSize:'20px'}}> 1.Search for a matrix:</p> */}
        <Typography color='textSecondary' align='left' variant="h6">{"1. Search for a matrix"}</Typography>
          <TextField
            className="DNAInput"
            size="medium"
            variant="outlined"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value)
            }}
            placeholder="Please enter ID. "
          />
          <div style={{padding:'5px'}}></div>
          <Button 
            className= 'button'
            size="small"
            fullWidth={false}
            variant="contained"
            onClick={() => {
              fetchData(id)
            }}
          > 
            Search matrix
          </Button>
          <p style={{alignSelf:'center', fontSize:'12px', color:'#505050'}}> Other valid IDs: PF0017, PF0077</p>
        {/* Må bruke <p> fordi med typography klarte jeg ikke få luft mellom knap og matrisen*/}
           {/* <Typography color='TextSecondary' align='center' variant='caption'>Other valid IDs: PF0017, PF0077</Typography> */}
          {oneMatrix.A &&
            <div className='matrise'>
              <Typography align='left' variant="subtitle1" >{"Position Frequency Matrix for  "+ id +": "}</Typography>
              <Typography align='left'>{"A:  "+ oneMatrix.A.join()}</Typography>
              <Typography align='left'>{"C:  "+ oneMatrix.C.join()}</Typography>
              <Typography align='left'>{"T:  "+ oneMatrix.T.join()}</Typography>
              <Typography align='left'>{"G:  "+ oneMatrix.G.join()}</Typography>
            </div>
          }
         <p/>
          {oneMatrix.A &&
          <div style={{padding: '0px', display:"flex", flexDirection:"column"}}>
             <Typography color='textSecondary' align='left' variant="h6">{"2. Type in a DNA sequence for matching"}</Typography> 
          <TextField 
            className="DNASequence"
            size="medium"
            variant="outlined"
            type="text"
            error={dnaError}
            value={sequence}
            helperText="Only use the letters ACTG" 
            onChange={(e) => {
             checkValidDNA(e.target.value)
            }}
            placeholder="Please enter DNA sequence for analysis (Characters acgt or ACGT)"
          />
            <Button 
            className= 'button'
            size="small"
            fullWidth={false}
            variant="contained"
            onClick={() => {
              let pwm = calculatePWM(oneMatrix)
              setMatch(calculateMatches(pwm, sequence))
            }}
          > 
            Search
          </Button>
          {match &&
          <div className="resultater">
            {/* <Typography>{"We found matches: "+ match + "and transcription factor bindings are most likely from position " + Math.max(match)}</Typography> */}
            <Typography style={{width: 600}}> The graph shows the trancription factor of the different positions on the DNA sequence.
               The X-axis shows the position within the DNA sequence, while the Y-axis display the values of the trancription factors.</Typography>
            <VictoryChart domainPadding={30} theme={VictoryTheme.material}  prependDefaultAxes={true}>
                <VictoryBar
                  alignment="start"
                  style={{ data: { fill: "#ffa500" } }}
                  data={match}
                  width={300}
                  labels= {({ datum }) => datum.y}
                  barRatio={0.4}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                  />
              </VictoryChart>
          </div>
          }
          
          </div>
        }
        </div>
       </div>
    )
}

export default Graph;


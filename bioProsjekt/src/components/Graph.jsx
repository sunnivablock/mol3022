import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField, Button } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";


function Graph() {
    const [id, setId ] = useState("PF0144");
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

    const pwm = (freq, total) => {
      let p = (freq +Math.sqrt(total)*0.25)/(total+(Math.sqrt(total)))
      return Math.log2(p/0.25)
    }

    const calculatePWM = (matrix) => {
      let common= matrix.A[0]+matrix.C[0]+matrix.G[0]+matrix.T[0];
      let ARow=matrix.A.map((element) => pwm(element, common)) 
      let CRow=matrix.C.map((element) => pwm(element, common))
      let GRow=matrix.G.map((element) => pwm(element, common))
      let TRow=matrix.T.map((element) => pwm(element, common))
      const PWM = {"A":ARow, "C": CRow,"G": GRow, "T":TRow}
      /* Klikke av at det under her ikke funke, så la det stå litt til
      let PWM = {};
      for (let [key,value] of Object.entries(matrix)){
        PWM = {...PWM,...{key: (value.map((element) => pwm(element, common)))}}
      }*/
      return PWM
      
    }

    const calculate = (matrix, seq) => {
      const length = matrix.A.length
      const diffLength= (seq.length - length)+1
      if(diffLength>-1){
        let matchingPosititons = Array.apply(0, Array(diffLength))
        for(let i=0; i<diffLength; i++){
          let positionProbability=0;
            for(let j=i; j<length+i; j++ ){
              let currentLetter = sequence.charAt(j).toUpperCase()
              positionProbability += (matrix[currentLetter][j-i]);
            }
        matchingPosititons[i] =positionProbability
      }
      setMatch(matchingPosititons)
    }
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
       <Typography variant="h6">{"1. Search for a matrix"}</Typography>
          <TextField
            className="DNAInput"
            size="medium"
            variant="outlined"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value)
            }}
            placeholder="Please enter ID"
          />
          <Button 
            size="small"
            fullWidth={false}
            variant="contained"
            onClick={() => {
              fetchData(id)
            }}
          > 
            Search matrix
          </Button>
          <Typography>Other valid IDs: PF0017, PF0077</Typography>
          {oneMatrix.A &&
            <div>
              <Typography variant="subtitle1" >{"Position Frequency Matrix for  "+ id +": "}</Typography>
              <Typography>{"A:  "+ oneMatrix.A.join()}</Typography>
              <Typography>{"C:  "+ oneMatrix.C.join()}</Typography>
              <Typography>{"T:  "+ oneMatrix.T.join()}</Typography>
              <Typography>{"G:  "+ oneMatrix.G.join()}</Typography>
            </div>
          }
         <p/>
          {oneMatrix.A &&
          <div>
             <Typography variant="h6">{"2. Type in a DNA sequence for matching"}</Typography>
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
            size="small"
            fullWidth={false}
            variant="contained"
            onClick={() => {
              let pwm1 = calculatePWM(oneMatrix)
              calculate(calculatePWM(oneMatrix), sequence)
            }}
          > 
            Search
          </Button>
          {match &&
            <Typography>{"We found matches: "+ match  }</Typography>
            //<Typography>{"and transcription factor bindings are most likely from position "+ Math.max(match)}</Typography> funker ikke når vi har negative tall :/
          }
          </div>
        }
        </div>
       </div>
    )
}

export default Graph;


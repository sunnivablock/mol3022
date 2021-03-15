import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";
import { calculateMatches, calculatePWM } from "../functionality/calculations";
import Graph from "./Graph"
import DNASequence from "./DNASequence"
import { PFM } from "./PFM";
import FindMatrix from "./FindMatrix";


function Page() {
  const [id, setId ] = useState("");
  const [oneMatrix, setOneMatrix ] = useState({});
  const [sequence, setSequence] = useState("");
  const [dnaError, setDNAError]= useState(false);
  const [match, setMatch] =useState();
  const [shortDNAWarning, setShortWarning] =useState(false);

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

  const checkPossibleMatching = (seq) => {
    if (seq.length<oneMatrix.A.length) {
      setShortWarning(true)
    } else{
      setShortWarning(false)
      let pwm = calculatePWM(oneMatrix)
      setMatch(calculateMatches(pwm, seq))
    }
  }

    return(
      <div className="container">
       <div style={{padding:'25px', display:"flex", flexDirection:"column"}}>
         <FindMatrix 
            setId={setId} 
            fetchData={fetchData} id={id}
          />
          <p/>
          {oneMatrix.A &&
            <div >
              <PFM matrix={oneMatrix} id={id} />
            </div>
          }
          <p/>
          {oneMatrix.A &&
          <div >
            <DNASequence 
              checkPossibleMatching={checkPossibleMatching} 
              checkValidDNA={checkValidDNA} 
              sequence={sequence} 
              dnaError={dnaError}/>
          {shortDNAWarning && 
            <Typography color="error" >The DNA sequence must be longer than {oneMatrix.A.length}</Typography>
          }
          {match &&
            <div className="resultater">
              <Graph match={match}/>
            </div>
          }
          </div>
        }
        </div>
      </div>
    )
}

export default Page;


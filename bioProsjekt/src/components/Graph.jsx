import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField, Button } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";



function Graph() {

    const [id, setId ] = useState("PF0144");
    const [oneMatrix, setOneMatrix ] = useState({});
    const matrix = getMatrix(id);

    const fetchData = () => {
      matrix.then(function(result) {
        setOneMatrix(result.pfm)
        return result;
    });
    }

//Nå må man skrive inn gyldig ID i tekstfeltet, må håndtere at bruker kanskje skriver inn ugyldig ID
// Alt krasjer når man begynner å skrive inn ny id..
/* neste steg blir å bruke dataen fra matrixen til å "d identify the most likely 
transcription factor binding sites in the DNA sequence" */

    return(
      <div className="container">
       <div style={{padding:'25px', display:"flex", flexDirection:"column"}}>
          <TextField
            className="DNAInput"
            size="medium"
            variant="outlined"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value)
            }}
            placeholder="Please enter DNA sequence for analysis (Characters acgt or ACGT)"
          />
          <Button 
            size="small"
            fullWidth={false}
            variant="contained"
            onClick={() => {
              fetchData()
            }}
          > 
            Search
          </Button>
        </div>
        <Typography>Other valid IDs: PF0017, PF0077</Typography>
          <p/>
          <Typography variant="h6">{"Position Weight Matrix for  "+ id +": "}</Typography>
          {oneMatrix.A &&
            <div>
              <Typography>{"A:  "+ oneMatrix.A.join()}</Typography>
              <Typography>{"C:  "+ oneMatrix.C.join()}</Typography>
              <Typography>{"T:  "+ oneMatrix.T.join()}</Typography>
              <Typography>{"G:  "+ oneMatrix.G.join()}</Typography>
            </div>
          }
       </div>
    )
}

export default Graph;


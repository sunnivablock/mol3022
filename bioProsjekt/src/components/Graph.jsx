import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";



const Graph = () => {

    const  [value, setValue] = useState("");

    const magic = (string) => {
      const array = string.split("");
      return array.reverse().join("")
    }
  
    const matrix = getMatrix();
    console.log(matrix)
    return(
       <div className="container">
       {/* text felt brukeren kan bruke. må definere onChange og value */}
       <div style={{paddingTop:'25px'}}>
           <TextField
            className="DNAInput"
            size="medium"
            variant="outlined"
            type="text"
            onChange={(e) => {
              const reversed =magic(e.target.value)
              setValue(reversed)
            }}
            placeholder="Please enter DNA sequence for analysis (Characters acgt or ACGT)"
          />
          </div>
          <p>Her kommer resultatet</p>
          <Typography>{value}</Typography>
       </div>
    )
}

export default Graph;


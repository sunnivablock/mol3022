import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";



function Graph() {

    const  [value, setValue] = useState("");

    const magic = (string) => {
      const array = string.split("");
      return array.reverse().join("")
    }
  
    const matrix = getMatrix();
    //fungerer ikke å consol logge fra denne fila, den venter på promise fra getMatrix()
    console.log('graph', matrix);

    //TODO: Legge inn funksjonskall som henter ut detaljer for en gitt id:
    //const one = getMatrix(matrix.results[0].matrix_id);

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


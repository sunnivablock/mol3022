import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField } from '@material-ui/core';
import {getMatrix} from "../queries/jaspar";



function Graph() {

    const [value, setValue] = useState("");
    const [id, setId ] = useState("hei");

    const magic = (string) => {
      const array = string.split("");
      return array.reverse().join("")
    }
  
    const matrix = getMatrix();


    //TODO: Legge inn funksjonskall som henter ut detaljer for en gitt id:
    //const one = getMatrix(matrix.results[0].matrix_id);

    //For å hente ut informasjonen av er promise, må det kalles på i en funksjon som vist under
    //Henter her bare ut foreløpig id'en til den første i listen
    matrix.then(function(result) {
      console.log("I graph.jsx", result.results[0].matrix_id)
      setId(result.results[0].matrix_id)
      //Husker ikke hvordan alt med state fungerer, verdien må videresendes herifra til state
      return result;
  });
 


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
          <Typography>{id}</Typography>
       </div>
    )
}

export default Graph;


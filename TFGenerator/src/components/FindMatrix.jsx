import React, { useState} from "react";
import "./GraphStyle.css";
import { Typography, TextField, Button } from '@material-ui/core';



export default function FindMatrix({setId, fetchData, id}) {
 const [midId,setMidId] = useState("")
    return (
        <div>
            <Typography color='textSecondary' align='left' variant="h6">1. Search for a matrix</Typography>
          <TextField
            className="DNAInput"
            size="medium"
            fullWidth
            variant="outlined"
            type="text"
            helperText="Valid IDs: PF0017, PF0077, PF0108, PF0113, PF0144, MA0165, MA0206"
            value={id}
            onChange={(e) => {
              setId(e.target.value)
              setMidId(e.target.value)

            }}
            placeholder="Please enter valid ID "
          />
          <div style={{padding:'5px'}}></div>
          <Button 
            className= 'button'
            size="small"
            fullWidth={false}
            variant="contained"
            onClick={() => {
              fetchData(midId)
            }}
          > 
            Search matrix
          </Button>
        </div>
    )
}
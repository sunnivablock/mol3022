import React from "react";
import "./PageStyle.css";
import { Typography, TextField, Button } from '@material-ui/core';


export default function DNASequence({
    checkPossibleMatching, 
    checkValidDNA, 
    dnaError, 
    sequence
}) {
    return (
        <div style={{padding: '0px', display:"flex", flexDirection:"column"}}>
            <Typography color='textSecondary' align='left' variant="h6">2. Type in a DNA sequence for matching</Typography> 
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
                checkPossibleMatching(sequence)
                }}
            > 
                Search
            </Button>
        </div>
    )
}
import React from "react";
import "./GraphStyle.css";
import { Typography} from '@material-ui/core';


export const PFM = ({matrix, id}) => {
    return(
    <div className='matrise'>
        <Typography align='left' variant="subtitle1" >{"Position Frequency Matrix for  "+ id +": "}</Typography>
        <Typography align='left'>{"A:  "+ matrix.A.join()}</Typography>
        <Typography align='left'>{"C:  "+ matrix.C.join()}</Typography>
        <Typography align='left'>{"T:  "+ matrix.T.join()}</Typography>
        <Typography align='left'>{"G:  "+ matrix.G.join()}</Typography>
    </div>
    )}
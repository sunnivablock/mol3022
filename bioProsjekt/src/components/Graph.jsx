import React, {Text} from "react";
import "./GraphStyle.css";

const Graph = () => {

    const value = false;
    const text = "Skriv inn tekst her";

    const onChange = () =>{
        value = !value
      }

    return(
       <div className="container">¨
       {/* text felt brukeren kan bruke. må definere om change og value */}
           <input
            className="DNAText"
            type="text"
            value={text}
            onChange={onChange}
            placeholder="Please enter DNA sequence for analysis (Characters acgt or ACGT)"
          />
          <p>Her kommer resultatet</p>
       </div>
    )
}

export default Graph;


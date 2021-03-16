import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import "./GraphStyle.css";
import { Typography } from '@material-ui/core';

const Graph = (match) => {

    return(
    <div>
      <Typography color='textSecondary'  variant="h6">{"Results"}</Typography>
      <Typography style={{width: 610}}> The graph shows the trancription factor of the different positions on the DNA sequence.
          The X-axis shows the position within the DNA sequence, while the Y-axis displays the values of the trancription factors.</Typography>
      <VictoryChart domainPadding={30} theme={VictoryTheme.material}  prependDefaultAxes={true}>
        <VictoryBar
          alignment="start"
          style={{ data: { fill: "#ffa500" } }}
          data={match.match}
          width={300}
          barRatio={0.4}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          />
        </VictoryChart>
    </div>
    )

}

export default Graph;
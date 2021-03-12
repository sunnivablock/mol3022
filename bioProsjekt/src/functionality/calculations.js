
    export const pwm = (freq, total) => {
        let p = (freq +Math.sqrt(total)*0.25)/(total+(Math.sqrt(total)))
        return Math.log2(p/0.25)
      }
  
      export const calculatePWM = (matrix) => {
        let common= matrix.A[0]+matrix.C[0]+matrix.G[0]+matrix.T[0];
        let ARow=matrix.A.map((element) => pwm(element, common)) 
        let CRow=matrix.C.map((element) => pwm(element, common))
        let GRow=matrix.G.map((element) => pwm(element, common))
        let TRow=matrix.T.map((element) => pwm(element, common))
        const PWM = {"A":ARow, "C": CRow,"G": GRow, "T":TRow}
        /* Klikke av at det under her ikke funke, så la det stå litt til
        let PWM = {};
        for (let [key,value] of Object.entries(matrix)){
          PWM = {...PWM,...{key: (value.map((element) => pwm(element, common)))}}
        }*/
        return PWM
      }
  
      export const calculateMatches = (matrix, seq) => {
        const length = matrix.A.length
        const diffLength= (seq.length - length)+1
        if(diffLength>-1){
          let matchingPosititons = Array.apply(0, Array(diffLength));
          for(let i=0; i<diffLength; i++){
            let positionProbability=0;
              for(let j=i; j<length+i; j++ ){
                let currentLetter = seq.charAt(j).toUpperCase();
                positionProbability += (matrix[currentLetter][j-i]);
              }
          matchingPosititons[i] =positionProbability;
        }
        return matchingPosititons;
      }
    }
       
import axios from 'axios';

// api info: http://jaspar.genereg.net/api/v1/live-api/
const cors = 'https://secret-ocean-49799.herokuapp.com/'
const baseUrl = 'http://jaspar.genereg.net/api/v1/matrix/';


export async function getMatrix(id) {

    const config= { headers: {
        "Accept": "application/json"
      }
    }
   
   let res = await axios.get(cors+baseUrl, config)
    if (id != null){
        res = await axios.get(cors+baseUrl+id, config)
    } 
     console.log('queries', res.data)
    return res.data

}

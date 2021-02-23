import axios from 'axios';

// api info: http://jaspar.genereg.net/api/v1/live-api/

const baseUrl = 'https://secret-ocean-49799.herokuapp.com/http://jaspar.genereg.net/api/v1/matrix';

export async function getMatrix() {

    const config= { headers: {
        "Accept": "application/json"
      }
    }

    let res = await axios.get(baseUrl, config);
    console.log(res.data)
    return res.data

}


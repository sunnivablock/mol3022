import axios from 'axios';

// api info: http://jaspar.genereg.net/api/v1/live-api/

const baseUrl = 'http://jaspar.genereg.net/api/v1/matrix/';

export async function getMatrix() {

    const config= { headers: {
        "Accept": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*'
      }
    }

    let res = await axios.get(baseUrl, config);
    console.log(res.data)
    return res.data

}


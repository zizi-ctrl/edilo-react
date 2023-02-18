import { useEffect } from "react";


// url , data, method, query (boolean)
const useFetch = async (url, data, method, query) => {
    if (method == 'POST') {
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + url, {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(data)
            })
            const result = await response.json()

            return result
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
    }
    else if (method == 'GET' && query) {
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + url + data, {
                "method": "GET"
            })
            const result = await response.json()

            return result
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
    }
    else {
        //console.log(process.env.REACT_APP_BACK_HOST_IP + url)
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + url, {
                "method": "GET",
                "mode": 'cors', // no-cors, *cors, same-origin
                "credentials": "include"
            })
            const result = await response.json()

            return result
        }
        catch (err) {
            console.log(`ERR : ${err}`)
        }
    }
}

export default useFetch
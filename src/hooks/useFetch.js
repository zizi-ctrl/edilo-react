import { useEffect } from "react";

const useFetch = (url, data) => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://3.35.230.139:80" + url, {
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
            alert(`ERR : ${err}`)
        }
    }

}

export default useFetch
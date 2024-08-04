import axios from 'axios'

const baseUrl = "http://localhost:1000/tesla"

export const fetchSales = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    }
    catch (error) {
        console.log(error)

    }
}


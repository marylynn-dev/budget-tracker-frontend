import axios from "axios"

export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:3001/auth/log-in", {
            email,
            password
        });
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}
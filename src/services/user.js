import axios from "axios"
import Swal from 'sweetalert2'

export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:3001/auth/log-in", {
            email,
            password
        });
        return response
    } catch (error) {
        if (error.response) {
            Swal.fire({
                title: error.response.data.error.message, // Using the error message returned from the server
                icon: 'error',
                confirmButtonText: 'Cool',
                confirmButtonColor: '#00cd96'
            })
        } else {
            Swal.fire({
                title: error,
                icon: 'error',
                confirmButtonText: 'Cool',
                confirmButtonColor: '#00cd96'
            });
        }

    }
}

export const getUser = async (token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const res = await axios.get(`http://localhost:3001/auth`, config);
        return res.data.data;
    } catch (err) {
        console.log(err.response);
        throw err; // Rethrow the error to handle it outside of this function if needed
    }
};
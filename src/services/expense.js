import axios from "axios";
import Swal from 'sweetalert2'

// Function to get a specific user's expenses
export const get = async () => {
    try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            throw new Error("Unaothorized! Try logging in Again");
        }

        const res = await axios.get('http://localhost:3001/expense/one-user',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        console.log(res.data.data)
        return res.data.data;
    } catch (err) {
        let errorMessage = "Couldn't get expenses";
        if (err.response) {
            const { status, data } = err.response;
            errorMessage = `${data.message}`; // Use specific error message from response, or provide a default
        } else if (err.request) {
            // Network or request-level error
            errorMessage = 'Network error or request issue';
        } else {
            // Other errors (e.g., missing token)
            errorMessage = err.message;
        }

        Swal.fire({
            title: errorMessage,
            icon: 'error',
            confirmButtonColor: '#00cd96',
        });
    }
}


// Function to add an expense
export const create = async (title, amount, category, date, description) => {
    try {
        const token = localStorage.getItem("accessToken"); // Retrieve the token here
        const res = await axios.post('http://localhost:3001/expense', {
            title,
            amount,
            category,
            date,
            description
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Handle success response with a specific success message (if needed)
        if (res.status === 200) {
            Swal.fire({
                title: 'expense added successfully!',
                icon: 'success',
                confirmButtonColor: '#00cd96',
                timer: 4000,
            });
        }
    } catch (err) {
        let errorMessage = 'Something went wrong';
        if (err.response) {
            const { status, data } = err.response;
            errorMessage = `${data.message}`; // Use specific error message from response, or provide a default
        } else if (err.request) {
            // Network or request-level error
            errorMessage = 'Network error or request issue';
        } else {
            // Other errors (e.g., missing token)
            errorMessage = err.message;
        }

        Swal.fire({
            title: errorMessage,
            icon: 'error',
            confirmButtonColor: '#00cd96',
        });
    }
};


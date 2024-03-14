import axios from "axios";
import Swal from 'sweetalert2'


// Function to create a category
export const create = async (title) => {
    try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            throw new Error("Unaothorized! Try logging in Again");
        }

        const res = await axios.post(
            'http://localhost:3001/category',
            { title },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // Handle success response with a specific success message (if needed)
        if (res.status === 200) {
            Swal.fire({
                title: 'Category added successfully!',
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

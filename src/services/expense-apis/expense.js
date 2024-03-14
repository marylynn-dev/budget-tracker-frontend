import axios from "axios";

// Function to get a specific user's expenses
export const get = async () => {
    try {
        const res = await axios.get('http://localhost:3001/expense/get/65e062d7174b8a67c4dd5e74');
        return res.data.data;
    } catch (err) {
        console.log(err);
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

        // Do something with the response if needed
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

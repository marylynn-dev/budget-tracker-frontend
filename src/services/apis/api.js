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



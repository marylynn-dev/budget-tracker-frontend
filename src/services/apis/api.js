import axios from "axios";

// Function to get a specific user's expenses
export const get = async () => {
    try {
        const res = await axios.get('http://localhost:3001/expense/get/65d859da671955c586278f60');
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}



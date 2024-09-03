import React from "react";
import env from "react-dotenv";
import axios from 'axios'; 


const read = process.env.MENU_APP_TOKEN; 
console.log(read)

export const getCollectionAPI = async () => {
    try {
        // const url = `https://api.buttercms.com/v2/content/randis_project_food_ordering_app/?auth_token=${read}`;
        const url = `https://cors-anywhere.herokuapp.com/https://api.buttercms.com/v2/content/randis_project_food_ordering_app/?auth_token=${read}`;
        const response = await axios.get(url);

        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);

        throw error;
    }
};
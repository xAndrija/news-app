/* eslint-disable no-undef */
import axios from "axios";

export default async function handler(req, res) {
    const apiKey = process.env.NEWS_API_KEY; // ⚠️ BEZ VITE_

    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines",
            {
                params: {
                    country: "us",
                    apiKey: apiKey,
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error.response?.data || error.message);

        res.status(500).json({
            error: "Failed to fetch news",
        });
    }
}
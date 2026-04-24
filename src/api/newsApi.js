
import axios from "axios";

const API_URL = "https://newsapi.org/v2/top-headlines";

export const getNews = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
        const response = await axios.get(API_URL, {
            params: {
                country: "us",
                apiKey: apiKey
            }
        });

        if (response.data.status !== "ok") {
            throw new Error(response.data.message || "API Error");
        }

        return response.data.articles;
    }
    catch (error) {
        console.error("API error:", error);

        if (error.response) {
            throw new Error(`Server error: ${error.response.status}`);
        }

        throw new Error("Something went wrong")
    }
}
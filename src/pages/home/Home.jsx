
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import NewsList from "../../components/NewsList";
import { getNews } from "../../../api/newsApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextValue";
import { useCallback } from "react";

function Home() {

    const [newsArray, setNewsArray] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user } = useContext(AuthContext);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {

        const fetchNews = async () => {

            try {
                console.log('dal ulazim ovde')
                setLoading(true)
                const articles = await getNews();
                setNewsArray(articles);
                setFilteredNews(articles);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();

    }, []);

    const handleSearch = useCallback((value) => {
        if (!user) return;

        if (!value.trim()) {
            setFilteredNews(newsArray);
            return;
        }

        if (value.length < 3) {
            setFilteredNews(newsArray);
            return;
        }
        const filtered = newsArray.filter((item) =>
            item.title?.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredNews(filtered);
    }, [newsArray, user]);

    useEffect(() => {
        const delay = setTimeout(() => {
            handleSearch(searchText);
        }, 500);

        return () => clearTimeout(delay);
    }, [searchText, handleSearch]);



    return (
        <div className="main">
            <Header />
            <div className="home-screen">
                <h1>Headlines</h1>

                {user && (
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="search-input"
                        />

                        <button
                            className="search-btn"
                            onClick={() => handleSearch(searchText)}
                        >
                            🔍
                        </button>
                    </div>
                )}


                {loading && <p>Loading...</p>}

                {error && <p>Error: {error}</p>}

                {!loading && !error && (
                    <div className="cards-grid">
                        <NewsList newsArray={filteredNews} />
                    </div>
                )}


            </div>

            <Footer />
        </div>
    )
}

export default Home
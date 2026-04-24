import { useParams, useNavigate } from "react-router-dom";

function Article() {
    const { id } = useParams();
    const navigate = useNavigate();

    const savedNews = JSON.parse(localStorage.getItem("news"));
    const article = savedNews ? savedNews[id] : null;

    if (!article) return <p>No article</p>;

    return (
        <div style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: 40,
            fontFamily: "Arial, sans-serif"
        }}>

            <button onClick={() => navigate(-1)}>
                ⬅ Back
            </button>

            <h1 style={{ marginTop: 20 }}>
                {article.title}
            </h1>

            <p style={{ color: "gray" }}>
                {article.source?.name} •{" "}
                {new Date(article.publishedAt).toLocaleDateString()}
            </p>

            {article.urlToImage && (
                <img
                    src={article.urlToImage}
                    style={{
                        width: "100%",
                        borderRadius: 10,
                        margin: "20px 0"
                    }}
                />
            )}

            <p style={{ fontSize: 18 }}>
                {article.description}
            </p>

            <p style={{
                lineHeight: 1.7,
                marginTop: 20
            }}>
                {article.content
                    ? article.content.replace(/\[\+\d+ chars\]/, "")
                    : "No additional content available."}
            </p>

            <a href={article.url} target="_blank">
                Read full article →
            </a>
        </div>
    );
}

export default Article;
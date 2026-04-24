
import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ news, index }) {
    const navigate = useNavigate();
    const { title, description, urlToImage, publishedAt } = news;

    return (
        <div className="card"
            onClick={() => navigate(`/article/${index}`)}
            style={{
                background: "white",
                fontFamily: "Georgia, 'Times New Roman', serif",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                padding: "15px",
                margin: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            }}>

            {urlToImage && (
                <img
                    src={urlToImage}
                    alt={title}
                    style={{
                        width: "100%",
                        height: 260,
                        objectFit: "cover",
                        borderRadius: 8,
                        marginBottom: 10
                    }}
                />
            )}

            <h2 style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10
            }}>
                {title}
            </h2>

            <p style={{
                fontSize: 12,
                color: "#555",
                marginBottom: 10
            }}>
                {description}
            </p>

            <p style={{
                fontSize: 10,
                color: "black",
                alignSelf: "flex-end"
            }}>
                {new Date(publishedAt).toLocaleDateString()}
            </p>
        </div>
    );
}

export default Card;
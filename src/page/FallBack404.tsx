import React from "react";
import { Link } from "react-router-dom";

const FallBack404: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2",
      textAlign: "center" as const,
      padding: "20px",
    },
    title: {
      fontSize: "96px",
      color: "#ff6f61",
      marginBottom: "20px",
    },
    message: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "30px",
    },
    link: {
      fontSize: "18px",
      color: "#007bff",
      textDecoration: "none",
      border: "1px solid #007bff",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "#007bff",
      color: "white",
    },
  };

  //not foun page
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/legacy-data-digitilization"
        style={styles.link}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor =
            styles.linkHover.backgroundColor!;
          e.currentTarget.style.color = styles.linkHover.color!;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = styles.link.color!;
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default FallBack404;

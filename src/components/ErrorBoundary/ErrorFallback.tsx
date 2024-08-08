import React from "react";

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  const styles = {
    container: {
      padding: "20px",
      borderRadius: "5px",
      backgroundColor: "#d1ecf1",
      color: "#0c5460",
      border: "1px solid #bee5eb",
      maxWidth: "400px",
      margin: "50px auto",
      textAlign: "center",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#bee5eb",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      color: "#0c5460",
      fontWeight: "bold",
    },
    heading: {
      marginBottom: "10px",
    },
  };

  return (
    <div role="alert" style={styles.container}>
      <h2 style={styles.heading}>Something went wrong:</h2>
      <button style={styles.button} onClick={reloadPage}>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;

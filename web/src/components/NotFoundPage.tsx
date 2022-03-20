import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
        <h1>Page Not Found</h1>
        <Link to="/">Go back to Home page </Link>
        </>
    );
}

export default NotFoundPage;

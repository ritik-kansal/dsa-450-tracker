import React from "react";

export default function Loader() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: "50vh"}}>
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

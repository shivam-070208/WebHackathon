import React from "react";

const Status = () => {
    return (
        <div style={{display:"flex", gap : "30px", alignItems:"center"}}>
            <div>Status</div>
            <div style={{
                border: "1px solid black",
                borderRadius: "30px",
                padding: "14px 28px 14px 28px",
                display: "flex",
                backgroundColor:"#78463c",
                color:"white"
            }}>
                Complete
            </div>
            <div style={{
                border: "1px solid black",
                borderRadius: "30px",
                padding: "14px 28px 14px 28px",
                display: "flex",
            }}>Estimate</div>
        </div>
    );
};

export default Status;

import React from "react";
import Status from "./status";
import Type from "./type";
import FilterBy from "./filterBy";

const C1 = () => {
    return (
        <div style={{display: "flex", gap: "20px", flexDirection: "column", paddingLeft: "100px"}}>
            <FilterBy />
            <Type />
            <Status />
        </div>
    );
};

export default C1;

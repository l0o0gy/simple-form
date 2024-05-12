import React from "react";
function TextAreaFiled({label, value, onChange}){
    return (
        <div className="inputFileld">
            <label>{label}</label>
            <textarea
            value={value}
            onChange={onChange}
            >
            </textarea>
        </div>
    )
    };
    export default TextAreaFiled ;
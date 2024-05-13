import React from "react";
function TextAreaFiled({label, value, onChange}){
    return (
        <div className="TextAreaFiled">
            <label>{label}</label><br/>
            <textarea
            value={value}
            onChange={onChange}
            >
            </textarea>
        </div>
    )
    };
    export default TextAreaFiled ;
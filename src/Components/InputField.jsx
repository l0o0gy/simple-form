function InputFileld({label, type , value,onChange}){
    return (
        <div className="inputFileld">
            <label>{label}</label>
            <input
            type={type}
            value={value}
            onChange={onChange}
            />
        </div>
    )
    };
    export default InputFileld ;
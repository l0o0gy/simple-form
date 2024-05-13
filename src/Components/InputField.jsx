function InputFileld({label, type , value,onChange}){
    return (
        <div className="inputFileld">
            <label>{label}</label><br/>
            <input
            type={type}
            value={value}
            onChange={onChange}
            required
            />
        </div>
    )
    };
    export default InputFileld ;
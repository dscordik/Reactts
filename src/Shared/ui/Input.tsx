interface Inp {
    otherProps:unknown
}

const Input = (props:Inp) => {
    const { ...otherProps }=props;
    return (
        <input {...otherProps}/>
    );
};

export default Input;
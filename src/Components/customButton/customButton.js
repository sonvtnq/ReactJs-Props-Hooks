import './customButton.css';

const CustomButton = props=>{
    const _Function=()=>{
        props.onClickButton()
    }
    return (
        <>
            <button 
                className={`button ${props.color ? 'btn-' + props.color : ''} ${props.view ? 'd-none' : ''}`}
                onClick={_Function}
            >
                {props.content}
            </button>
        </>
    )
}

export default CustomButton
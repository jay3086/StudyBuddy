import "../styleComponents/button.css"

const Button = ({btn_text}) => {
    return (
        <button className="btn">{ btn_text }</button>
    )
}

export default Button;
import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} onClick={onClick} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    text: "Add Task",
    color: "steelblue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
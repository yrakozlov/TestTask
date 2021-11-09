import classNames from "classnames";
import "./style.scss"

const Circle = ({color}) => {return (<span className={classNames("circle", {[`circle--${color}`]:color})}></span>)}

export default Circle 
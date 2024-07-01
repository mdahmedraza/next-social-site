
import classes from './Border.module.css';

const Border=(props)=>{
    return(
        <div className={classes.border_header}>
            <div className={classes.border_text}>{props.title}</div>
            <div className={classes.border_border}></div>
        </div>
    )
}
export default Border;
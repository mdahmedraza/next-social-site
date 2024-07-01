import classes from './CategorizedIn.module.css';

const CategorizedIn=()=>{
    return(
        <div className={classes.c_wrapper}>
            <div className={classes.c_title}>Categorized in:</div>
            <div className={classes.c_content}>
                <button><span>#</span>Music</button>
                <button><span>#</span>Technology</button>
                <button><span>#</span>Travel</button>
            </div>
            <div className={classes.c_tag}>
                <div className={classes.c_tag_first}>Tagged in: </div>
                <div className={classes.c_tag_last}>Country, </div>
                <div className={classes.c_tag_last}>Image</div>
            </div>
            <div className={classes.c_border_bottom}></div>
        </div>
    )
}
export default CategorizedIn;
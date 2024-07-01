
import classes from './Subscribe.module.css';
import Media from '../media/Media';

const Subscribe=()=>{
    return(
        <div className={classes.sub_wrapper}>
            <div className={classes.sub_title}>Subscribe to <span>M</span>aktub</div>
            <div className={classes.sub_para}>Get the latest posts delivered right to your email.</div>
            <div className={classes.sub_form}>
                <input type="text" placeholder="Enter your email address" />
                <button>Submit</button>
            </div>
            <Media className={classes.margin_bottom} />
        </div>
    )
}
export default Subscribe;
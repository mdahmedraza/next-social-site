
import classes from './Advertising.module.css';
import Border from '../border/Border';

const Advertising=()=>{
    return(
        <div className={classes.ad_wrapper}>
            <Border title="Advertising" />
            <div className={classes.ad_border}>
                <div className={classes.ad_box}>
                    <div>Advertising</div>
                    <div>Area</div>
                </div>
            </div>
        </div>
        
    )
}
export default Advertising;
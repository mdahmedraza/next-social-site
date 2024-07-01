import classes from './Cloud.module.css';
import Border from '../border/Border';

const Cloud=()=>{
    return(
        <div className={classes.tag_wrapper}>
            <Border title="Tag Cloud" />
            <div>
                <div className={classes.tags}>
                    <div><span>#</span> Health</div>
                    <div><span>#</span> Lifestyle</div>
                    <div><span>#</span> Music</div>
                </div>
                <div className={classes.tags}>
                    <div><span>#</span> Technology</div>
                    <div><span>#</span> Travel</div>
                    <div><span>#</span> video</div>
                </div>
            </div>
        </div>
    )
}
export default Cloud;
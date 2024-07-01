
import classes from './Comment.module.css';
import Image from 'next/image';
import author from '../../images/author.png'
import Border from '../border/Border';

const Comment=()=>{
    return(
        <div className={classes.co_wrapper}>
            <Border title="One Comment" />
            <div className={classes.co_about}>
                <div className={classes.co_left}>
                    <Image className={classes.co_img} src={author} alt="author" />
                </div>
                <div className={classes.co_right}>
                    <div className={classes.co_abouts}><span>Jonathan Doe</span> on June 15, 2021</div>
                    <div className={classes.co_para}>
                        There is no universally accepted defination of a mountain. Elevation, volume, relief, steepness, spacing and continuity have been used as criteria for defining a mountain.
                    </div>
                    <button className={classes.btn}>Reply</button>
                </div>
            </div>
            <Border title="Leave One Reply" />
            <form className={classes.f_wrapper}>
                <input className={classes.inputs} type="text" placeholder="comment" />
                <input className={classes.inputs} type="text" placeholder='Name' />
                <input className={classes.inputs} type="text" placeholder="Email" />
                <input className={classes.inputs} type="text" placeholder="Website" />
                <div className={classes.checkbox}>
                    <input type="checkbox" />
                    <span>Save my name, email, and website in this browser for the next time I comment.</span>
                </div>
                <button className={classes.btn}>Post Comment</button>
            </form>
        </div>
    )
}
export default Comment;
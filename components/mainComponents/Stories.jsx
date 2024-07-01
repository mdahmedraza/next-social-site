
import classes from './Stories.module.css';
import tree from '../../images/tree.png'
import Image from 'next/image';
import Border from '../border/Border';

const Stories=()=>{
    return(
        <div className={classes.st_wrapper}>
            <Border title="Other Stories" />
            <div className={classes.st_parent}>
                <div className={classes.st_child}>
                    <Image className={classes.st_img} src={tree} alt="tree" />
                    <div className={classes.st_about}>
                        <div>The Spectacle before us was indeed sublime</div>
                        <label>July 26, 2019</label>
                    </div>
                </div>
                <div className={classes.st_child}></div>
            </div>
        </div>
    )
}
export default Stories;
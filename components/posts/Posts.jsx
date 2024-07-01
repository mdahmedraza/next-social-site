
import classes from './Posts.module.css'
import Border from '../border/Border';
import tree from '../../images/tree.png';
import flower from '../../images/girl-flower.png';
import enviroment from '../../images/enviroment.png';
import dog from '../../images/dog.png';
import Image from 'next/image';


const Posts=()=>{
    return(
        <div className={classes.re_wrapper}>
            <Border title="Recent Post" />
            <div className={classes.re_parent}>
                <div>
                    <Image className={classes.re_img} src={tree} alt="tree" />
                    <div className={classes.re_about}>
                        <div>The Spectacle before us was indeed sublime</div>
                        <label>July 26, 2019</label>
                    </div>
                </div>
                <div>
                    <Image className={classes.re_img} src={flower} alt="tree" />
                    <div className={classes.re_about}>
                        <div>Musical improvisation is the spontaneous music</div>
                        <label>July 26, 2019</label>
                    </div>
                </div>
            </div>
            <div className={classes.re_parent}>
                <div>
                    <Image className={classes.re_img} src={enviroment} alt="tree" />
                    <div className={classes.re_about}>
                        <div>The meaning of healts has evolved over time</div>
                        <label>July 26, 2019</label>
                    </div>
                </div>
                <div>
                    <Image className={classes.re_img} src={dog} alt="tree" />
                    <div className={classes.re_about}>
                        <div>a small dog named Duden flows by their flows by their place</div>
                        <label>July 26, 2019</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Posts;
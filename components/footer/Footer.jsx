
import classes from './Footer.module.css';
import Posts from '../posts/Posts';
import Cloud from '../cloud/Cloud';
import Social from '../social/Social';
import About from '../about/About';
import Border from '../border/Border';

const Footer=()=>{
    return(
        <div className={classes.footer}>
            <div className={classes.f_wrapper}>
                <div className={classes.f_content}>
                    <Posts />
                </div>
                <div className={classes.f_content}>
                    <Cloud />
                </div>
                <div className={classes.f_content}>
                    <Social />
                </div>
                <div className={classes.f_contents}>
                    <Border title="About" />
                    <About />
                </div>
                
            </div>
            <div className={classes.f_header}><span>M</span>akbub</div>
            <div className={classes.f_para}>Published with <span>WordPress</span> & <span>EstudioPatagon</span></div>
        </div>
    )
}
export default Footer;
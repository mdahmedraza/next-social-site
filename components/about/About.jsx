
import classes from './About.module.css';
import Image from 'next/image';
import twitter from '../../images/twitterr.png';
import facebook from '../../images/facebook.png';
import world from '../../images/world.png'
import author from '../../images/author.png';

const About=(props)=>{
    return(
        <div className={`${classes.au_wrapper} ${props.className}`}>
            {props.children}
            <div className={classes.au_detail}>
                <Image className={classes.author_img} src={author} alt="author" />
                <div className={classes.au_about}>
                    <div>Jonathan Doe</div>
                    <span>Collaborator & Editor</span>
                </div>
            </div>
            <div className={classes.au_para}>Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</div>
            <div className={classes.au_footer}>
                <Image className={classes.au_logo} src={twitter} alt="twitter" />
                <Image className={classes.au_logo} src={facebook} alt="facebook" />
                <Image className={classes.au_logo} src={world} alt="world" />
            </div>
        </div>
    )
}
export default About;
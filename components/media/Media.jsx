import Image from 'next/image';
import classes from './Media.module.css';
import facebook from '../../images/facebook.png';
import instagram from '../../images/insta.png';
import twitter from '../../images/twitter.png';
import wifi from '../../images/wifi.png';

const Media=(props)=>{
    return(
        <div className={`${classes.media_wrapper} ${props.className}`}>
            {props.children}
            <Image className={classes.image} src={facebook} alt="facebook" />
            <Image className={classes.image} src={instagram} alt="instagram" />
            <Image className={classes.image} src={twitter} alt="twitter" />
            <Image className={classes.image} src={wifi} alt="wifi" />
        </div>
    )
}
export default Media;
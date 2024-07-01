
import classes from './Social.module.css';
import Border from '../border/Border';
import Image from 'next/image';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import insta from '../../images/insta.png';
import wifi from '../../images/wifi.png';

const Social=()=>{
    return(
        <div className={classes.social_wrapper}>
            <Border title="Social" />
            <div className={classes.social_components}>
                <div className={classes.twitter_components}>
                    <Image className={classes.img} src={twitter} alt="twitter" />
                </div>
                <div className={classes.facebook_components}>
                    <Image className={classes.img} src={facebook} alt="facebook" />
                </div>
                <div className={classes.insta_components}>
                    <Image className={classes.img} src={insta} alt="insta" />
                </div>
                <div className={classes.wifi_components}>
                    <Image className={classes.img} src={wifi} alt="wifi" />
                </div>
            </div>
        </div>
    )
}
export default Social;
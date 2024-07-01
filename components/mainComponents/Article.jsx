
import classes from './Article.module.css';
import Image from 'next/image';
import fb from '../../images/facebook.png';
import whatsapp from '../../images/whatsapp.png'
import email from '../../images/email.png';
import insta from '../../images/insta.png';
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid'

const Article=()=>{
    return(
        <div className={classes.a_wrapper}>
            <div className={classes.a_first_wrapper}>
                <div className={classes.a_text}>Share Article</div>
                <Image className={classes.a_image} src={fb} alt="fb" />
                <Image className={classes.a_image} src={whatsapp} alt="whatsapp" />
                <Image className={classes.a_image} src={email} alt="email" />
                <Image className={classes.a_image} src={insta} alrt="insta" />
            </div>
            <div className={classes.a_second_wrapper}>
                <label className={classes.input}>localhost:9000/products/productId</label>
                <ClipboardDocumentIcon className={classes.copy} />
            </div>
        </div>
    )
}
export default Article;
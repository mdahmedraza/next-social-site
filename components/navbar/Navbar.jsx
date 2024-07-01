
import classes from './Navbar.module.css';
import Image from 'next/image';
import Media from '../media/Media';
import search from '../../images/search.png';

const Navbar=()=>{
    return(
        <div className={classes.n_wrapper}>
            <div className={classes.n_top}>
                <div className={classes.n_left}>
                    <div className={classes.n_title}><span>M</span>aktub</div>
                </div>
                <div className={classes.n_right}>
                    <Media />
                </div>
            </div>
            <div className={classes.n_bottom}>
                <div className={classes.n_b_left}>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>
                            <select>
                                <option>Header Styles</option>
                                <option>Classec Styles</option>
                                <option>Notice On Top</option>
                                <option>Advertising Area</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option><span>#</span> Lifestyle</option>
                                <option><span>#</span> Music</option>
                                <option><span>#</span> Travel</option>
                                <option><span>#</span> Technology</option>
                            </select>
                        </li>
                        <li>Author</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={classes.n_b_right}>
                    <Image className={classes.image} src={search} alt="search" />
                </div>
            </div>
        </div>
    )
}
export default Navbar;
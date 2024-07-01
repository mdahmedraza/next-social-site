import CategorizedIn from '../mainComponents/CategorizedIn';
import classes from './Main.module.css';
import Image from 'next/image';
import { ChatBubbleBottomCenterIcon, FireIcon } from '@heroicons/react/24/solid'
import hatman from '../../images/men-hat.png';
import girlReading from '../../images/girl-reading.png';
import girlFlower from '../../images/girl-flower.png';
import chillOut from '../../images/girl-relax.png';
import enviroment from '../../images/enviroment.png';
import coma from '../../images/invertedcoma.png';
import Article from '../mainComponents/Article';
import About from '../about/About';
import Comment from '../mainComponents/Comment';
import Related from '../mainComponents/Related';
import Stories from '../mainComponents/Stories';
import Sidebar from '../sidebar/Sidebar';

const Main=()=>{
    return(
        <div className={classes.m_wrapper}>
            <div className={classes.m_left}>
                <div className={classes.banner_img}>
                    <Image className={classes.hatman} src={hatman} alt="hat man" />
                </div>
                <div className={classes.m_content}>
                    <div className={classes.heading}>Far far away, behind the world mountains</div>
                    <div className={classes.para}>August 15, 2019<span> - </span>2 min read <ChatBubbleBottomCenterIcon className={classes.comment} /> 1 <FireIcon className={classes.comment} /> 3223</div>
                    <div className={classes.paragraph}>Far far away, behind the word mountains, far from the countries <span>Vlkalia</span> and <span>Consonantia</span>, there live the blind texts.</div>
                    <div className={classes.paragraph}> Seperated they live in <span>Bookmarksgrove</span> right at the coast fo the Semantics, a large language ocean.</div>
                    <div className={classes.b_paragraph}>A small river named Duden flows by their place and supplies it with the necessary regelialia, it is a <span>paradisematic country</span>, in which roasted parts of sentences fly into your mouth.</div>
                    <Image className={classes.reading_girl} src={girlReading} alt="reading girl" />
                    <div className={classes.paragraph}><span>The Big Oxmox</span> advised her not to do so, because there were thousands of bad Commas, wild Question Mards and devious Semikoli, but the <span>Little Blind Text</span> didn't
                    listen. She packed her sever versalia, put her initial into the belt and made herself on the way.</div>
                    <div className={classes.quotes}>Evet the all-powerful Pointing has no control about the blink texts is is an almaos unorthographic life One day however a small line of blind text by the name of Lorem Ipustm decided to leave for the far World of Grammar.</div>
                    <div className={classes.quotes_related}>
                        <div className={classes.quotes_by}>John doe</div>
                        <Image className={classes.coma} src={coma} alt="inverted-coma" />
                    </div>
                    <div className={classes.paragraph}>She packed her <span>seven versalia</span>, put her initial into the belt and made herself on the way.</div>
                    <div className={classes.paragraph}>When she reached the first hills of the <span>Italic Mountains</span>, she had a last view back on the skyline of her hometown <span>Bookmarksgrove</span>, the headline of Alphabet Village and the subline of her own road, the Line Lane.</div>
                    <div className={classes.three_images}>
                        <Image className={classes.three_images_child} src={girlFlower} alt="flower" />
                        <Image className={classes.three_images_child} src={girlReading} alt="flower" />
                        <Image className={classes.three_images_child} src={hatman} alt="flower" />
                    </div>
                    <Image className={classes.reading_girl} src={chillOut} alt="chill out" />
                    <div className={classes.heading_left}>Little Blind Text</div>
                    <div className={classes.paragraph}>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</div>
                    <div className={classes.paragraph}>The copy warned the Little Blind Text, that where it came from it would have benn rewritter a thoudand times and everything that was left from its origin would be the word "and" and the Little Blind Text Should turn around and turn to its own, safe country.</div>
                    <li className={classes.paragraph}>But nothing the copy said could convince her and so it didn't take long until a few insidious <span>Copy Writeres</span> ambushed her,</li>
                    <li className={classes.paragraph}>Made her drunk with <span>Longe</span> and <span>Parole</span> and dragged her into their agency.</li>
                    <li className={classes.paragraph}>Where they abused her for their projects again and again.</li>
                    <div className={classes.paragraph}>And if she hasn't been rewritter, thne they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                    <Image className={classes.reading_girl} src={enviroment} alt="enviroment" />
                    <div className={classes.heading_left}>Bookmarksgrove</div>
                    <div className={classes.paragraph}>Seperated they live in Bookmardsgrove right at the coast of the Semantics, a large language ocean. A small river <span>named Duden</span> flows by their place and supplies it with the necessary regelialia.</div>
                    <div className={classes.paragraph}>it is a <span>paradisematic country</span>, in which roasted parts of sentences fly into your month.</div>
                    <div className={classes.paragraph}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of <span>Lorem Ipsum</span> decided to leave for the far world of grammar.</div>
                    <div className={classes.paragraph}>The Big Oxmox advided her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made 
                    herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the deadline of alphabet village and the subline.</div>
                    <CategorizedIn />
                    <Article />
                </div>
                <About className={classes.about} />
                <Comment />
                <Related />
                <Stories />
            </div>
            <div className={classes.m_right}>
                <Sidebar />
            </div>
        </div>
    )
}
export default Main;
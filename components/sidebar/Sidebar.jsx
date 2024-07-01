
import Posts from '../posts/Posts';
import Social from '../social/Social';
import Cloud from '../cloud/Cloud';
import Advertising from './Advertising';

const Sidebar=()=>{
    return(
        <div>
            <Posts />
            <Social />
            <Cloud />
            <Advertising />
        </div>
    )
}
export default Sidebar;
import { AiOutlineGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { AiFillMediumSquare } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {

    return(
    
<div className='flex h-24 mt-24 justify-center'>
    <div>
        <a href="" target="_blank" rel="noreferrer noopener">
            <AiOutlineGithub color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />
        </a>
    </div>

    <div>
        <a href="" target="_blank" rel="noreferrer noopener">
            <FaDiscord color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />
        </a>
    </div>

    <div>
        <a href="" target="_blank" rel="noreferrer noopener">
            <AiFillMediumSquare color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />

        </a>
    </div>

    <div>
        <a href="" target="_blank" rel="noreferrer noopener">
            <AiOutlineTwitter color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />
        </a>
    </div>
</div>

)}

export default Footer;
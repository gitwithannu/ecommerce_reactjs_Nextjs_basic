import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from '@mui/material';
import './newsletter.css';

const NewsLetter = () => {
  return (
        <div className='newsLetterBanner'>
            <SendOutlinedIcon/>
            <input type='text' name='email' placeholder='Your emaill address' />
            <Button className='bg-g' >Subscribe</Button>
    </div>
  )
};

export default NewsLetter

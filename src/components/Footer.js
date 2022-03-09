import twitterIcon from '../images/twitter-icon.svg'
import facebookIcon from '../images/facebook-icon.svg'
import instagramIcon from '../images/instagram-icon.svg'
import githubIcon from '../images/github-icon.svg'

export default function Footer() {
  return (
    <>
      <footer>
        <img src={twitterIcon} alt='Twitter Icon'/>
        <img src={facebookIcon} alt='Facebook Icon'/>
        <img src={instagramIcon} alt='Instagram Icon'/>
        <img src={githubIcon} alt='GitHub Icon'/>
      </footer>
    </>
  )
}
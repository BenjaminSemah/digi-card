import mainImage from '../images/mainImage.jpg'
import emailIcon from '../images/email-icon.svg'
import linkedinIcon from '../images/linkedin-icon.svg'

export default function Info() {
  return (
    <>
      <section className='info--section'>
        <img className='mainImage' src={mainImage} alt='Benjamin Semah' width='317px'/>
        <h1>Benjamin Semah</h1>
        <p className='frontend--dev'>Frontend Developer</p>
        <p className='website'>benjaminsemah.io</p>
        <ul className='email--linkedin'>
          <li className='email--btn'>
            <img src={emailIcon}/>
            <p>Email</p>
          </li>
          <li className='linkedin--btn'>
            <img src={linkedinIcon}/>
            <p>LinkedIn</p>
          </li>
        </ul>
      </section>
    </>
  )
}
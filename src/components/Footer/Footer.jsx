import "./Footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return ( 
    <footer>
      <p className="GitLink">
        <a href="https://github.com/Kappexx" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="small" />
        </a>
     
      &nbsp;
      <a href="https://www.linkedin.com/in/giorgi-kapanadze-613023176/" target="_blank" rel="noreferrer">
        <LinkedInIcon fontSize="small" />
      </a>
      
      </p>
      
      <p className="Kappex">Made by kappexx UK 2023.</p>
    </footer>
   );
}
 
export default Footer;
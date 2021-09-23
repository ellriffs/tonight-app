import MainText from '../Assets/tonight-main.png';
import '../styles/landing-page.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h3 className="WhatsOn">WHATS ON..</h3>
      <img className="tonight-text" src={MainText} alt="tonight-logo" />
    </div>
  );
};
export default LandingPage;

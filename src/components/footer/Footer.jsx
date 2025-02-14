import Logo from '../UI/Logo';
import locationImg from '../../images/location.svg';
import callingImg from '../../images/calling.svg';
import messageImg from '../../images/message.svg';
import instaImg from '../../images/instagram.svg';
import facebookImg from '../../images/facebook.svg';
import twitterImg from '../../images/twitter.svg';
import pinterestImg from '../../images/pinterest.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__list">
        <div className="footer__elem">
          <Logo />
        </div>
        <div className="footer__elem">
          <img src={locationImg}></img>
          <span>Dhaka, Bangladesh</span>
        </div>
        <div className="footer__elem">
          <img src={callingImg}></img>
          <a href="tel:0943833399">0943833399</a>
        </div>
        <div className="footer__elem">
          <img src={messageImg}></img>
          <a href="mailto:support@efood.com">support@efood.com</a>
        </div>
        <div className="footer__elem-social">
          <a href="">
            <img src={facebookImg}></img>
          </a>
          <a href="">
            <img src={twitterImg}></img>
          </a>
          <a href="">
            <img src={instaImg}></img>
          </a>
          <a href="">
            <img src={pinterestImg}></img>
          </a>
        </div>
      </div>
      <div className="footer__list">
        <li className="footer__elem footer__elem-title">Service</li>
        <li className="footer__elem">
          <a href="#">How it works</a>
        </li>
        <li className="footer__elem">
          <a href="#">Home delivery</a>
        </li>
        <li className="footer__elem">
          <a href="#">Prducts</a>
        </li>
        <li className="footer__elem">
          <a href="#">Menu</a>
        </li>
      </div>
      <div className="footer__list">
        <li className="footer__elem footer__elem-title">Company</li>
        <li className="footer__elem">
          <a href="#">About Us</a>
        </li>
        <li className="footer__elem">
          <a href="#">News</a>
        </li>
        <li className="footer__elem">
          <a href="#">Our trusted partner</a>
        </li>
        <li className="footer__elem">
          <a href="#">New users FAQ</a>
        </li>
      </div>
      <div className="footer__list">
        <li className="footer__elem footer__elem-title">Supports</li>
        <li className="footer__elem">
          <a href="#">Help center</a>
        </li>
        <li className="footer__elem">
          <a href="#">Feedback</a>
        </li>
        <li className="footer__elem">
          <a href="#">Contact us</a>
        </li>
        <li className="footer__elem">
          <a href="#">Terms conditins</a>
        </li>
      </div>
      <div className="footer__list">
        <li className="footer__elem footer__elem-title">Resources</li>
        <li className="footer__elem">
          <a href="#">Download app</a>
        </li>
        <li className="footer__elem">
          <a href="#">Blog</a>
        </li>
        <li className="footer__elem">
          <a href="#">What’s new</a>
        </li>
        <li className="footer__elem">
          <a href="#">Sitemap</a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;

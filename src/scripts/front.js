import Nav from './components/nav';
import HomeCarousel from './components/homeCarousel';
import HomeHero from './components/homeHero';
import JoinForm from './components/joinForm';
import FormsInputBlock from './components/formsInputBlock';
import ObjectFit from './components/objectFit';

$(document).ready(function () {
  Nav.init();
  HomeCarousel.init();
  HomeHero.init();
  JoinForm.init();
  FormsInputBlock.init();
  ObjectFit.init();
});

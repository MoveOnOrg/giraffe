import Nav from './components/nav';
import Modal from './components/modal';
import Sticky from './components/sticky';

import HomeCarousel from './components/homeCarousel';
import HomeHero from './components/homeHero';
import SignForm from './components/signForm';
import PetitionComments from './components/petitionComments';
import PetitionCard from './components/petitionCard';
import FormsInputBlock from './components/formsInputBlock';

$(document).ready(function () {
  Nav.init();
  HomeCarousel.init();
  HomeHero.init();
  Modal.init();
  Sticky.init();

  SignForm.init();
  PetitionComments.init();
  PetitionCard.init();
  FormsInputBlock.init();
});

import Nav from './components/nav';
import Form from './components/form';
import Modal from './components/modal';
import Sticky from './components/sticky';

import HomeCarousel from './components/homeCarousel';
import HomeHero from './components/homeHero';
import SignForm from './components/signForm';
import PetitionComments from './components/petitionComments';
import PetitionCard from './components/petitionCard';

$(document).ready(function () {
  Nav.init();
  HomeCarousel.init();
  HomeHero.init();
  Form.init();
  Modal.init();
  Sticky.init();

  SignForm.init();
  PetitionComments.init();
  PetitionCard.init();
});

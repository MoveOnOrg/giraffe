import DonateReceipt from './components/donateReceipt';
import DonateShortForm from './components/donateShortForm';
import DonateFullForm from './components/donateFullForm';
import DonateQuickPay from './components/donateQuickPay';
import DonateBoxedForm from './components/donateBoxedForm';
import PriceSelectGroup from './components/priceSelectGroup';

$(document).ready(function () {
  /* NOTE: the donate page logic now lives in:
    ak-template-set/template_components/donate/scripts.html
    so this is parsed out specifically for the demo pages */

    DonateReceipt.init();
    DonateShortForm.init();
    DonateFullForm.init();
    DonateBoxedForm.init();
    DonateQuickPay.init();
    PriceSelectGroup.init();
});

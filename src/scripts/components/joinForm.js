import { entries as getFormEntries } from '../utilities/formData';

class JoinForm {

  constructor( $element) {

    this.$form = $($element);

    this.$name = this.$form.find('[name="name"]');
    this.$zip = this.$form.find('[name="zip"]')
    this.$email = this.$form.find('[name="email"]');
    this.$mobile = this.$form.find('[name="mobile_phone"]');

    this.$page = this.$form.find('[name="page"]');
    this.$posted = this.$form.find('[name="posted"]');
    this.$formName = this.$form.find('[name="form_name"]');
    this.$source = this.$form.find('[name="source"]');
    this.$actionReferrer = this.$form.find('[name="action_referrer"]');
    this.$country = this.$form.find('[name="country"]');

    this.$subscribeSMSConditions = this.$form.find('.subscribe-sms-conditions');
    this.$suppressEmailSubscribe = this.$form.find('[name="suppress_subscribe"]');
    this.$smsTerms = this.$form.find('[name="user_sms_termsandconditions"]');
    this.$smsSubscribe = this.$form.find('[name="action_mobilesubscribe"]');
    this.$robodialTerms = this.$form.find('[name="user_robodial_termsandconditions"]');
    this.$userSmsSubscribe = this.$form.find('[name="user_sms_subscribed"]');

    this.$submit = this.$form.find('[type="submit"]');

    this.$errors = this.$form.find('.errorlist');

    this.formData = {};
    this.bindform();
  }

  bindform() {
    let _this = this;

    this.$form.on('change keyup', function () {
      if (_this.$mobile[0].value.replace(/\D/g,'').length >= 10) {
        _this.$userSmsSubscribe[0].checked = true;
        if (_this.$subscribeSMSConditions[0].className.search("unhide") == -1) {
          _this.$subscribeSMSConditions[0].className += " unhide";
        }
      }
    });

    this.$form.on('submit', function (e) {
      const Mobile = _this.$mobile[0].value.replace(/\D/g, '');
      const Email = _this.$email[0].value;
      const Name = _this.$name[0].value;
      const Zip = _this.$zip[0].value;
      const fields = {Mobile, Email, Name, Zip};

      if (Email === '' && Mobile === '' || Name === '' || Zip === '') {
        e.preventDefault();
        Object.keys(fields).forEach(function(key) { 
          if (fields[key] === '' && key !== "Email") {
            _this.addErrorToList(key);
          }
        });
        return !1;
      }

      if (Mobile && Mobile.length >= 10) {
        if (Email === '') {
          _this.$suppressEmailSubscribe.value = 1;
          _this.$email[0].value = Mobile+'-smssubscriber@example.com';
        }
        _this.$smsTerms[0].value = 'sms_termsandconditions';
        _this.$smsSubscribe[0].value = 'mobilesubscribe';
        _this.$robodialTerms[0].value = 'yes';
      }
    });

  }

  addErrorToList(error) {
    let listItem = document.createElement('li');
    let text = error + " is required";
    if (error === "Email" || error === "Mobile") {
      text = "Email OR mobile opt-in is required";
    }
    listItem.appendChild(document.createTextNode(text));
    this.$errors[0].appendChild(listItem);
  }
}



export default {

  init() {

    let $joinform = $('.join-form');

    $joinform.each(function (index, el) {
      let _form = new JoinForm(el);
    });

  }

}





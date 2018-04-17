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
        _this.$subscribeSMSConditions[0].classList.remove("dimmed");
      }
    });

    this.$form.on('submit', function (e) {
      const Mobile = _this.$mobile[0];
      const Email = _this.$email[0];
      const Name = _this.$name[0];
      const Zip = _this.$zip[0];
      const fields = {Mobile, Email, Name, Zip};

      _this.$errors[0].innerHTML = '';
      Object.keys(fields).forEach(key =>
        fields[key].parentNode.classList.remove("giraffe-has-errors")
      );

      // check for blank required fields
      if (Email.value === '' && Mobile.value.replace(/\D/g, '') === '' || Name.value === '' || Zip.value === '') {
        e.preventDefault();
        Object.keys(fields).forEach(function(key) { 
          if (fields[key].value === '') {
            fields[key].parentNode.classList.add("giraffe-has-errors");
            if (key !== 'Email') {
              if (key === 'Name' || key === 'Zip') {
                _this.addErrorToList(key + ' is required');
              } else {
                _this.addErrorToList('Email OR mobile opt-in is required');
              }
            }
          }
        });
        return false;
      }

      // check for invalid zips
      if (!_this.checkZip(Zip.value)) {
        e.preventDefault();
        Zip.parentNode.classList.add("giraffe-has-errors");
        _this.addErrorToList('Valid ZIP required');
        return false;
      }

      // if mobile exists
      // mobile is valid and email is blank - fill in email and submit
      // mobile is valid and email is valid - submit
      // mobile is valid and email is invalid - error
      // mobile is invalid and email is valid - error
      // mobile is invalid and email is blank or invalid - error

      // if mobile is blank and email exists
      // email is valid - submit
      // email is invalid - error

      if (Mobile.value) {
        if (_this.checkMobile(Mobile.value)) {
          if (Email.value === '') {
            _this.$suppressEmailSubscribe.val('1');
            _this.$email.val(Mobile.value +'-smssubscriber@example.com');
          }
          _this.$smsTerms.val('sms_termsandconditions');
          _this.$smsSubscribe.val('mobilesubscribe');
          _this.$robodialTerms.val('yes');
          
          if (!_this.checkEmail(Email.value)) {
            e.preventDefault();
            Email.parentNode.classList.add("giraffe-has-errors");
            _this.addErrorToList('Invalid email; please correct or remove');
            return false;
          }
        } else /* mobile is invalid */ {
          if (Email.value === '' || !_this.checkEmail(Email.value)) {
            e.preventDefault();
            Mobile.parentNode.classList.add("giraffe-has-errors");
            Email.parentNode.classList.add("giraffe-has-errors");
            _this.addErrorToList('Valid email OR mobile opt-in is required');
            return false;
          } else /* and email is valid */ {
            e.preventDefault();
            Mobile.parentNode.classList.add("giraffe-has-errors");
            _this.addErrorToList('Invalid mobile; please correct or remove');
            return false;
          }
        }
      } else if (Email.value) /* mobile is blank and email exists */ {
        if (!_this.checkEmail(Email.value)) {
          e.preventDefault();
          Mobile.parentNode.classList.add("giraffe-has-errors");
          Email.parentNode.classList.add("giraffe-has-errors");
          _this.addErrorToList('Valid email OR mobile opt-in is required');
          return false;
        }
      }
    });

  }

  addErrorToList(errorText) {
    let listItem = document.createElement('li');
    listItem.classList.add("text-align-center");
    listItem.appendChild(document.createTextNode(errorText));
    this.$errors[0].appendChild(listItem);
  }

  checkZip(value) {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
  }

  checkEmail(value) {
    const re = new RegExp('^\\.\\s@:][^\\s@:]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*$');
    return re.test(value);
  }

  checkMobile(value) {
    return value.replace(/\D/g, '').length >= 10;
  }
};


export default {

  init() {

    let $joinform = $('.join-form');

    $joinform.each(function (index, el) {
      let _form = new JoinForm(el);
    });

  }

}





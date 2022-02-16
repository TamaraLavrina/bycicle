const phoneRegEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const validatePhone = (input) => {
  if(!phoneRegEx.test(input.value)) {
    input.setCustomValidity(
      'Номер телефона должен содержать не менее 7 цифр');
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

const onPhoneInput = (evt) => {
  validatePhone(evt.target);
};

export { onPhoneInput };

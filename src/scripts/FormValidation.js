export default class FormValidation {
  constructor(config, element) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._element = element;
  }

  _showError(input) {
    const error = this._element.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    const error = this._element.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

  _setButtonState(button, isActive) {
    if (isActive) {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputsList = Array.from(this._element.querySelectorAll(this._inputSelector));
    const submitButton = this._element.querySelector(this._submitButtonSelector);
  
      inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setButtonState(submitButton, this._element.checkValidity());
      });
      
    });
  }

  enableValidation() {
    const forms = document.querySelectorAll(this._formSelector);

    forms.forEach((form) => {
      this._setEventListeners();

      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      const submitButton = form.querySelector(this._submitButtonSelector);
      this._setButtonState(submitButton, form.checkValidity());
    })
  }
}

<template>
  <div class="page">
    <header class="header">
      header
    </header>

    <form class="form">
      <p class="form__title">
        О себе
      </p>
      <fieldset class="form-group">
        <input
          id="name"
          type="text"
          name="name"
          class="input"
          autocomplete="off"
          required
          spellcheck="false"
          maxlength="30"
        >
        <label for="name" class="label">
          <span class="label__text">
            Имя
          </span>
        </label>
      </fieldset>

      <fieldset class="form-group">
        <input
          id="name-last"
          type="text"
          name="name-last"
          class="input"
          autocomplete="off"
          required
          spellcheck="false"
          maxlength="30"
        >
        <label for="name-last" class="label">
          <span class="label__text">
            Фамилия
          </span>
        </label>
      </fieldset>

      <fieldset class="form-group">
        <input
          id="patronymic"
          type="text"
          name="patronymic"
          class="input"
          autocomplete="off"
          required
          spellcheck="false"
          maxlength="30"
        >
        <label for="patronymic" class="label">
          <span class="label__text">
            Отчество
          </span>
        </label>
      </fieldset>

      <fieldset class="form-group form-group--gender">
        <div class="wrapper-radio">
          <label class="radio-button radio-button--material">
            <input
              type="radio"
              class="radio-button__input radio-button--material__input"
              name="r"
              checked="checked"
            >
            <div
              class="radio-button__checkmark radio-button--material__checkmark"
            />
            Мужской
          </label>
          <label class="radio-button radio-button--material">
            <input
              type="radio"
              class="radio-button__input radio-button--material__input"
              name="r"
            >
            <div
              class="radio-button__checkmark radio-button--material__checkmark"
            />
            Женский
          </label>
        </div>
        <label for="gender" class="label">
          <span class="label__text">
            Пол
          </span>
        </label>
      </fieldset>

      <fieldset class="form-group">
        <input
          id="DOB"
          v-mask="'##.##.####'"
          type="tel"
          name="DOB"
          class="input"
          autocomplete="off"
          required
          spellcheck="false"
        >
        <label for="DOB" class="label">
          <span class="label__text">
            Дата Рождения
          </span>
        </label>
      </fieldset>

      <p class="dob__text">
        Мы подготовим специальные скидки и бонусы ко дню вашего рождения
      </p>
      <p class="form__title">
        Контакты
      </p>

      <fieldset class="form-group">
        <input
          id="phone"
          v-mask="'+7 (###) ###-##-##'"
          type="tel"
          name="phone"
          class="input"
          autocomplete="off"
          required
          spellcheck="false"
        >
        <label for="phone" class="label">
          <span class="label__text">
            Телефон
          </span>
        </label>
      </fieldset>

      <fieldset class="form-group">
        <svg
          class="Icon Icon-disabled"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
            fill="#D4D4D4"
          />
        </svg>
        <input
          id="email"
          type="text"
          name="email"
          class="input"
          autocomplete="off"
          required
          spellcheck="false"
          value="regeon-93@inbox.ru"
          disabled
        >
        <label for="email" class="label">
          <span class="label__text">
            Email
          </span>
        </label>
      </fieldset>

      <fieldset class="form-group form-group--gender">
        <div class="divider" />
        <label class="checkbox checkbox--material">
          <input
            type="checkbox"
            class="checkbox__input checkbox--material__input"
          >
          <div class="checkbox__checkmark checkbox--material__checkmark" />
          Я подтверждаю, что ознакомился с текстом
          <span class="policy">Политики конфиденциальности</span>
        </label>
      </fieldset>

      <button type="submit">
        Submit
      </button>
      {{ name }}
      {{ error }}
    </form>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'
export default {
  directives: { mask },
  data: () => ({
    name: '',
    error: ''
  }),
  mounted() {
    this.$query('myRepo', {
      number_of_repos: 3
    }).then((response) => {
      this.name = response.data.data.viewer.name
      this.error = response.data.errors
    })
  }
}
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  height: 100%;
  padding: 0 15px;

  &__title {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: #3ec25f;
    margin: 25px 0 10px;
  }
}

.form-group {
  width: 100%;
  height: 54px;
  border: none;
  padding: 0;
  position: relative;
  margin: 0 0 8px;
  overflow: hidden;
}

.form-group--gender {
  overflow: initial;

  & > .label {
    border: none;
  }

  & > .label::after {
    border: none;
  }
}

.label {
  display: inline-block;
  text-align: left;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #bcbcbc;
  font-size: 12px;
  pointer-events: none;
  border-bottom: 1px solid #f2f2f5;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #3ec25f;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  &__text {
    position: absolute;
    bottom: 9px;
    left: 0;
    font-size: 15px;
    transition: all 0.3s ease;
  }
}

.input {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: none;
  padding: 1.3333em 2em 0.266em 0;
  font-size: 15px;
  color: #232323;
  outline: none;
}

.input:focus + .label .label__text,
.input:valid + .label .label__text {
  transform: translateY(-170%);
  color: #3ec25f;
  font-size: 12px;
}

.form-group > .input:disabled {
  color: #bcbcbc;
  background-color: #fff;
}

.input:disabled + .label .label__text {
  transform: translateY(-170%);
  font-size: 12px;
}

// Icon
.Icon {
  position: absolute;
  right: 0;
  bottom: 9px;
}

// For Radio
.wrapper-radio + .label .label__text,
.wrapper-radio + .label .label__text {
  transform: translateY(-170%);
  color: #3ec25f;
  font-size: 12px;
}

.wrapper-radio {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
}

.input:focus + .label::after {
  transform: translateX(0%);
}

//Divider
.divider {
  height: 10px;
}

// DATE
.dob__text {
  font-size: 12px;
  color: #bcbcbc;
}

// Policy
.policy {
  color: #3ec25f;
  text-decoration: underline;
}

.radio-button__input {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  z-index: 1;
  vertical-align: top;
  outline: none;
  width: 100%;
  height: 100%;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.radio-button__input:active,
.radio-button__input:focus {
  outline: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.radio-button {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  bottom: 5px;
  left: 0;
  line-height: 24px;
  text-align: left;
  color: #232323;
  margin-right: 20px;
}
.radio-button__checkmark:before {
  content: '';
  position: absolute;
  border-radius: 100%;
  box-sizing: border-box;
  background-clip: padding-box;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  background: transparent;
  border: none;
  border-radius: var(--checkbox-size);
  left: 0;
}
.radio-button__checkmark {
  box-sizing: border-box;
  background-clip: padding-box;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial',
    'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  position: relative;
  position: relative;
  width: 24px;
  height: 24px;
  background: transparent;
  pointer-events: none;
}
.radio-button__checkmark:after {
  content: '';
  position: absolute;
  top: 7px;
  left: 4px;
  opacity: 0;
  width: 11px;
  height: 4px;
  background: transparent;
  border: 2px solid #0076ff;
  border-top: none;
  border-right: none;
  border-radius: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
:checked + .radio-button__checkmark {
  background: #000000;
  background: rgba(0, 0, 0, 0);
}
:checked + .radio-button__checkmark:after {
  opacity: 1;
}
:checked + .radio-button__checkmark:before {
  background: transparent;
  border: none;
}
:disabled + .radio-button__checkmark {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}

.radio-button--material {
  line-height: 22px;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
}
.radio-button--material__input:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 0 14px #d4d4d4;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #d4d4d4;
  pointer-events: none;
  display: block;
  -webkit-transform: scale3d(0.2, 0.2, 0.2);
  transform: scale3d(0.2, 0.2, 0.2);
  transition: opacity 0.25s ease-out, -webkit-transform 0.1s ease-out;
  transition: opacity 0.25s ease-out, transform 0.1s ease-out;
  transition: opacity 0.25s ease-out, transform 0.1s ease-out,
    -webkit-transform 0.1s ease-out;
}
.radio-button--material__input:checked:before {
  box-shadow: 0 0 0 14px #3ec25f;
  background-color: #3ec25f;
}
.radio-button--material__input:active:before {
  opacity: 0.15;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
.radio-button--material__checkmark {
  width: 20px;
  height: 20px;
  overflow: visible;
}
.radio-button--material__checkmark:before {
  background: transparent;
  border: 2px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: border 0.2s ease;
}
.radio-button--material__checkmark:after {
  transition: background 0.2s ease, -webkit-transform 0.2s ease;
  transition: background 0.2s ease, transform 0.2s ease;
  transition: background 0.2s ease, transform 0.2s ease,
    -webkit-transform 0.2s ease;
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  -webkit-transform: scale(0);
  transform: scale(0);
}
:checked + .radio-button--material__checkmark:before {
  background: transparent;
  border: 2px solid #3ec25f;
}
.radio-button--material__input + .radio-button__checkmark:after {
  background: #d4d4d4;
  opacity: 1;
  -webkit-transform: scale(0);
  transform: scale(0);
}
:checked + .radio-button--material__checkmark:after {
  opacity: 1;
  background: #3ec25f;
  -webkit-transform: scale(1);
  transform: scale(1);
}
:disabled + .radio-button--material__checkmark {
  opacity: 1;
}
:disabled + .radio-button--material__checkmark:after {
  background-color: #afafaf;
  border-color: #afafaf;
}
:disabled + .radio-button--material__checkmark:before {
  border-color: #afafaf;
}

/*~
  name: Checkbox
  category: Checkbox
  elements: ons-input
  markup: |
    <label class="checkbox">
      <input type="checkbox" class="checkbox__input">
      <div class="checkbox__checkmark"></div>
      OFF
    </label>

    <label class="checkbox">
      <input type="checkbox" class="checkbox__input" checked="checked">
      <div class="checkbox__checkmark"></div>
      ON
    </label>

    <label class="checkbox">
      <input type="checkbox" class="checkbox__input" disabled>
      <div class="checkbox__checkmark"></div>
      Disabled
    </label>
*/
.checkbox {
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial',
    'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  color: #bcbcbc;
  text-align: justify;
}
.checkbox__checkmark {
  box-sizing: border-box;
  background-clip: padding-box;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial',
    'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  position: relative;
  height: 22px;
  width: 22px;
  pointer-events: none;
  margin-right: 5px;
}
.checkbox__input,
.checkbox__input:checked {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  z-index: 1;
  vertical-align: top;
  outline: none;
  width: 100%;
  height: 100%;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.checkbox__checkmark:before {
  content: '';
  position: absolute;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 22px;
  height: 22px;
  background: transparent;
  border: 1px solid #c7c7cd;
  border-radius: 22px;
  left: 0;
}
/* checkmark's line */
.checkbox__checkmark:after {
  content: '';
  position: absolute;
  top: 7px;
  left: 5px;
  width: 11px;
  height: 5px;
  background: transparent;
  border: 2px solid #fff;
  border-width: 1px;
  border-top: none;
  border-right: none;
  border-radius: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  opacity: 0;
}
:checked + .checkbox__checkmark:before {
  background: #0076ff;
  border: none;
}
:checked + .checkbox__checkmark:after {
  opacity: 1;
}
:disabled + .checkbox__checkmark {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}
:disabled:active + .checkbox__checkmark:before {
  /* FIXME */
  background: transparent;
}
/*~
  name: No border Checkbox
  category: Checkbox
  elements: ons-input
  markup: |
    <label class="checkbox--noborder">
      <input type="checkbox" class="checkbox__input checkbox--noborder__input">
      <div class="checkbox__checkmark checkbox--noborder__checkmark"></div>
      OFF
    </label>

    <label class="checkbox--noborder">
      <input type="checkbox" class="checkbox__input checkbox--noborder__input" checked="checked">
      <div class="checkbox__checkmark checkbox--noborder__checkmark"></div>
      ON
    </label>

    <label class="checkbox--noborder">
      <input type="checkbox" class="checkbox__input checkbox--noborder__input" disabled checked="checked">
      <div class="checkbox__checkmark checkbox--noborder__checkmark"></div>
      Disabled
    </label>
 */
.checkbox--noborder {
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial',
    'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 22px;
  position: relative;
}
.checkbox--noborder__input {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  z-index: 1;
  vertical-align: top;
  outline: none;
  width: 100%;
  height: 100%;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.checkbox--noborder__checkmark {
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 22px;
  height: 22px;
  background: transparent;
  border: none;
}
.checkbox--noborder__checkmark:before {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  background: transparent;
  border: none;
  border-radius: 22px;
  left: 0;
}
/* checkmark's line */
.checkbox--noborder__checkmark:after {
  content: '';
  position: absolute;
  top: 7px;
  left: 4px;
  opacity: 0;
  width: 11px;
  height: 4px;
  background: transparent;
  border: 2px solid #0076ff;
  border-top: none;
  border-right: none;
  border-radius: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
:checked + .checkbox--noborder__checkmark:before {
  background: transparent;
  border: none;
}
:checked + .checkbox--noborder__checkmark:after {
  opacity: 1;
}
:focus + .checkbox--noborder__checkmark:before {
  border: none;
}
:disabled + .checkbox--noborder__checkmark {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}
:disabled:active + .checkbox--noborder__checkmark:before {
  background: transparent;
  border: none;
}
/*~
  name: Material Checkbox
  category: Checkbox
  elements: ons-input
  markup: |
    <label class="checkbox checkbox--material">
      <input type="checkbox" class="checkbox__input checkbox--material__input">
      <div class="checkbox__checkmark checkbox--material__checkmark"></div>
      OFF
    </label>
    <label class="checkbox checkbox--material">
      <input type="checkbox" class="checkbox__input checkbox--material__input" checked="checked">
      <div class="checkbox__checkmark checkbox--material__checkmark"></div>
      ON
    </label>
    <label class="checkbox checkbox--material">
      <input type="checkbox" class="checkbox__input checkbox--material__input" checked="checked" disabled>
      <div class="checkbox__checkmark checkbox--material__checkmark"></div>
      ON
    </label>
    <label class="checkbox checkbox--material">
      <input type="checkbox" class="checkbox__input checkbox--material__input" disabled>
      <div class="checkbox__checkmark checkbox--material__checkmark"></div>
      Disabled
    </label>
*/
.checkbox--material {
  line-height: 18px;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  overflow: visible;
}
.checkbox--material__checkmark {
  width: 18px;
  height: 40px;
  float: left;
}
.checkbox--material__checkmark:before {
  border-radius: 2px;
  height: 18px;
  width: 18px;
  border: 2px solid #d4d4d4;
  transition: background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s;
  background-color: transparent;
}
:checked + .checkbox--material__checkmark:before {
  border: 2px solid #3ec25f;
  background-color: #3ec25f;
  transition: background-color 0.1s linear, border-color 0.1s linear;
}
.checkbox--material__checkmark:after {
  border-color: #ffffff;
  transition: -webkit-transform 0.2s ease 0;
  transition: transform 0.2s ease 0;
  transition: transform 0.2s ease 0, -webkit-transform 0.2s ease 0;
  width: 10px;
  height: 5px;
  top: 5px;
  left: 4px;
  -webkit-transform: scale(0) rotate(-45deg);
  transform: scale(0) rotate(-45deg);
  border-width: 2px;
}
:checked + .checkbox--material__checkmark:after {
  transition: -webkit-transform 0.2s ease 0.2s;
  transition: transform 0.2s ease 0.2s;
  transition: transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s;
  width: 10px;
  height: 5px;
  top: 5px;
  left: 4px;
  -webkit-transform: scale(1) rotate(-45deg);
  transform: scale(1) rotate(-45deg);
  border-width: 2px;
}
/* active ring effect */
.checkbox--material__input:before {
  content: '';
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  box-shadow: 0 0 0 11px #d4d4d4;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #d4d4d4;
  pointer-events: none;
  display: block;
  -webkit-transform: scale3d(0.2, 0.2, 0.2);
  transform: scale3d(0.2, 0.2, 0.2);
  transition: opacity 0.25s ease-out, -webkit-transform 0.1s ease-out;
  transition: opacity 0.25s ease-out, transform 0.1s ease-out;
  transition: opacity 0.25s ease-out, transform 0.1s ease-out,
    -webkit-transform 0.1s ease-out;
}
.checkbox--material__input:checked:before {
  box-shadow: 0 0 0 11px #3ec25f;
  background-color: #3ec25f;
}
.checkbox--material__input:active:before {
  opacity: 0.15;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
:disabled + .checkbox--material__checkmark {
  opacity: 1;
}
:disabled + .checkbox--material__checkmark:before {
  border-color: #afafaf;
}
:disabled:checked + .checkbox--material__checkmark:before {
  background-color: #afafaf;
}
:disabled:checked + .checkbox--material__checkmark:after {
  border-color: #ffffff;
}
</style>

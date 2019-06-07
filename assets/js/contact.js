const firstName = document.querySelector(`input#first-name`);
const lastName = document.querySelector(`input#last-name`);
const email = document.querySelector(`input#email`);
const subject = document.querySelector(`input#subject`);
const message = document.querySelector(`textarea#message`);
const submit = document.querySelector(`button.contact__button`);

message.addEventListener(`keyup`, () => {
  const filledFirstName = firstName.checkValidity();
  const filledLastName = lastName.checkValidity();
  const filledEmail = email.checkValidity();
  const filledSubject = subject.checkValidity();
  const filledMessage = message.checkValidity();

  if (filledFirstName && filledLastName && filledEmail && filledSubject && filledMessage) {
    submit.classList.remove('disabled');
    submit.classList.add(`active`);
  }
});
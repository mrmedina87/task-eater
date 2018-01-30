( () => {
  class Person {
    constructor(formId) {
      this.personNameValue = '';
      this.thatValue = '';
  
      this.formElem = document.querySelector(`#${formId}`);
      
      this.personNameElem = document.querySelector(`#${formId} .person-name`);
      this.personNameErrorMsj = document.querySelector(`#${formId} .person-name + .field-error`);
      
      this.thatElem = document.querySelector(`#${formId} .that`);
      this.thatErrorMsj = document.querySelector(`#${formId} .that + .field-error`);
      
      this.buttonElem = document.querySelector(`#${formId} button.submit`);
  
      this.bindEvents();
    }
  
    bindEvents() {
      this.personNameElem.addEventListener('keydown', (e) => {
        this.personNameValue = e.target.value;
        if(!this.personNameValue) {
          this.personNameErrorMsj.classList.add('show');
        }
        else {
          this.personNameErrorMsj.classList.remove('show');
        }
      });
  
      this.thatElem.addEventListener('keydown', (e) => {
        this.thatValue = e.target.value;
        if(!this.thatValue) {
          this.thatErrorMsj.classList.add('show');
        }
        else {
          this.thatErrorMsj.classList.remove('show');
        }
      });
  
      this.formElem.addEventListener('submit', (e) => {
        e.preventDefault();
        if(this.personNameValue && this.thatElem) {
          this.eat();
        }
      });
    }
  
    eat() {
      alert(`${this.personNameValue} is eating: ${this.thatValue}` );
    }
  };
  
  let eater1 = new Person('eater1');

})();
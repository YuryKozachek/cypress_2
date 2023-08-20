import login from '../fixtures/example.json';

Cypress.Commands.add('adminLogin', (email, password) => {
  cy.visit('http://qamid.tmweb.ru/admin/');
    if(email) {
      cy.get(login.loginEmail).type(email);
    };
    if(password) {
      cy.get(login.loginPass).type(password);
    };
    cy.contains('Авторизоваться').click();

});

Cypress.Commands.add('emailOrPassword', (value) => {
  if(value === login.email){
    cy.get(login.typeEmail).then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  };
  if(value === login.password){
    cy.get(login.typePass).then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  };
});

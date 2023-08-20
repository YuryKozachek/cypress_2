import login from '../fixtures/example.json';
describe('movies tickets test', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visible page', () => {
    cy.get(login.pageHeader).contains('Идёмвкино');
  });

  it('admin login', () => {
    cy.adminLogin(login.email, login.password);
  });

  it('movie from admin panel', () => {
    cy.adminLogin(login.email, login.password);
    cy.contains('Терминатор-заржавел').should('be.visible');
  })

  context("negative test", () => {

    it('login negative email', () => {
      cy.adminLogin(null, login.password);
      cy.emailOrPassword(login.email);
    });
  
    it('login negative password', () => {
      cy.adminLogin(login.email, null);
      cy.emailOrPassword(login.password);
    });
    it('invalid email', () => {
      cy.adminLogin(login.invalidEmail, login.password);
      cy.contains('Ошибка авторизации').should('be.visible');
    });

    it('invalid pass', () => {
      cy.adminLogin(login.email, login.invalidPass);
      cy.contains('Ошибка авторизации').should('be.visible');
    });

    });

});
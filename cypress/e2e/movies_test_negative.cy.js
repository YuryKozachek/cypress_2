import login from '../fixtures/example.json';
describe("negative test", () => {

  beforeEach(() => {
    cy.visit('/');
  });

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
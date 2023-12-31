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

  it('should book movies tickets', () => {
    cy.get(login.weekday).eq(3).click();
    cy.get(login.posterMovie).parent(2).contains('15:00').click();

    login.cinemaHall.forEach((i) => {
      cy.get(`.buying-scheme__wrapper > :nth-child(${i.row}) > :nth-child(${i.seat})`).click();
    });

    cy.contains('Забронировать').click();
    cy.contains('2/4, 2/5, 2/6').should('be.visible');
  });
});
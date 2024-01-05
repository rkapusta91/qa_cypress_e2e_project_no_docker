/// <reference types="cypress" />
/// <reference types="../support" />

import SignInPageObject from '../support/pages/signIn.pageObject';

const signInPage = new SignInPageObject();

describe('Following and unfollowing the user', () => {
  const user = {
    email: 'test@mail.com',
    password: '12345'
  };

  beforeEach(() => {
    signInPage.visit();
    signInPage.typeEmail(user.email);
    signInPage.typePassword(user.password);
    signInPage.clickSignInBtn();
  });

  // eslint-disable-next-line max-len
  it('should provide an ability to follow and unfollow the another user', () => {
    cy.getByDataCy('globalFeed').click();
    cy.getByDataCy('user').contains('user1').click();
    cy.url().should('contain', 'profile');
    cy.getByDataCy('follow/unfollow').click();
    cy.getByDataCy('follow/unfollow').should('contain', 'Unfollow');
    cy.getByDataCy('follow/unfollow').click();
    cy.getByDataCy('follow/unfollow').should('contain', 'Follow');
  });
});

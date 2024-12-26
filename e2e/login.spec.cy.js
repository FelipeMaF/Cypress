import userData from './cypress/fixtures/userData.json'

describe('Orange HRM Teste ', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTielTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: ".oxd-alert-content-text"
  }

  it('Login realizado com Sucesso!', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.login)
    cy.get(selectorsList.passwordField).type(userData.userSucess.senha)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.login)
  cy.get(selectorsList.passwordField).type(userData.userFail.senha)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)//aqui ele identifica o alerta de credencial invalida, se por acaso logar mesmo com credenciais invalidas, ele vai apontar erro aqui no cypress, pois não vai aparecer, para ser true precisa aparecer.
  })
})

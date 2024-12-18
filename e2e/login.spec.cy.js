describe('Orange HRM Teste ', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTielTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: ".oxd-alert-content-text"
  }

  it('Login realizado com Sucesso!', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTielTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorsList.usernameField).type('Admin')
  cy.get(selectorsList.passwordField).type('teste')
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)//aqui ele identifica o alerta de credencial invalida, se por acaso logar mesmo com credenciais invalidas, ele vai apontar erro aqui no cypress, pois não vai aparecer, para ser true precisa aparecer.
  })
})

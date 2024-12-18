describe('Orange HRM Teste ', () => {

  it('Login realizado com Sucesso!', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']").type('Admin')
  cy.get("[name='password']").type('teste')
  cy.get("[type='submit']").click()
  cy.get(".oxd-alert-content-text")//aqui ele identifica o alerta de credencial invalida, se por acaso logar mesmo com credenciais invalidas, ele vai apontar erro aqui no cypress, pois não vai aparecer, para ser true precisa aparecer.
  })
})

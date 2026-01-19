require('cypress-xpath');
import * as locator from '../pageobjects/locators';
import SupportedProductsPage from '../pageobjects/SupportedProductsPage';

describe(' Repertoire Management contents', () => {
    beforeEach(() => {
      cy.viewport(1024, 768)
      cy.visit(locator.matchEngineUrl)
      cy.get(locator.acceptAllCookiesBtn).click()
  });

  it('verify that supported products are listed correctly', () => {
      SupportedProductsPage.openSupportedProductsTab();
      SupportedProductsPage.acceptCookiesIfPresent();
      SupportedProductsPage.verifySupportedProductsHeader();
      SupportedProductsPage.verifySupportedProductsList();
    });
  
  });
    
  
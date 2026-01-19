import * as locator  from './locators';

class SupportedProductsPage {

  openSupportedProductsTab() {
    cy.xpath(locator.repertoireManagementModuleOption)
      .click({ force: true });

    cy.xpath(locator.supportedproductsTab)
      .scrollIntoView()
      .click();

  }

  acceptCookiesIfPresent() {
    cy.get('body').then(($body) => {
        if ($body.find(locator.acceptAllCookiesBtn).length > 0) {
          cy.get(locator.acceptAllCookiesBtn).click();
        }
      });
  }
  

  verifySupportedProductsHeader() {
    cy.xpath(locator.supportedProductsHearderText)
      .should('be.visible')
      .within(() => {
        cy.contains('There are several types of Product Supported:')
          .should('be.visible');
      });
  }

  verifySupportedProductsList() {
    const expectedProducts = [
      'Cue Sheet / AV Work',
      'Recording',
      'Bundle',
      'Advertisement'
    ];

    cy.xpath(locator.supportedProductsList)
      .should('have.length', expectedProducts.length)
      .each(($li, index) => {
        expect($li.text().trim())
          .to.contain(expectedProducts[index]);
      });
  }
}

export default new SupportedProductsPage();

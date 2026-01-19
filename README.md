To run test:
NodeJs must be installed
Cypress version must be >10

Test file is in cypress/e2e directory
Page object directory consists of 2 files:
locators.js(contains all the locators used in the test)
SupportedProductsPage.js(Contains the functions and methods adopted to make test easily readable)

To run test headless;
Open terminal and run 'npx cypress  run  --browser chrome  --spec "cypress/e2e/supported_product.cy.js"'
To run headless false;
Open cypress 'npx cypress open' 
select E2E testing/chrome/start E2E testing in chrome

# How to run

### Pre-requisites
* npm or yarn installed
* Cypress compatible browser installed (Chrome/Edge/Firefox)
* node is installed
### Steps
* Clone the repo
* Run `npm install` or `yarn`
* Run the tests as a single run (as it would in a CI tool) 
    * `npx cypress run`
    * `yarn run cypress run`
* Alternatively, run the features individually using the Cypress test runner
    * `npx cypress open`
    * `yarn run cypress open`

### Notes
If the tests are failing on cy.visit() to saucedemo.com it seems the command fails when various assets are stored in the browser cache. You may have to manually delete browser cache and disable caching in devtools or equivalent. A workaround for this would be to use the cypress docker image that will have a fresh browser install each time we spin up a container.

* Disabling browser cache on chrome: https://www.webinstinct.com/faq/how-to-disable-browser-cache
* Deleting browser cache on chrome: https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop

import './commands'
import './pages/home.page'
import './pages/motorcycle.page'

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('e is not defined')) {
        return false;
    }
});
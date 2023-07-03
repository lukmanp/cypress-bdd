const URL = 'http://zero.webappsecurity.com/'
const SEARCH = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL)
    }

    static fillSearch(search){
        cy.get(SEARCH).type('bank{enter}')
    }
}

export default SearchPage
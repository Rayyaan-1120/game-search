class Searchview {
    _parentelement = document.querySelector('.searchform')
    _errmessage = "sorry could not find the results"

    searchvalue(){
        const searchbar = this._parentelement.querySelector('.search')
        const searching = searchbar.value.toLowerCase()
        searchbar.blur()

        console.log(searching)
        return searching
    }

    searcheventhandler(handler){
        this._parentelement.addEventListener('submit',(e) => {
            e.preventDefault()
            handler()
        })
    }
}

export const searchview = new Searchview()
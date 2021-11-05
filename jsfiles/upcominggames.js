import { SearchResultview } from "./searchresultview"

class Upcoming extends SearchResultview{
    
    secondlink(handler){
        const secondlinkclick = document.querySelector('.upcominggames')
        secondlinkclick.addEventListener('click',() => {
            handler()
        })
    }
}

export default new Upcoming()
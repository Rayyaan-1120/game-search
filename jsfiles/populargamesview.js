import { SearchResultview } from "./searchresultview"
class Populargames extends SearchResultview{

    clickinglisten(handler){
        const firstlink = document.querySelector('.populargames')
        firstlink.addEventListener('click',() => {
            handler()
        })
    }

}

export const popular = new Populargames()

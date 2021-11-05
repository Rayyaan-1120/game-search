import { SearchResultview } from "./searchresultview";

 class Defaultview extends SearchResultview{
    _parentelement = document.querySelector('.main')
    errmessage = 'sorry could not load the games please reload the page'

    firstlink(handler){
      const firstlinkclick = document.querySelector('.home')
      firstlinkclick.addEventListener('click',() => {
          handler()
      })
  }


    defaultload(handler){
       window.addEventListener('load',handler)
    }

   
}

export const defaultview = new Defaultview()
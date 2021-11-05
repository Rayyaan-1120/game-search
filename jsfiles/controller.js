import * as model from './model'
import { defaultview } from './defaultview'
import { searchview } from './searchview'
import { searchresults } from './searchresultview'
import { popular } from './populargamesview'
import upcominggames from './upcominggames'


const menuoptions = document.querySelector('.menuoptions')
const menubar = document.querySelector('.menubar')


menubar.addEventListener('click',() => {
    menuoptions.classList.toggle('addclass')
})


const startloading = async () => {
    try{
        defaultview.showspinner()
        await model.loadgames()
        defaultview.render(model.state.games)
    }catch(err){
          throw err
}

}

const searchinggame = async()=> {

    searchresults.showspinner()
    await model.searchgames(searchview.searchvalue())
    searchresults.render(model.state.search.results)
}


const populargamesloading = async () => {
    try{
        menuoptions.classList.toggle('addclass')

        popular.showspinner()

        await model.populargames()

        popular.render(model.state.populargames)


    }catch(err){
        popular.showerrmeassge()

    }
    
    
}

const upcominggamesloading = async () => {
    try{
        menuoptions.classList.toggle('addclass')

        upcominggames.showspinner()

        await model.upgames()

        upcominggames.render(model.state.upcominggames)


    }catch(err){
        upcominggames.showerrmeassge()

    }
    
    
}




const initialization = () => {
    defaultview.defaultload(startloading)
    searchview.searcheventhandler(searchinggame)
    popular.clickinglisten(populargamesloading)
    upcominggames.secondlink(upcominggamesloading)
}



initialization()















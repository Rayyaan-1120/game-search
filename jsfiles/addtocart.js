import { View } from "./view";

class Addtocart extends View{
    _parentelement = document.querySelector('.addtocartstore')


    // eventhandler(handler){
    //     window.addEventListener('load',handler)
    // }

    eventhandler(handler){
        setTimeout(() => {
            const btn = document.querySelector('.btn')
            btn.addEventListener('click',() => {
                handler()

            })
        },5000)

        
        
      
    }

    rendergames(){
        return`
        ${this._data[0].map(entry => {
            return `
            <div class="addingtocart">
            <a href="#${entry.id}">
            <div class="shopdiv">
                <div class="imgdiv">
                    <img src="${entry.image}" alt="${entry.image}" crossorigin>
                </div>
                <div class="gamename">
                    <h1>${entry.name}</h1>
                    <h2>${entry.price}</h2>
                </div>
            </div>
            <div class="updateprice">
                <div class="updating">
                    <button>+</button>
                    <h2>quantity</h2>
                    <button>-</button>
                </div>
            </div>
        </a>
        </div>`
        }).join("")}`

        
        
    }
}

export const addtocartview = new Addtocart()
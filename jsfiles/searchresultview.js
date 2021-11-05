import { View } from "./view";

export class SearchResultview extends View{
    _parentelement = document.querySelector('.main')
    _errmessage = "sorry could not find the result"


    
    rendergames(){
        return `
        ${this._data.map(entry => {
            return `
            <div class="gamecard">
            <a href="#${entry.id}" class="linkclick">
            <img src="${entry.image}" alt="${entry.image}" class="" crossorigin>
            <div class="card-content">
                <div class="details">
                <h1>${entry.name}</h1>
                <ul>
                    <li>Ratings:  ${entry.rating}</li>
                    <li>Released Date:  ${entry.released}</li>
                    <li>Ratings:  ${entry.released}</li>
                </ul>
            </div>
            <div class="pricing">
                <h3>Price  $ ${entry.price}</h3>
            </div>

            </div>
            </a>
        </div>
        `
        }).join("")}
        `
    }
}

export const searchresults = new SearchResultview()

import { View } from "./view";

class Pagination extends View{

    _parentelement = document.querySelector('.pagination')


    pgbtnlistenter(handler){
        this._parentelement.addEventListener('click', (e) => {
            const pgbtn = e.target.closest('.pgbtn')
            console.log(pgbtn)
            if(!pgbtn) return

            const pagedata = +pgbtn.dataset.pg
            console.log(pagedata)
            console.log(pgbtn.dataset.pg)
            handler(pagedata)


        })
    }

    rendergames(){
        const pagedivide = Math.ceil(this._data.results.length / this._data.totalresultsperpage)
        console.log(pagedivide)

        if(this._data.showpagenum === 1 && pagedivide > 1){
            return `<button class="btn-next pgbtn" data-pg = "${this._data.showpagenum + 1}">loadmore</button>`
        }

        if(this._data.showpagenum < pagedivide){
            return `<button class="btn-next pgbtn" data-pg="${this._data.showpagenum + 1}">loadmore</button>
            <button class="btn-prev pgbtn" data-pg="${this._data.showpagenum -1}">back</button>`
        }

        if(this._data.showpagenum === pagedivide && pagedivide > 1){
            return `<button class="btn-prev pgbtn" data-pg="${this._data.showpagenum -1}">back</button>`
        }

        return ' '
    }

}

export const pagi = new Pagination()
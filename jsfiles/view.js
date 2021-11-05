export class View {
    _data;

    render(data){
       this._data = data
       if(!data) return
       console.log(data)
       this.clear()
       const html = this.rendergames()
       this._parentelement.insertAdjacentHTML('afterbegin',html)

    }

    clear(){
        this._parentelement.innerHTML = ''
    }

    showspinner(){
        const html =  `
        <div class="loader"></div>
        `
        this.clear()
        this._parentelement.insertAdjacentHTML('afterbegin',html)
    }

    showerrmeassge(){
       const html = `
       <div class="errmeseg">
       <p>${this.errmessage}</p>
       </div>
       `
       this.clear()
       this._parentelement.insertAdjacentHTML('afterbegin',html)
       
    }
}
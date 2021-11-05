import {fetchup} from './helper'
import { apiurl } from './helper'
import { upcomingurl } from './helper'
import { lasthiturl } from './helper'
import { normalurl } from './helper'
import { apikey } from './helper'


export const state = {
    games:{
        
    },
    search:{
        query:'',
        results:[],
    },
    populargames:{},
    upcominggames:{},
    
}


export const loadgames = async () => {
   try{
    const data = await fetchup(normalurl)
    
    if(!data) return
    state.games = data.results.map(entry => {
        return{
            image:entry.background_image,
          name:entry.name,
          ratings:entry.ratings,
          released:entry.released,
          price:(Math.random() * 45 + 1).toFixed(2),
          id:entry.id,
          screenshots:entry.short_screenshots,
          rating:entry.rating,
          genres:entry.genres,
          platforms:entry.parent_platforms
        }
    })

}catch(err){
    console.log(err)
}

}


export const searchgames = async(query) => {
  state.search.query = query

  const anotherfetch = await fetchup(`${apiurl}?key=${apikey}&search=${query}&dates=2013-12-30,2021-12-30&ordering=-ratings`)
  console.log(anotherfetch)
  console.log(query)

  state.search.results = anotherfetch.results.map(entry => {
      return {
          image:entry.background_image,
          name:entry.name,
          ratings:entry.ratings,
          released:entry.released,
          price:(Math.random() * 45 + 1).toFixed(2),
          id:entry.id,
          screenshots:entry.short_screenshots,
          rating:entry.rating,
          genres:entry.genres,
          platforms:entry.parent_platforms
      }
  })
}

export const populargames = async() => {
    try {
        const data = await fetchup(`${lasthiturl}`)
    if(!data) return
    state.populargames = data.results.map(entry => {
        return{
          image:entry.background_image,
          name:entry.name,
          ratings:entry.ratings,
          released:entry.released,
          price:(Math.random() * 45 + 1).toFixed(2),
          id:entry.id,
          screenshots:entry.short_screenshots,
          rating:entry.rating,
          genres:entry.genres,
          platforms:entry.parent_platforms
        }
    })
    } catch (error) {
        throw err
    }
}

export const upgames = async() => {
    try {
        const data = await fetchup(`${upcomingurl}`)
    if(!data) return
    state.upcominggames = data.results.map(entry => {
        return{
          image:entry.background_image,
          name:entry.name,
          ratings:entry.ratings,
          released:entry.released,
          price:(Math.random() * 45 + 1).toFixed(2),
          id:entry.id,
          screenshots:entry.short_screenshots,
          rating:entry.rating,
          genres:entry.genres,
          platforms:entry.parent_platforms
        }
    })
    } catch (error) {
        throw err
    }
}


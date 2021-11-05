export const fetchup = async(url) => {
    try{

        const res = await fetch(url)
        console.log(res)
        if(!res.ok) throw new Error('could not reached')
        const data = await res.json()
        if(!data) return
        console.log(data)
        return data
    }catch(err){
        throw err
    }
}

export const apikey = '2218d48656834b48b18093565aafda20'

export const apiurl = `https://api.rawg.io/api/games`



export const upcomingurl = `${apiurl}?key=${apikey}&dates=2021-09-01,2022-09-30&ordering=-added`
export const lasthiturl = `${apiurl}?key=${apikey}&dates=2019-12-30,2021-12-30&ordering=-ratings`
export const normalurl = `${apiurl}?key=${apikey}&dates=2013-12-30,2021-12-30&ordering=-ratings`
export const tryit = () => {
    fetchup(`${apiurl}?key=${apikey}&platforms`)
}


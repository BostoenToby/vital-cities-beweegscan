export const searchList = (query: string) => {
    const allResults: string[] = ["Menen", "Kortrijk", "Wevelgem", "Bissegem", "Kortemark"]
    var result: string[] = []
    console.log(query.toLowerCase())
    allResults.forEach((g) => {
        if(g.toLowerCase().startsWith(query.toLowerCase())){
            result.push(g)
        }
        if(g.toLowerCase() == query.toLowerCase()){
            let index = result.indexOf(g)
            result.splice(index, 1)
        }
    })
    if(result.length == allResults.length){
        return;
    }
    return result
}
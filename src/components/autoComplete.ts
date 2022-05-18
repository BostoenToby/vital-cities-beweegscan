export const searchList = (query: string) => {
    const allResults: string[] = ["Menen", "Kortrijk", "Wevelgem", "Bissegem", "Kortemark", "Gent", "Antwerpen" ,"Ledegem", "Kerke", "K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K90", "K10"]
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
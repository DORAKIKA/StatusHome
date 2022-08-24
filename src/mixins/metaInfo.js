

export function useMetaInfo(meta){
    for(let key in meta){
        let d = document.createElement('meta')
        d.name = key
        d.content = meta[key]
        document.head.appendChild(d)
    }
}
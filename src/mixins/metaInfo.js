

export function useMetaInfo(meta){
    for(let key in meta){
        let d = document.createElement('meta')
        d.name = key
        d.content = meta[key]
        document.head.appendChild(d)
    }
}

export function useLinkTag(links){
    links.forEach(link => {
        let l = document.createElement('link')
        l.rel = link.rel
        l.href = link.href
        document.head.appendChild(l)
    })
}
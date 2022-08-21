import axios from 'axios'

export const getHitokoto = (params)=>{
    return axios({
        url: 'https://v1.hitokoto.cn',
        params,
    })
}
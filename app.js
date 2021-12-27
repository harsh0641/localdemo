// const http=require('http')
 
// const server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.end('hello who are you')
//     }
//     if(req.url==='/about')
//     {
//         res.end('hello i m about here')
//     }
// res.end(`<h1>oops!</h1>
//     <p>we can't seem to find the page</p>
//     <a href="/">back home </a>`)

// })
// server.listen(5000)


const _=require('lodash');
const items= [1,[2,[3,5,6,7]]]
const newItems=_.flattenDeep(items);
console.log(newItems)

const fetch  = require( 'node-fetch');

fetch("http://localhost:3444/",    {
        assetType: 4,
        url: fs.createReadStream('src/test/integration/demand/assets/files/index.html')
    },

)
.then((e)=>{
    console.log(e.body)
}).catch(err=>{
    console.log(err)
    console.log(err.body)
})
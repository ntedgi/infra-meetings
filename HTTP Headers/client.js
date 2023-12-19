const http = require("http")

const httpAgent = new http.Agent({ keepAlive: true })

const options = {
    hostname: "localhost:9900",
    path: "/",
    agent: httpAgent,
}

const req = http.request(options, (res) => {

})
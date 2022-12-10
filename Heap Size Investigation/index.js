const buf = Buffer.alloc(+process.argv[2] * 1024 * 1024,'x')
console.log(Math.round(buf.length / (1024 * 1024)))
console.log(Math.round(process.memoryUsage().rss / (1024 * 1024)))
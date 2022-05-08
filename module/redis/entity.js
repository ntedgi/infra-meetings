interface Redis {
    put()
    get()
    del()
}

interface RedisOptions {
    host: string
    port: number
    db: number
    password: string
    logger: any
}
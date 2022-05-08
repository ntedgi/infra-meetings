import redis from "./redis";

const redis = new RedisClient({ logger: logger, redis: ioredis, config: config });


export {
    redis,
    mysql
}

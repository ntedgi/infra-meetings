const logger = require('./logger')

const findNextPrime = (seed) => {
    const isPrime = (number) => {
        let sqrt = Math.floor(Math.sqrt(number))
        const smallPrimes = [2, 3, 5, 7, 11]

        for (let i = 0; i < smallPrimes.length; i++) {
            if (number % smallPrimes[i] === 0) {
                return false;
            }
        }
        for (let i = smallPrimes[smallPrimes.length - 1]; i < sqrt; i = +2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true
    }


    const originalNumber = seed;
    let seedCopy = seed;

    while (true) {
        if (isPrime(seedCopy)) {
            logger.log(`next prime after ${originalNumber} is ${seedCopy}`)
            return seedCopy
        }

        else seedCopy++
    }

}
let seed = Math.floor(Math.random() * 100)

findNextPrime(seed)
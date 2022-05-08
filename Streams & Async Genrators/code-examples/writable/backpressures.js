
import { createReadStream, createWriteStream } from 'fs'

const srcStream = createReadStream('../users.csv', { encoding: 'utf8' });
const destStream = createWriteStream('../users-copy.csv');

srcStream.on('data', chunk => {
    const canContinue = destStream.write(chunk)
    if (!canContinue) {
        // we are overflowing the destination, we should pause
        srcStream.pause()
        // we will resume when the destination stream is drained
        destStream.once('drain', () => srcStream.resume())
    }
})
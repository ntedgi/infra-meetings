import { join, dirname } from 'path'
import { createReadStream } from 'fs'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '..', 'users.csv')


const readStream = createReadStream(filePath, { encoding: 'utf8' })

readStream.on('data', chunk => {
    console.log(chunk)
})
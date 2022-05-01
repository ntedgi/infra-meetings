for (let index = 0; index < 10; index++) {
    const { res, heapTotal, external } = process.memoryUsage();
    console.log(index, res, heapTotal, external)
}
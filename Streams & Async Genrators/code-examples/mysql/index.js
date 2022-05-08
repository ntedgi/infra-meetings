
// read stream from mysql.


// pousing
const query = connection.query('SELECT * FROM posts');
query
    .on('error', function (err) {
        // Handle error, an 'end' event will be emitted after this as well
    })
    .on('fields', function (fields) {
        // the field packets for the rows to follow
    })
    .on('result', function (row) {
        // Pausing the connnection is useful if your processing involves I/O
        connection.pause();

        processRow(row, function () {
            connection.resume();
        });
    })
    .on('end', function () {
        // all rows have been received
    });

// flowing

connection.query('SELECT * FROM BI.demand_stats_daily')
    .stream({ highWaterMark: 5 })
    .pipe(...);
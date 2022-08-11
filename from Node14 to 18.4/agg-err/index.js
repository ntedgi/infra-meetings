function a() {
    try {
        b();
    }
    catch (err) {
        if (err instanceof AggregateError) {
            console.log(err.errors.length);
            console.log(err.errors);
        }
    }
}
function b() {
    try {
        c();
    }
    catch (err) {
        if (err instanceof AggregateError) {
            err.errors.push(new Error("Error in b"));
            throw err;
        }
    }

}
function c() {
    throw new AggregateError([new Error("Error in c")]);
}

a();


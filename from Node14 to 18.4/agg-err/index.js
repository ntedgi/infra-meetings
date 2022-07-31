try {
    throw new AggregateError([
      new Error(
        "This is Error 1"
      ),
      new Error(
        "This is Error 2"
      ),
      new Error(
        "This is Error 3"
      ),
    ], 'These are multiple errors');
  } catch (n) {
   
      // Check if AggregateError
      console.log(
        n instanceof AggregateError
      );
       
      console.log(n.message);
      console.log(n.name);
      console.log(n.errors);
  }
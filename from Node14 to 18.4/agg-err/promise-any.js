Promise.any([
    Promise.reject(
      new Error(
        "There is any error occurred"
      )
    ),
  ]).catch(n => {
   
    // Check if AggregateError
    console.log(
      n instanceof AggregateError
    );
     
    // Print the message of the error
    console.log(n.message);
     
    // Print the name of the error
    console.log(n.name);
     
    // Print all the errors that this
    // error comprises
    console.log(n.errors);
  }
)
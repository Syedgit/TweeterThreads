//<<ONE>>>//
try {
    // your code here
 } catch (error) {
    // code to handle the error
 }

 
 //<<<TWO>>>>///
 try {
    throw new Error("My custom error message");
 } catch (error) {
    console.error(error.message);
 }

 
 //<<<THREE>>>////
 try {
    throw new Error("My custom error message");
 } catch (error) {
    console.error("Error: " + error.message);
    console.error("Stack Trace: " + error.stack);
 }
 
 ////<<<FOUR>>>>////

 try {
    throw new Error("My custom error message");
 } catch (error) {
    console.error("Error: " + error.message);
 } finally {
    console.log("The finally block is executed regardless of whether an error occurred or not");
 }

 /*FIVE*/
 // Reject
 const myPromise = new Promise((resolve, reject) => {
    const error = new Error("My custom error message");
    reject(error);
 });

 /*SIX*/
// Catch 
 myPromise.catch((error) => {
    console.error("Error: " + error.message);
 });

 
 /*SEVEN*/
 myPromise
   .then(() => {
      try {
         throw new Error("Error in the then block");
      } catch (error) {
         console.error("Error: " + error.message);
      }
   })
   .catch((error) => {
      console.error("Error: " + error.message);
   });

   /*EIGHT*/
 // chain mulitple catch blocks.
   myPromise
   .then(() => {
      throw new Error("Error in the first then block");
   })
   .catch((error) => {
      console.error("Error in the first catch block: " + error.message);
      throw error;
   })
   .then(() => {
      throw new Error("Error in the second then block");
   })
   .catch((error) => {
      console.error("Error in the second catch block: " + error.message);
   });


 
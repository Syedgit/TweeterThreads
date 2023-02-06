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

 
 
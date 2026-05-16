
export default function Form(){

   function handleFormSubmit(event){
      event.preventDefault()
      console.log("Form was submitted")
   }
   return (
      <>
      <form >
         <input placeholder="write your name"/>
         <button onClick={handleFormSubmit} >Submit</button>
      </form>
      
      </>

   );
}
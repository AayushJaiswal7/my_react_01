function handleClick(event){
   console.log("Hello!");
   console.log(event)
}
function handleMouseOver(){
   console.log("Bye!")
}
function handleDoubleClick(){
   console.log("Double Clicked")

}
export default function Button(){
   const styles={textAlign:"center"}
   return (
      <div style={styles}>
         <button onClick={handleClick}>Click me !</button>
         
         <p onMouseOver={handleMouseOver}>this is an event which takes place to present the onmouseover event
         </p>
         <button onDoubleClick={handleDoubleClick}>Double click to go!!!!</button>
      </div>
   );
}
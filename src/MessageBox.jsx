
function MessageBox({Name,setColor,textColor="black"}){
   let styles={}
   return (
      <div style={{backgroundColor:setColor,textAlign:"center",color:textColor}}>
      <h1>Hello, {Name}</h1>
      </div>
   );
}

export default MessageBox
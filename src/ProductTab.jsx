import Product from "./Product.jsx"
import "./Product.css"
function ProductTab() {
 let styles={
   display:"flex",
   flexWrap:"wrap",
   justifyContent:"center",
   alignItems:"center"
 }
   // let options = ["durable", "fast", "hi-tech"]
   return <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb—transformer" idx={2}/>
      <Product title="Portronics toad 23" idx={3}/>
   </div>
}
export default ProductTab
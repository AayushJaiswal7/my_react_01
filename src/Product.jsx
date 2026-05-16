import "./Product.css"
import Price from "./Price.jsx"

function Product({ title, idx }) {
   // let styles={backgroundColor:price>30000?"skyblue":"grey"};
   let oldPrices = ["12,495", "11,999", "1,599", "599"];
   let newPrices = ["8,999", "9,199", "899", "278"];
   let description = [
      "8,000 DPI",
      "intuitive surface",
      "designed for iPad Pro",
      "wireless"];
   return (
      <div className="Product" >
         <h4>{title}</h4>
         <p>{description[idx]}</p>
         <p>{description[idx]}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
   );
   // const list =features.map((feature) => <li> {feature} </li> )

}
export default Product;
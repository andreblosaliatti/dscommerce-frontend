import "./styles.css"
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import type { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "A Smart TV with 4K resolution and HDR support.",
    price: 2500.00,
    imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
    categories: [
      {
        id: 2, 
        name: "Eletrônicos"
      },
      {
        id: 3,
        name: "TVs"
      },
      {
        id: 4,
        name: "Importados"
      }
    ]
  };

export default function ProductDetails(){
    return(
        <>
    <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product}/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
    );
}
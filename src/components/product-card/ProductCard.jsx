import { Link } from "react-router-dom";

const ProductCard = ({ item: { id, image, price } }) => {
  return (
    <div className="card bg-base-100 w-1/4 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" width={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{price}$</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

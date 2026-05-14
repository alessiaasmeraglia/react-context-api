import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <article className="card product-card h-100 position-relative">
            <button className="favorite-btn" type="button">
                ♡
            </button>

            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="card-body d-flex flex-column">
                <span className="product-category">{product.category}</span>

                <h3 className="product-title">{product.title}</h3>

                <p className="product-description">{product.description}</p>

                <div className="mt-auto d-flex justify-content-between align-items-center gap-3">
                    <strong className="product-price">€ {product.price}</strong>

                    <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                        Dettagli
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
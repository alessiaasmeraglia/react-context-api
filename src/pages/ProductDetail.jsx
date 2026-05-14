import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Prodotto non trovato");
                }

                return res.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => {
                console.error(err);
                setError("Errore nel caricamento del prodotto.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const goToPreviousProduct = () => {
        const previousId = Number(id) - 1;

        if (previousId >= 1) {
            navigate(`/products/${previousId}`);
        }
    };

    const goToNextProduct = () => {
        const nextId = Number(id) + 1;

        if (nextId <= 20) {
            navigate(`/products/${nextId}`);
        }
    };

    if (loading) {
        return <h2 className="status-message">Caricamento prodotto...</h2>;
    }

    if (error) {
        return <h2 className="status-message">{error}</h2>;
    }

    return (
        <section className="product-detail-page">
            <div className="container">
                <div className="breadcrumb-luxe">
                    <Link to="/">Home</Link> {">"} <Link to="/products">Prodotti</Link> {" "}
                    <strong>{product.title}</strong>
                </div>

                <div className="product-detail-card">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.title} />
                    </div>

                    <div className="product-detail-info">
                        <span>{product.category}</span>

                        <h1>{product.title}</h1>

                        <p className="product-detail-description">{product.description}</p>

                        <div className="product-detail-price">€ {product.price}</div>

                        <div className="product-rating">
                            ⭐ {product.rating?.rate} / 5 — {product.rating?.count} recensioni
                        </div>

                        <div className="detail-actions">
                            <button
                                type="button"
                                onClick={goToPreviousProduct}
                                disabled={Number(id) <= 1}
                            >
                                ← Prodotto precedente
                            </button>

                            <button
                                type="button"
                                onClick={goToNextProduct}
                                disabled={Number(id) >= 20}
                            >
                                Prodotto successivo →
                            </button>
                        </div>

                        <Link to="/products" className="back-link">
                            Torna ai prodotti
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
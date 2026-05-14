import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { BudgetContext } from "../context/BudgetContext";

function Home() {
    const { budgetMode } = useContext(BudgetContext);

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const selectedProducts = data.slice(0, 4);
                setFeaturedProducts(selectedProducts);
            })
            .catch((err) => {
                console.error(err);
                setError("Errore nel caricamento dei prodotti in evidenza.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const visibleFeaturedProducts = budgetMode
        ? featuredProducts.filter((product) => product.price <= 30)
        : featuredProducts;

    return (
        <>
            <section className="home-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-5">
                            <h1>Benvenuti nel nostro Store</h1>
                            <p>
                                Qualità e stile a portata di clic. Scopri una selezione curata
                                di articoli premium pensati per elevare il tuo quotidiano con
                                eleganza e semplicità.
                            </p>

                            <Link to="/products" className="btn btn-primary luxe-btn">
                                Scopri i Prodotti
                            </Link>
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="home-hero-image">
                                <img src="/img/home-hero.png" alt="Store LUXE" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="collection-card">
                                <span>COLLEZIONE 2024</span>
                                <h2>L'essenza del Design Contemporaneo</h2>
                                <p>
                                    Ogni pezzo della nostra collezione è stato selezionato per la
                                    sua maestria artigianale e l'attenzione ai dettagli,
                                    garantendo prodotti che durano nel tempo.
                                </p>

                                <div className="mini-products">
                                    <img src="/img/watch.png" alt="Orologio" />
                                    <img src="/img/headphones.png" alt="Cuffie" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="quality-card h-100">
                                <div className="quality-icon">🛡</div>
                                <h3>Garanzia di Qualità</h3>
                                <p>
                                    Scegliamo solo i materiali migliori per offrirti
                                    un'esperienza d'acquisto senza compromessi.
                                </p>
                                <a href="#">Scopri di più →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end mb-5">
                        <div>
                            <h2>Articoli in Evidenza</h2>
                            <p>I più amati dalla nostra community</p>

                            {budgetMode && (
                                <p className="text-warning fw-bold">
                                    Modalità Budget attiva: articoli fino a 30€.
                                </p>
                            )}
                        </div>

                        <Link to="/products">Vedi tutta la collezione</Link>
                    </div>

                    {loading && <p>Caricamento articoli in evidenza...</p>}

                    {error && <p className="text-danger">{error}</p>}

                    {!loading && !error && visibleFeaturedProducts.length === 0 && (
                        <p>Nessun articolo in evidenza disponibile in modalità budget.</p>
                    )}

                    {!loading && !error && visibleFeaturedProducts.length > 0 && (
                        <div className="row g-4">
                            {visibleFeaturedProducts.map((product) => (
                                <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                    
                </div>
            </section>

            <section className="newsletter-dark">
                <div className="container text-center">
                    <h2>Rimani Aggiornato</h2>
                    <p>
                        Iscriviti alla nostra newsletter per ricevere offerte esclusive e
                        anteprime sulle nuove collezioni direttamente nella tua inbox.
                    </p>

                    <form className="newsletter-form">
                        <input type="email" placeholder="La tua email" />
                        <button type="submit">Iscriviti</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Home;
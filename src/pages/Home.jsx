import { Link } from "react-router-dom";

function Home() {
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
                        </div>

                        <Link to="/products">Vedi tutta la collezione</Link>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="featured-card">
                                <div className="featured-img red-shoe"></div>
                                <span>Calzature</span>
                                <h3>Velocity Pro Sneaker</h3>
                                <strong>€129,00</strong>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="featured-card">
                                <div className="featured-img sunglasses"></div>
                                <span>Accessori</span>
                                <h3>Lumina Shade Classic</h3>
                                <strong>€85,00</strong>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="featured-card">
                                <div className="featured-img camera"></div>
                                <span>Tech</span>
                                <h3>RetroSnap Camera</h3>
                                <strong>€159,00</strong>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="featured-card">
                                <div className="featured-img bag"></div>
                                <span>Moda</span>
                                <h3>Urban Leather Tote</h3>
                                <strong>€210,00</strong>
                            </div>
                        </div>
                    </div>
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
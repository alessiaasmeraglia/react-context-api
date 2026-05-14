function Footer() {
    return (
        <footer className="footer bg-white border-top">
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-12 col-md-6">
                        <h5>LUXE Boutique</h5>
                        <p className="text-muted footer-text">
                            La tua destinazione per il lifestyle di lusso. Curiamo ogni
                            singolo prodotto per offrirti solo l'eccellenza.
                        </p>

                        <div className="d-flex gap-3 fs-5">
                            <span>🌐</span>
                            <span>↗</span>
                            <span>✉</span>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6>INFO</h6>
                        <a href="#" className="footer-link">
                            Privacy Policy
                        </a>
                        <a href="#" className="footer-link">
                            Termini di Servizio
                        </a>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6>SERVIZI</h6>
                        <a href="#" className="footer-link">
                            Spedizioni
                        </a>
                        <a href="#" className="footer-link">
                            Contatti
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 border-top text-muted">
                © 2024 LUXE Boutique. Tutti i diritti riservati.
            </div>
        </footer>
    );
}

export default Footer;
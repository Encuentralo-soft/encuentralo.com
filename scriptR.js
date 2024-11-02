const destinations = [
    {
        id: 1,
        title: "La Pampa",
        image: "img/la pampa.jpg",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "La Pampa Un lugar donde el buen gusto y la tradición se encuentran para ofrecerte una experiencia gastronómica inigualable.",
        modalContent: "La Pampa, ubicada en la región occidental de El Salvador, es una vasta llanura que se extiende entre suaves colinas y montañas, ofreciendo paisajes rurales idílicos y un ambiente de tranquilidad. Esta región es conocida por su riqueza agrícola y ganadera, donde el terreno fértil y el clima templado permiten el cultivo de diversos productos, como el café y el maíz, así como la crianza de ganado. Además de su importancia productiva, La Pampa se ha convertido en un atractivo para los amantes del ecoturismo, que disfrutan de actividades como caminatas, paseos a caballo y la observación de la fauna y flora locales."
    },
    {
        id: 2,
        title: "Celeste Imperio",
        image: "img/Celeste imperio.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un restaurante exclusivo en Santa Ana, conocido por su ambiente elegante y su menú gourmet con especialidades internacionales y locales.",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica."
    },
    {
        id: 3,
        title: "Lago de Coatepeque",
        image: "img/Lago. Coatepe.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un majestuoso lago de origen volcánico, rodeado de exuberante naturaleza y popular para deportes acuáticos y relajación",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica."
    },
    {
        id: 4,
        title: "Catedral de Santa Ana",
        image: "img/Catedral.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un majestuoso edificio neogótico que es símbolo religioso y arquitectónico de Santa Ana.",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica."
    },
    
    
    // ... Agrega el resto de los destinos aquí
];

function generateCards() {
    const cardsPerSlide = 3; // Número de cards por fila
    const totalCards = destinations.length;
    let carouselHTML = '';
    let currentIndex = 0; // Índice actual para recorrer las cards

    while (currentIndex < totalCards) {
        const isActive = currentIndex === 0 ? 'active' : '';
        carouselHTML += `<div class="carousel-item ${isActive}"><div class="row">`;

        for (let i = 0; i < cardsPerSlide && currentIndex < totalCards; i++, currentIndex++) {
            const dest = destinations[currentIndex];
            carouselHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img src="${dest.image}" class="card-img-top" alt="${dest.title}">
                        <div class="card-body">
                            <h5 class="card-title">${dest.title}</h5>
                            <p class="card-text">${dest.description}</p>
                            <button id="color_vermas_but" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${dest.id}">Ver más</button>
                        </div>
                    </div>
                </div>
            `;
        }

        carouselHTML += `</div></div>`; // Cierra la fila y el item del carrusel
    }

    return carouselHTML;
}

function generateModals() {
    return destinations.map(dest => `
        <div class="modal fade" id="modal${dest.id}" tabindex="-1" aria-labelledby="modalLabel${dest.id}" aria-hidden="true">
            <div class="modal-dialog modal-lg"> <!-- Cambiado a modal-lg para más espacio -->
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel${dest.id}">${dest.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Carrusel de imágenes -->
                        <div id="carousel${dest.id}" class="carousel slide mb-4" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                ${dest.gallery.map((img, index) => `
                                    <button type="button" 
                                        data-bs-target="#carousel${dest.id}" 
                                        data-bs-slide-to="${index}" 
                                        ${index === 0 ? 'class="active"' : ''}
                                        aria-label="Slide ${index + 1}">
                                    </button>
                                `).join('')}
                            </div>
                            <div class="carousel-inner">
                                ${dest.gallery.map((img, index) => `
                                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                        <img src="${img}" class="d-block w-100" alt="${dest.title} imagen ${index + 1}">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel${dest.id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel${dest.id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                        <!-- Contenido del modal -->
                        <div class="modal-text">
                            ${dest.modalContent}
                        </div>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
const destinations = [
    {
        id: 1,
        title: "La Pampa",
        modalId: "modal1",
        image: "img/la pampa.jpg",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "La Pampa Un lugar donde el buen gusto y la tradición se encuentran para ofrecerte una experiencia gastronómica inigualable.",
        modalContent: "La Pampa, ubicada en la región occidental de El Salvador, es una vasta llanura que se extiende entre suaves colinas y montañas, ofreciendo paisajes rurales idílicos y un ambiente de tranquilidad. Esta región es conocida por su riqueza agrícola y ganadera, donde el terreno fértil y el clima templado permiten el cultivo de diversos productos, como el café y el maíz, así como la crianza de ganado. Además de su importancia productiva, La Pampa se ha convertido en un atractivo para los amantes del ecoturismo, que disfrutan de actividades como caminatas, paseos a caballo y la observación de la fauna y flora locales.",
        mapIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.794952729498!2d-89.56709612582817!3d13.970807292187144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e895ff531abd%3A0x2d53bb3bf3e911f3!2sLa%20Pampa%20%E2%80%A2%20Plaza%20Kristal_Santa%20Ana!5e0!3m2!1ses-419!2ssv!4v1730669868110!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 2,
        title: "Celeste Imperio",
        modalId: "modal2",
        image: "img/Celeste imperio.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un restaurante exclusivo en Santa Ana, conocido por su ambiente elegante y su menú gourmet con especialidades internacionales y locales.",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica.",
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.635411742173!2d-89.55641292582803!3d13.980293891964228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e91e175feee1%3A0x81344dff37a964e3!2sCeleste%20Imperio!5e0!3m2!1ses-419!2ssv!4v1730669030095!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 3,
        title: "Lago de Coatepeque",
        modalId: "modal3",
        image: "img/Lago. Coatepe.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un majestuoso lago de origen volcánico, rodeado de exuberante naturaleza y popular para deportes acuáticos y relajación",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica.",
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52051.44440298791!2d-89.58881960830767!3d13.863280637266808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62dcd48bbf3581%3A0xcbb51df50ff589a9!2sLago%20de%20Coatepeque!5e1!3m2!1ses-419!2ssv!4v1730669983275!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 4,
        title: "Catedral de Santa Ana",
        modalId: "modal4",
        image: "img/Catedral.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un majestuoso edificio neogótico que es símbolo religioso y arquitectónico de Santa Ana.",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica.",
        mapIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.387575470488!2d-89.55850742582773!3d13.995018191617834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e8a5f49aa977%3A0x7262dcc39ef18312!2sCatedral%20de%20Nuestra%20Se%C3%B1ora%20Santa%20Ana!5e0!3m2!1ses-419!2ssv!4v1730669766327!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 5,
        title: "Teatro Nacional de Santa Ana",
        modalId: "modal5",
        image: "img/Teatro Nacional.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "Un icónico teatro con más de un siglo de historia, donde se presentan eventos culturales y artísticos",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica.",
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.35691388947!2d-89.55923862582772!3d13.995282991611576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e8af7e9b2dcf%3A0x5f726a32c312edce!2sTeatro%20Nacional%20de%20Santa%20Ana!5e1!3m2!1ses-419!2ssv!4v1730670022065!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: 6,
        title: "Volcán de Santa Ana",
        modalId: "modal6",
        image: "img/Volcan de Santa Ana.png",
        gallery: [
            "img/teatro img galeria/img teatro 1.jpg",
            "img/teatro img galeria/img teatro 2.jpg",
            "img/teatro img galeria/img teatro 3.jpg",
            "img/teatro img galeria/img teatro 4.jpg",
            "img/teatro img galeria/img teatro 5.jpg"
        ],
        description: "El volcán más alto de El Salvador, conocido por su impresionante cráter y las vistas panorámicas que ofrece.",
        modalContent: "Celeste Imperio es un restaurante de alta categoría en Santa Ana, El Salvador, que se destaca por su ambiente refinado y su exquisita propuesta culinaria. Este lugar combina lo mejor de la gastronomía internacional con platos salvadoreños tradicionales, preparados con ingredientes frescos y de alta calidad. La atención al detalle, tanto en la presentación de los platillos como en el servicio al cliente, hacen de cada visita una experiencia memorable. Su decoración moderna y acogedora es ideal para celebraciones especiales o una cena romántica, ofreciendo además una excelente carta de vinos y postres para completar la experiencia gastronómica.",
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9828.346179088448!2d-89.6391349268002!3d13.850045865589093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62c1647f1b5e09%3A0xf1d4b8c7f098d3d7!2sVolc%C3%A1n%20de%20Santa%20Ana!5e1!3m2!1ses-419!2ssv!4v1730670072922!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
                        <!-- Mapa -->
                        <div class="map-container">
                            ${dest.mapIframe}
                        </div>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}


// --------------------------------------------------------

// --------------------------------------------------------------------
// mapa 
function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

// --------------------------------------------------------

// COD BUSQUEDA

// Función para buscar destinos
let currentSelection = -1;

function searchDestinations() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('resultsContainer');

    // Limpiar resultados anteriores
    resultsContainer.innerHTML = '';

    if (filter === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    const results = destinations.filter(dest => 
        dest.title.toLowerCase().includes(filter)
    );

    if (results.length === 0) {
        // Opcional: Mostrar mensaje cuando no hay resultados
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No se encontraron resultados';
        resultsContainer.appendChild(noResults);
    } else {
        results.forEach((dest, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.setAttribute('data-id', dest.id);
            
            const img = document.createElement('img');
            img.src = dest.image;
            img.alt = dest.title;
            
            const span = document.createElement('span');
            span.textContent = dest.title;
            
            resultItem.appendChild(img);
            resultItem.appendChild(span);

            resultItem.addEventListener('click', () => {
                showModal(dest);
                clearSearchAndResults();
            });

            resultsContainer.appendChild(resultItem);
        });
    }

    resultsContainer.style.display = 'block';
    currentSelection = -1;
}

function showModal(dest) {
    const modal = new bootstrap.Modal(document.getElementById(dest.modalId));
    modal.show();
}

// Nueva función para limpiar la búsqueda y resultados
function clearSearchAndResults() {
    const input = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    input.value = '';
    resultsContainer.style.display = 'none';
    currentSelection = -1;
}

function handleKeyNavigation(event) {
    const resultsContainer = document.getElementById('resultsContainer');
    const items = resultsContainer.getElementsByClassName('result-item');
    
    if (items.length === 0) return;

    if (event.key === 'ArrowDown') {
        currentSelection = (currentSelection + 1) % items.length;
        updateSelection(items);
    } else if (event.key === 'ArrowUp') {
        currentSelection = (currentSelection - 1 + items.length) % items.length;
        updateSelection(items);
    } else if (event.key === 'Enter') {
        if (currentSelection >= 0) {
            const selectedId = items[currentSelection].getAttribute('data-id');
            const selectedDest = destinations.find(dest => dest.id.toString() === selectedId);
            if (selectedDest) {
                showModal(selectedDest);
                clearSearchAndResults(); // Limpiar búsqueda al presionar Enter
            }
        }
    }
}

function updateSelection(items) {
    Array.from(items).forEach((item, index) => {
        if (index === currentSelection) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

let searchTimeout;

function debouncedSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchDestinations, 300);
}

// Event Listeners
document.getElementById('searchInput').addEventListener('input', debouncedSearch);
document.getElementById('searchInput').addEventListener('keydown', handleKeyNavigation);
document.getElementById('searchButton').addEventListener('click', searchDestinations);

// Modifica el event listener del botón de búsqueda
document.getElementById('searchButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir comportamiento por defecto si es necesario
    const input = document.getElementById('searchInput');
    
    if (input.value.trim() !== '') {
        searchDestinations();
    } else {
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.style.display = 'none';
    }
});

// Agregar evento de búsqueda
document.getElementById('searchButton').addEventListener('click', searchDestinations);
document.getElementById('searchInput').addEventListener('input', searchDestinations);
document.getElementById('searchInput').addEventListener('input', searchDestinations);
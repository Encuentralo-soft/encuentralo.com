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
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.794952729498!2d-89.56709612582817!3d13.970807292187144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e895ff531abd%3A0x2d53bb3bf3e911f3!2sLa%20Pampa%20%E2%80%A2%20Plaza%20Kristal_Santa%20Ana!5e0!3m2!1ses-419!2ssv!4v1730669868110!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        comments: ["hermoso lugar", "Un lugar espectacular"] // Array para almacenar comentarios
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
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.635411742173!2d-89.55641292582803!3d13.980293891964228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e91e175feee1%3A0x81344dff37a964e3!2sCeleste%20Imperio!5e0!3m2!1ses-419!2ssv!4v1730669030095!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        comments: [] // Array para almacenar comentarios
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
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52051.44440298791!2d-89.58881960830767!3d13.863280637266808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62dcd48bbf3581%3A0xcbb51df50ff589a9!2sLago%20de%20Coatepeque!5e1!3m2!1ses-419!2ssv!4v1730669983275!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        comments: [] // Array para almacenar comentarios
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
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.387575470488!2d-89.55850742582773!3d13.995018191617834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e8a5f49aa977%3A0x7262dcc39ef18312!2sCatedral%20de%20Nuestra%20Se%C3%B1ora%20Santa%20Ana!5e0!3m2!1ses-419!2ssv!4v1730669766327!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        comments: [] // Array para almacenar comentarios
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
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.35691388947!2d-89.55923862582772!3d13.995282991611576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e8af7e9b2dcf%3A0x5f726a32c312edce!2sTeatro%20Nacional%20de%20Santa%20Ana!5e1!3m2!1ses-419!2ssv!4v1730670022065!5m2!1ses-419!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        comments: [] // Array para almacenar comentarios
    },
    // {
    //     id: 7,
    //     title: "Centro Historico",
    //     modalId: "modal7",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     description: "El centro histórico de Santa Ana, El Salvador, es un fascinante conjunto de arquitectura colonial y neogótica, que incluye la impresionante Catedral de Santa Ana y diversos edificios históricos. Este vibrante lugar es el corazón cultural de la ciudad, lleno de plazas, museos y cafés que invitan a los visitantes a explorar su rica historia. ",
    //     modalContent: "El centro histórico de Santa Ana, El Salvador, es un atractivo destino que ofrece una mirada profunda a la herencia cultural y arquitectónica de la ciudad. Dominado por la majestuosa Catedral de Santa Ana, una obra maestra del estilo neogótico construida a finales del siglo XIX, esta área destaca por su impresionante diseño y detalles artísticos que capturan la atención de los visitantes. A su alrededor, los edificios coloniales y republicanos se alinean, muchos de ellos restaurados, lo que proporciona un hermoso contraste con las plazas abiertas que invitan a la contemplación y el disfrute del ambiente. ",
    //     mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7742.7878025316095!2d-89.56698432860911!3d13.994642556087875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e8a57b77b969%3A0x9a258510cafab877!2sCentro%2C%20Santa%20Ana!5e0!3m2!1ses!2ssv!4v1730693917718!5m2!1ses!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     comments: [] // Array para almacenar comentarios
    // },
    {
        id: 8,
        title: "Tazumal",
        modalId: "modal8",
        image: "img/arquelogicos/tazumal 1.jpg",
        gallery: [
            "img/arquelogicos/tazumal.jpg",
            "img/arquelogicos/tazumal 2.jpg",
            "img/arquelogicos/tazumal 3.jpg",
            "img/arquelogicos/tazumal 4.jpg",
            "img/arquelogicos/tazumal 5.jpg"
        ],
        description: "Es un fascinante sitio arqueológico,con sus impresionantes estructuras mayas, incluyendo pirámides y plataformas ceremoniales.",
        modalContent: "Este lugar es un testimonio de la rica herencia cultural de la región y ofrece a los visitantes la oportunidad de explorar la historia antigua de las civilizaciones mesoamericanas.El Tazumal es uno de los sitios arqueológicos más importantes de El Salvador, situado en la ciudad de Santa Ana. Este antiguo asentamiento maya data de aproximadamente 1000 d.C. y es conocido por sus impresionantes estructuras, que incluyen una pirámide escalonada y varias plataformas ceremoniales. La arquitectura del Tazumal refleja la sofisticación de la cultura maya, con detalles intrincados y una planificación urbana que resalta su importancia en la región durante su apogeo.",
        contact: '6064948',
        // Agregar horarios
        schedule:'Lunes: Cerrado,    Martes-Domingo: 9:00 AM - 4:00 PM',
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.647239869199!2d-89.67673978970667!3d13.979590786379882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62eb1231263fe7%3A0x237b667cc6f57814!2sParque%20Arqueol%C3%B3gico%20Tazumal!5e0!3m2!1ses!2ssv!4v1730694592390!5m2!1ses!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        comments: [] // Array para almacenar comentarios
    },
    // {
    //     id: 11,
    //     title: "Casa Blanca",
    //     modalId: "modal11",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "Casa Blanca es un sitio arqueológico ubicado en el departamento de Morazán, El Salvador, que ofrece una mirada fascinante a la cultura maya y sus asentamientos en la región. Con sus impresionantes estructuras y artefactos, Casa Blanca es un lugar clave para comprender la historia precolombina y la vida cotidiana de los antiguos habitantes de Mesoamérica. ",
    //     modalContent: "Casa Blanca es un notable sitio arqueológico situado en el departamento de Morazán, El Salvador, que forma parte de la rica herencia cultural de la civilización maya. Este sitio, que data de aproximadamente 200 d.C., es conocido por sus bien conservadas estructuras arquitectónicas, incluyendo plataformas, pirámides y plazas que evidencian la complejidad de la vida urbana maya. La importancia de Casa Blanca radica no solo en sus edificaciones, sino también en los artefactos hallados en el lugar, que incluyen cerámica, herramientas de piedra y restos de ofrendas ceremoniales, los cuales proporcionan valiosas pistas sobre la vida cotidiana, las prácticas religiosas y la organización social de sus antiguos habitantes.",
    //     mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.506377600965!2d-89.67382418970647!3d13.987961886372396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62eb6df82da9fb%3A0x221b7a610c4529d0!2sParque%20Arqueol%C3%B3gico%20de%20Casa%20Blanca!5e0!3m2!1ses!2ssv!4v1730697352201!5m2!1ses!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 12,
    //     title: "Joya de Ceren",
    //     modalId: "modal12",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "Joya de Cerén es un fascinante sitio arqueológico en El Salvado",
    //     modalContent:"Descubierto en 1976, este antiguo asentamiento maya data del siglo VI y fue cubierto por una erupción del volcán Caldera de San Salvador, lo que preservó una gran parte de su arquitectura y artefactos. El sitio proporciona una visión única de la vida cotidiana de los mayas, mostrando cómo era su entorno doméstico y social. ",
    //     mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1851102472638!2d-89.36110415824601!3d13.827920552054218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63212948c652f9%3A0xec9e4347bf5da646!2sParque%20Arqueol%C3%B3gico%20Joya%20de%20Cer%C3%A9n!5e0!3m2!1ses!2ssv!4v1730697700720!5m2!1ses!2ssv" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     comments: [] // Array para almacenar comentarios
    // }, 
    // {
    //     id: 13,
    //     title: "Ruinas de San Andres",
    //     modalId: "modal13",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "Las ruinas de San Andrés, en El Salvador, son un importante sitio arqueológico maya que destaca por sus impresionantes estructuras ceremoniales y residenciales. Este antiguo centro político y religioso ofrece una fascinante ventana a la cultura y la vida de las civilizaciones mesoamericanas que habitaron la región. ",
    //     modalContent: "San Andrés es uno de los principales sitios arqueológicos de El Salvador, ubicado en el Valle de Zapotitán, y fue un importante centro político y ceremonial maya entre los años 600 y 900 d.C. Este lugar, rodeado de un hermoso paisaje natural, alberga diversas estructuras, incluyendo pirámides, plazas y una acrópolis, que revelan la sofisticación y organización de las comunidades que habitaron la región. Entre sus estructuras más notables se encuentra la pirámide principal, que dominaba el complejo y servía como punto focal para las ceremonias religiosas y actividades políticas. ",
    //     mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.686054439655!2d-89.39397628971027!3d13.79778958654298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63274327e121c5%3A0x3358c8e490976ea6!2sParque%20Arqueol%C3%B3gico%20San%20Andr%C3%A9s!5e0!3m2!1ses!2ssv!4v1730697856245!5m2!1ses!2ssv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 14,
    //     title: "",
    //     modalId: "modal14",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 15,
    //     title: "",
    //     modalId: "modal15",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 16,
    //     title: "",
    //     modalId: "modal16",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 17,
    //     title: "",
    //     modalId: "modal17",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 18,
    //     title: "",
    //     modalId: "modal18",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 19,
    //     title: "",
    //     modalId: "modal19",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 20,
    //     title: "",
    //     modalId: "modal20",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 21,
    //     title: "",
    //     modalId: "modal21",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 22,
    //     title: "",
    //     modalId: "modal22",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 23,
    //     title: "",
    //     modalId: "modal23",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },
    // {
    //     id: 24,
    //     title: "",
    //     modalId: "modal24",
    //     image: "",
    //     gallery: [
    //         "",
    //         "",
    //         "",
    //         "",
    //         "i"
    //     ],
    //     description: "",
    //     modalContent: "",
    //     mapIframe: '',
    //     comments: [] // Array para almacenar comentarios
    // },


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


// ----------------------------------------------------
// ----------------------------------------------------

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
                         <!-- Si tienes información de contacto -->
                            <div class="info-contacto">
                                <i class="fas fa-phone"></i>
                                <span>${dest.contact || 'Contacto no disponible'}</span>
                            </div>

                            <!-- Si tienes horarios -->
                            <div class="horarios">
                                <span>Horario:</span>
                                <span>${dest.schedule || 'Horario no disponible'}</span>
                            </div>

                        <!-- Mapa -->
                        <div class="map-container">
                            ${dest.mapIframe}
                        </div>
                        <!-- Formulario de comentarios -->
                        <h6>Deja tu opinión:</h6>
                        <textarea id="commentInput${dest.id}" rows="3" placeholder="Escribe tu comentario aquí..."></textarea>
                        <button class="btn btn-primary" onclick="addComment(${dest.id})">Enviar</button>
                        
                        <!-- Lista de comentarios -->
                        <h6>Comentarios:</h6>
                        <ul id="commentsList${dest.id}">
                            ${dest.comments.map(comment => `<li>${comment}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}


// --------------------------------------------------------
// COMETNARIOS CODIGO
function addComment(destId) {
    const commentInput = document.getElementById(`commentInput${destId}`);
    const commentText = commentInput.value.trim();

    if (commentText === '') {
        alert('Por favor, escribe un comentario antes de enviar.');
        return;
    }

    const destination = destinations.find(dest => dest.id === destId);
    if (destination) {
        destination.comments.push(commentText); // Agregar el comentario al destino
        updateCommentsList(destId); // Actualizar la lista de comentarios
        commentInput.value = ''; // Limpiar el campo de entrada
    }
}

function updateCommentsList(destId) {
    const commentsList = document.getElementById(`commentsList${destId}`);
    const destination = destinations.find(dest => dest.id === destId);

    // Limpiar la lista actual y volver a agregar los comentarios
    commentsList.innerHTML = '';
    destination.comments.forEach(comment => {
        const li = document.createElement('li');
        li.className = 'comment-item'; // Agregar clase para el estilo

        // Crear un icono de usuario
        const userIcon = document.createElement('div');
        userIcon.className = 'user-icon';
        userIcon.innerHTML = '<i class="fas fa-user"></i>'; // Usar Font Awesome para el icono de usuario

        li.appendChild(userIcon); // Agregar el icono al comentario
        li.appendChild(document.createTextNode(comment)); // Agregar el texto del comentario
        commentsList.appendChild(li); // Agregar el comentario a la lista
    });
}

// --------------------------------------------------------------------
// mapa 
function iniciarMap() {
    var coord = { lat: -34.5956145, lng: -58.4431949 };
    var map = new google.maps.Map(document.getElementById('map'), {
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
document.getElementById('searchButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir comportamiento por defecto si es necesario
    const input = document.getElementById('searchInput');

    if (input.value.trim() !== '') {
        searchDestinations();
    } else {
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Generar cards para el primer carrusel
    document.getElementById('cardsContainer1').innerHTML = generateCards(destinations1);

    // Generar cards para el segundo carrusel
    document.getElementById('cardsContainer2').innerHTML = generateCards(destinations2);

    // Inicializar el primer carrusel con un intervalo de 5 segundos
    new bootstrap.Carousel(document.getElementById('carouselExample1'), {
        interval: 6000, // 5 segundos
        pause: 'hover',
        ride: 'carousel'
    });

    // Inicializar el segundo carrusel con un intervalo de 7 segundos
    new bootstrap.Carousel(document.getElementById('carouselExample2'), {
        interval: 8000, // 7 segundos
        pause: 'hover',
        ride: 'carousel'
    });
});

// Agregar evento de búsqueda
document.getElementById('searchButton').addEventListener('click', searchDestinations);
document.getElementById('searchInput').addEventListener('input', searchDestinations);
document.getElementById('searchInput').addEventListener('input', searchDestinations);
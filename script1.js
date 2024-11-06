const destinations2 = [
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
        comments: ["hermoso lugar", "Un lugar espectacular"], // Array para almacenar comentarios
        schedule: 'Lunes-Viernes de 7:00am a 4:00pm',
        contact: '7020-2029'
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
        comments: [], // Array para almacenar comentarios
    },
];

function generateCards2(destinations2) {
    let carouselHTML = '';

    destinations2.forEach((dest, index) => {
        const isActive = index === 0 ? 'active' : '';
        carouselHTML += `
            <div class="carousel-item ${isActive}">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="card h-100">
                            <img src="${dest.image}" class="card-img-top" alt="${dest.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${dest.title}</h5>
                                <p class="card-text">${dest.description}</p>
                                <button class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#modal${dest.id}">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    return carouselHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    // Generar cards para el segundo carrusel
    document.getElementById('cardsContainer2').innerHTML = generateCards(destinations2);

    // Inicializar los carruseles
    new bootstrap.Carousel(document.getElementById('carouselExample2'));
});

// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Generar cards para el primer carrusel
    document.getElementById('cardsContainer1').innerHTML = generateCards(destinations1);

    // Generar cards para el segundo carrusel
    document.getElementById('cardsContainer2').innerHTML = generateCards(destinations2);

    // Inicializar el primer carrusel con un intervalo de 6 segundos
    new bootstrap.Carousel(document.getElementById('carouselExample1'), {
        interval: 6000, // 6 segundos
        pause: 'hover',
        ride: 'carousel'
    });

    // Inicializar el segundo carrusel con un intervalo de 8 segundos
    new bootstrap.Carousel(document.getElementById('carouselExample2'), {
        interval: 8000, // 8 segundos
        pause: 'hover',
        ride: 'carousel'
    });
});
// ----------------------------------------------------
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiDkAcwBpAvKI4vfNJDrIK7dmsOMljdjs",
    authDomain: "encuentralo-dcb6e.firebaseapp.com",
    projectId: "encuentralo-dcb6e",
    storageBucket: "encuentralo-dcb6e.firebasestorage.app",
    messagingSenderId: "788098610890",
    appId: "1:788098610890:web:a247d301efe550fcd7a633",
    // measurementId: "G-FGN5DMGE90"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = getAnalytics(app);

// ----------------------------------------------------------------------------

// auth.js
class AuthSystem {
    constructor() {
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        
        // Listener para cambios en el estado de autenticación
        this.auth.onAuthStateChanged(user => {
            if (user) {
                console.log('Usuario logueado:', user.email);
                this.updateUI(true);
            } else {
                console.log('Usuario no logueado');
                this.updateUI(false);
            }
        });
    }

    // Registro de usuario
    async register(email, password, username) {
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            
            // Guardar información adicional del usuario
            await this.db.collection('users').doc(userCredential.user.uid).set({
                username: username,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            return userCredential.user;
        } catch (error) {
            console.error('Error en registro:', error);
            throw error;
        }
    }

    // Inicio de sesión
    async login(email, password) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Error en login:', error);
            throw error;
        }
    }

    // Cerrar sesión
    async logout() {
        try {
            await this.auth.signOut();
        } catch (error) {
            console.error('Error en logout:', error);
            throw error;
        }
    }

    // Actualizar UI basado en estado de autenticación
    updateUI(isLoggedIn) {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const commentForm = document.getElementById('commentForm');
        const logoutButton = document.getElementById('logoutButton');

        if (isLoggedIn) {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            commentForm.style.display = 'block';
            logoutButton.style.display = 'block';
        } else {
            loginForm.style.display = 'block';
            registerForm.style.display = 'block';
            commentForm.style.display = 'none';
            logoutButton.style.display = 'none';
        }
    }
}

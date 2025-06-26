// Lista de platos, con nombre, imagen, precio y descuento
const dishes = [
  {
    name: { es: "Paella Valenciana", en: "Valencian Paella" },
    image: "images/plato1.jpg",
    price: 20,
    discount: 0.15, // 15% de descuento para huéspedes
    description: {
      es: "Arroz con mariscos y pollo tradicional.",
      en: "Traditional rice with seafood and chicken."
    }
  },
  {
    name: { es: "Ensalada César", en: "Caesar Salad" },
    image: "images/plato2.jpg",
    price: 10,
    discount: 0.10,
    description: {
      es: "Fresca y saludable, con aderezo especial.",
      en: "Fresh and healthy, with special dressing."
    }
  },
  {
    name: { es: "Filete de Res", en: "Beef Steak" },
    image: "images/plato3.jpg",
    price: 25,
    discount: 0.12,
    description: {
      es: "Corte premium a la parrilla.",
      en: "Premium grilled cut."
    }
  }
];

// Idioma por defecto (puedes cambiar a 'en')
let language = 'es';

// Función para renderizar el menú
function renderMenu() {
  const menu = document.getElementById('menu-list');
  menu.innerHTML = '';

  dishes.forEach(dish => {
    // Calcula el precio con descuento
    const discountPrice = (dish.price * (1 - dish.discount)).toFixed(2);
    // Tarjeta del plato
    menu.innerHTML += `
      <div class="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl">
        <img src="${dish.image}" alt="${dish.name[language]}" class="h-36 w-36 object-cover rounded-xl mb-2 shadow" />
        <h4 class="text-lg font-semibold text-blue-800 mb-1">${dish.name[language]}</h4>
        <p class="text-sm text-gray-600 mb-2">${dish.description[language]}</p>
        <div class="flex flex-col items-center w-full">
          <span class="text-gray-500 text-sm mb-1">
            <span>Precio / Price:</span>
            <span class="line-through mx-2">$${dish.price}</span>
          </span>
          <span class="text-green-600 font-bold text-lg mb-1">
            <span>Descuento Huésped / Guest Discount:</span> $${discountPrice}
          </span>
        </div>
        <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded mt-2 text-xs">
          ${Math.round(dish.discount * 100)}% OFF
        </span>
      </div>
    `;
  });
}

// Opción: Botón para cambiar idioma
function addLanguageSwitch() {
  const header = document.querySelector('header');
  const langBtn = document.createElement('button');
  langBtn.className = "ml-4 bg-blue-200 text-blue-900 px-3 py-1 rounded-xl shadow font-bold hover:bg-blue-300 transition";
  langBtn.innerText = language === 'es' ? 'English' : 'Español';
  langBtn.onclick = () => {
    language = language === 'es' ? 'en' : 'es';
    langBtn.innerText = language === 'es' ? 'English' : 'Español';
    renderMenu();
    // Cambiar títulos principales
    document.querySelector('h1').innerText = language === 'es' ? 'Menú del Hotel' : 'Hotel Menu';
    document.querySelector('h2').innerText = language === 'es' ? 'Hotel Menu' : 'Menú del Hotel';
    document.querySelector('h3').innerText = language === 'es' ? 'Nuestros Platos' : 'Our Dishes';
    document.querySelector('p.text-gray-600').innerText = language === 'es'
      ? 'Disfruta una selección especial para huéspedes'
      : 'Enjoy a special selection for guests';
    document.querySelector('footer').innerHTML = language === 'es'
      ? '© 2025 Hotel Elegante · Todos los derechos reservados / All rights reserved'
      : '© 2025 Hotel Elegante · All rights reserved / Todos los derechos reservados';
  };
  header.appendChild(langBtn);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  addLanguageSwitch();
});

const products = [
    { id: 1, title: "Customizable Text Stamp", description: "Sello personalizable para arcilla, jabón, cuero o tinta.", image_url: "https://makerworld.bblmw.com/makerworld/model/US88c97b49f0e685/design/2cb65fc2cf85c763.jpeg?x-oss-process=image/resize,w_1000/format,webp", rating: 4.9, print_time_hours: 1.2, weight_grams: 30 },
    { id: 2, title: "12-in-1 Multi Fidget Toy", description: "El juguete fidget definitivo.", image_url: "https://makerworld.bblmw.com/makerworld/model/USc20979a625bd/design/90d5df7063735dae.png?x-oss-process=image/resize,w_1000/format,webp", rating: 4.8, print_time_hours: 2.1, weight_grams: 50 },
    { id: 3, title: "Super Loud 6 Tone Whistle", description: "Silbato de alta ingeniería acústica.", image_url: "https://makerworld.bblmw.com/makerworld/model/US1ae8add6261f97/design/16f53e540d58fbb0.png?x-oss-process=image/resize,w_1000/format,webp", rating: 4.8, print_time_hours: 0.73, weight_grams: 12 },
    { id: 4, title: "NASA Fabric Globe", description: "Globo terráqueo con textura de tela NASA.", image_url: "https://makerworld.bblmw.com/makerworld/model/US5d62c2366998be/design/1035d4323acd51e1.gif?x-oss-process=image/resize,w_1000/format,webp", rating: 5.0, print_time_hours: 11.1, weight_grams: 180 },
    { id: 5, title: "Side-Release Buckle", description: "Hebilla de liberación lateral paramétrica.", image_url: "https://makerworld.bblmw.com/makerworld/model/USbb64a2f157a271/design/be13e41cc22c68e1.png?x-oss-process=image/resize,w_400/format,webp", rating: 4.7, print_time_hours: 0.22, weight_grams: 8 }
];
const config = { precioKg: 25, gananciaPorcentaje: 50, costoElectricidadHora: 0.03, tipoCambio: 40 };
function calcularPrecio(peso, tiempo) {
    const costoMaterial = (peso / 1000) * config.precioKg;
    const costoLuz = tiempo * config.costoElectricidadHora;
    let recupero = 1.0; if (peso > 10 && peso < 40) recupero = 2.0; else if (peso >= 40) recupero = 3.0;
    let mantenimiento = 0.3; if (peso > 10 && peso < 40) mantenimiento = 0.5; else if (peso >= 40) mantenimiento = 1.0;
    const totalUSD = (costoMaterial + costoLuz + recupero + mantenimiento) * (1 + config.gananciaPorcentaje / 100);
    return { uyu: Math.round(totalUSD * config.tipoCambio) };
}
function renderProducts() {
    const grid = document.getElementById('product-grid');
    products.forEach(p => {
        const precio = calcularPrecio(p.weight_grams, p.print_time_hours);
        grid.innerHTML += `
            <div class="product-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <img src="${p.image_url}" alt="${p.title}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h4 class="text-xl font-bold mb-2">${p.title}</h4>
                    <p class="text-gray-500 text-sm mb-4">${p.description}</p>
                    <div class="flex justify-between border-t pt-4">
                        <span class="text-2xl font-black">$${precio.uyu} UYU</span>
                        <button class="bg-blue-600 text-white p-2 rounded-lg"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>`;
    });
}
document.addEventListener('DOMContentLoaded', renderProducts);

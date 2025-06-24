const planes = [
  {
    nombre: "X-Standard",
    velocidad: "300 MEGAS",
    precioTC: "$18,99 por 12 meses - Luego $21,99",
    precioOtro: "$21,99 por 12 meses - Luego $23,50",
    incluye: [
      "+50 canales nacionales e internacionales",
      "WIFI 6",
      "Fútbol incluido"
    ],
    whatsapp: "https://wa.me/593998514931"
  },
  {
    nombre: "X-Pro",
    velocidad: "400 MEGAS",
    precioTC: "$23,00 por 12 meses - Luego $26,00",
    precioOtro: "$26,00 indefinido",
    incluye: [
      "+50 canales nacionales e internacionales",
      "WIFI 6",
      "1 zona Wifi 6 adicional",
      "Fútbol incluido"
    ],
    whatsapp: "https://wa.me/593998514931"
  },
  {
    nombre: "X-Plus",
    velocidad: "500 MEGAS",
    precioTC: "$27,00 por 12 meses - Luego $31,50",
    precioOtro: "$31,50 indefinido",
    incluye: [
      "+50 canales nacionales e internacionales",
      "WIFI 6",
      "1 zona Wifi 6 adicional",
      "Fútbol incluido"
    ],
    whatsapp: "https://wa.me/593998514931"
  },
  {
    nombre: "X-Premium",
    velocidad: "750 MEGAS",
    precioTC: "$34,50 indefinido",
    precioOtro: "$40,00 indefinido",
    incluye: [
      "+100 canales nacionales e internacionales",
      "WIFI 6",
      "1 zona Wifi 6 adicional",
      "Fútbol incluido"
    ],
    whatsapp: "https://wa.me/593998514931"
  },
  {
    nombre: "X-Super Premium",
    velocidad: "850 MEGAS",
    precioTC: "$44,99 por 12 meses - Luego $55,00",
    precioOtro: "$55,00 indefinido",
    incluye: [
      "+100 canales nacionales e internacionales",
      "WIFI 6",
      "2 zonas Wifi 6 adicionales",
      "Fútbol incluido"
    ],
    whatsapp: "https://wa.me/593998514931"
  }
];

const container = document.getElementById("planes");

planes.forEach(plan => {
  const card = document.createElement("div");
  card.className = "plan-card";

  const mensaje = `Hola, deseo más información sobre el plan ${plan.nombre} (${plan.velocidad}). Precio con tarjeta: ${plan.precioTC}. Otras formas: ${plan.precioOtro}.`;
  const enlaceWhatsApp = `${plan.whatsapp}?text=${encodeURIComponent(mensaje)}`;

  card.innerHTML = `
    <h2>${plan.nombre}</h2>
    <p><strong>Velocidad:</strong> ${plan.velocidad}</p>
    <p><strong>Precio (Tarjeta de Crédito):</strong> ${plan.precioTC}</p>
    <p><strong>Precio (Otras formas de pago):</strong> ${plan.precioOtro}</p>
    <a class="leer-mas" href="#" style="display:inline-block; margin-top: 10px; color:#ffe600; text-decoration:underline;">Leer más</a>
    <div class="plan-details">
      <ul>${plan.incluye.map(i => `<li>${i}</li>`).join("")}</ul>
      <button onclick="window.open('${enlaceWhatsApp}', '_blank')">Seleccionar Plan</button>
    </div>
  `;

  const detail = card.querySelector(".plan-details");
  const leerMas = card.querySelector(".leer-mas");

  leerMas.addEventListener("click", (e) => {
    e.preventDefault();
    const isVisible = detail.style.display === "block";
    detail.style.display = isVisible ? "none" : "block";
    leerMas.textContent = isVisible ? "Leer más" : "Leer menos";
  });

  container.appendChild(card);
});
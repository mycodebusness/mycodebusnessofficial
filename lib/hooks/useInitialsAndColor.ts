// Liste étendue des couleurs TailwindCSS en valeurs hexadécimales
const tailwindColors: string[] = [
  "#C53030",
  "#9B2C2C",
  "#742A2A", // red-700, red-800, red-900
  "#DD6B20",
  "#C05621",
  "#9C4221", // orange-700, orange-800, orange-900
  "#D69E2E",
  "#B7791F",
  "#975A16", // yellow-700, yellow-800, yellow-900
  "#2F855A",
  "#276749",
  "#22543D", // green-700, green-800, green-900
  "#2B6CB0",
  "#2C5282",
  "#2A4365", // blue-700, blue-800, blue-900
  "#319795",
  "#2C7A7B",
  "#285E61", // teal-700, teal-800, teal-900
  "#5A67D8",
  "#4C51BF",
  "#434190", // indigo-700, indigo-800, indigo-900
  "#805AD5",
  "#6B46C1",
  "#553C9A", // purple-700, purple-800, purple-900
  "#D53F8C",
  "#B83280",
  "#97266D", // pink-700, pink-800, pink-900
  "#4A5568",
  "#2D3748",
  "#1A202C", // gray-700, gray-800, gray-900
];

interface InitialsAndColorResult {
  initials: string;
  color: string;
}

const getInitialsAndColor = (input: string): InitialsAndColorResult => {
  if (!input) {
    return { initials: "", color: "#718096" }; // Default gray color
  }

  const words = input.trim().split(" ");
  let initials: string;

  if (words.length > 1) {
    // Si c'est un nom complet
    initials = `${words[0][0]}${words[1][0]}`;
  } else {
    // Si c'est un mot unique
    initials = input.substring(0, 2);
  }

  // Convertir les initiales en majuscule
  initials = initials.toUpperCase();

  // Calculer l'index pour la couleur
  const colorIndex1 = initials.charCodeAt(0) % tailwindColors.length;
  const colorIndex2 = initials.charCodeAt(1) % tailwindColors.length;
  const combinedIndex = (colorIndex1 + colorIndex2) % tailwindColors.length;

  return { initials, color: tailwindColors[combinedIndex] };
};

export default getInitialsAndColor;

const COLORS = [
  "#1565c0", "#0277bd", "#00838f", "#2e7d32",
  "#6a1b9a", "#ad1457", "#c62828", "#e65100",
  "#4527a0", "#00695c", "#283593", "#558b2f",
  "#1976d2", "#0288d1", "#0097a7", "#388e3c",
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function generateAvatar(fullName, userName) {
  const initial = (fullName?.[0] || userName?.[0] || "?").toUpperCase();
  const bg = COLORS[hashString(userName) % COLORS.length];

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">`,
    `<rect width="120" height="120" rx="60" fill="${bg}"/>`,
    `<text x="60" y="60" font-family="system-ui,sans-serif" font-size="54"`,
    ` font-weight="700" fill="white" text-anchor="middle" dominant-baseline="central">`,
    `${initial}</text>`,
    `</svg>`,
  ].join("");

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

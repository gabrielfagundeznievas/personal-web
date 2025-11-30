const CAREER_START = new Date(2022, 7, 20); // Agosto 2022 (mes 7 = agosto, 0-indexed)

interface Version {
  major: number;
  minor: number;
  patch: number;
  formatted: string;
}

export function calculateVersion(): Version {
  const now = new Date();

  let years = now.getFullYear() - CAREER_START.getFullYear();
  let months = now.getMonth() - CAREER_START.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Calcular dias restantes del mes actual
  let days = now.getDate() - CAREER_START.getDate();
  if (days < 0) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
    // Dias del mes anterior
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Convertir dias restantes a semanas
  const weeks = Math.floor(days / 7);

  return {
    major: years,
    minor: months,
    patch: weeks,
    formatted: `v${years}.${months}.${weeks}`
  };
}

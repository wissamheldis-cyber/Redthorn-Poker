export const MOCK_SESSIONS = [
  {
    id: "ses-1",
    date: "2026-03-16",
    duration: "2h 15m",
    handsAnalyzed: 450,
    format: "NL50 6-Max",
    net: 125.50,
    bb100: 11.2,
    leakOccurrences: 12,
    goodDecisions: 28,
  },
  {
    id: "ses-2",
    date: "2026-03-14",
    duration: "3h 00m",
    handsAnalyzed: 650,
    format: "NL50 6-Max",
    net: -45.00,
    bb100: -2.8,
    leakOccurrences: 24,
    goodDecisions: 15,
  }
];

export const MOCK_LEAKS = [
  {
    id: "l-1",
    title: "C-Bet au Flop trop fréquent hors de position",
    description: "Vous misez au flop en premier de parole dans des situations où le range adverse a l'avantage (ex: boards très connectés).",
    severity: "high" as const,
    costEstimate: "-4.5 bb/100",
    frequency: "18 occurrences"
  },
  {
    id: "l-2",
    title: "Fold vs 3-Bet insuffisant en BB",
    description: "Résistance excessive face aux relances préflop en Big Blind avec des mains marginales qui ne réalisent pas leur équité.",
    severity: "medium" as const,
    costEstimate: "-2.1 bb/100",
    frequency: "12 occurrences"
  },
  {
    id: "l-3",
    title: "Sizing de Value imprécis à la River",
    description: "Tendance à utiliser des sizings trop faibles en pur value, manquant l'opportunité de rentabiliser au maximum vos nuts.",
    severity: "low" as const,
    costEstimate: "-1.2 bb/100",
    frequency: "5 occurrences"
  }
];

export const MOCK_USER_PROFILE = {
  nickname: "GrindMaster",
  mainFormat: "Cash Game 6-Max",
  longTermGoal: "Atteindre la NL200",
  progressionScore: 78,
  traits: {
    aggression: 85,
    discipline: 60,
    adaptation: 75,
    emotionalControl: 65,
  },
  recommendedMentor: "calculator"
};

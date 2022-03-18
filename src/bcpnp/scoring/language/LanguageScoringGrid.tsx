type LanguageScoringGridType = Readonly<{
  [scoringDesc: string]: number;
}>;

const LanguageScoringGrid: LanguageScoringGridType = Object.freeze({
  "10+": 30,
  "9": 26,
  "8": 22,
  "7": 18,
  "6": 14,
  "5": 10,
  "4": 6,
  "Below 4": 0,
  "No test": 0,
  "Maximum Score": 50,
});

export default LanguageScoringGrid;
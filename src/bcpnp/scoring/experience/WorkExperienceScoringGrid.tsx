type WorkExperienceScoringGridType = Readonly<{
  Basic: Readonly<{
    [basicVal: string]: number,
  }>,
  Additional: Readonly<{
    [additionalVal: string]: Readonly<{desc: string, score: number}>,
  }>,
  'Maximum Score': number;
}>;

const WorkExperienceScoringGrid: WorkExperienceScoringGridType = Object.freeze({
  Basic: Object.freeze({
    "60+ months": 15,
    "48 to 59 months": 12,
    "36 to 47 months": 9,
    "24 to 35 months": 6,
    "12 months to 23 months": 3,
    "Less than 12 months": 1,
    "None": 0,
  }),
  Additional: Object.freeze({
    'oneYearPlusCanadianExperience': Object.freeze({
      desc: 'At least 1 year of directly related experience in Canada',
      score: 10,
    }),
  }),
  'Maximum Score': 25,
});

export default WorkExperienceScoringGrid;
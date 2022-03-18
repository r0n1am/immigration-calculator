type JobSkillLevelScoringGridType = Readonly<{
  Basic: Readonly<{
    [basicVal: string]: number,
  }>,
  Additional: Readonly<{
    [additionalVal: string]: Readonly<{desc: string, score: number}>,
  }>,
  'Maximum Score': number,
}>;

const JobSkillLevelScoringGrid: JobSkillLevelScoringGridType = Object.freeze({
  Basic: Object.freeze({
    'NOC Skill Level A (including Skill Type 0)': 25,
    'NOC Skill Level B': 10,
    'NOC Skill Level C': 5,
    'NOC Skill Level D': 5,
  }),
  // Additional points
  Additional: Object.freeze({
    'noc00': Object.freeze({
      desc: 'Occupation is a "00" NOC',
      score: 15
    }),
    'fullTimeForBcEmployer': Object.freeze({
      desc: 'Currently working full-time in B.C. for the employer in the occupation identified in the BC PNP registration',
      score: 10,
    }),
  }),
  // max score
  'Maximum Score': 50,
});

export default JobSkillLevelScoringGrid;
type EducationScoringGridType = Readonly<{
  Basic: Readonly<{
    [basicVal: string]: number,
  }>,
  Additional: Readonly<{
    [additionalVal: string]: Readonly<{desc: string, score: number}>,
  }>,
  'Maximum Score': number;
}>;

const EducationScoringGrid: EducationScoringGridType = Object.freeze({
  Basic: Object.freeze({
    "Master’s or Doctorate/PhD": 17,
    "Postgraduate Certificate or Diploma*": 11,
    "Bachelor’s Degree": 11,
    "Post-secondary Diploma/Certificate (Trades)**": 11,
    "Associate Degree": 4,
    "Post-secondary Diploma/Certificate (Non-trades)": 2,
    "Secondary School (High School) or Less": 0,
  }),
  Additional: Object.freeze({
    "bcPostSecondaryEducationCompleted": Object.freeze({
      desc: "Post-secondary education completed in B.C.",
      score: 8,
    }),
    caPostSecondaryEducationCompleted: Object.freeze({
      desc: "Post-secondary education completed in Canada (outside of B.C.)",
      score: 6,
    }),
    eca: Object.freeze({
      desc: "Educational Credential Assessment from a qualified supplier",
      score: 4,
    }),
    itabcCompleted: Object.freeze({
      desc: "Successfully completed the Industry Training Authority British Columbia (ITABC’s) challenge certification process",
      score: 4,
    }),
  }),
  'Maximum Score': 25,
});

export default EducationScoringGrid;
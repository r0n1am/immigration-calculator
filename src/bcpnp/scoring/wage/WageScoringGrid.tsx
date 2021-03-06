type WageScoringGridType = Readonly<{
  [scoringDesc: string]: number;
}>;

const WageScoringGrid: WageScoringGridType = Object.freeze({
  "$100,000 and above": 50,
  "$97,500 to $99,999": 38,
  "$95,000 to $97,499": 37,
  "$92,500 to $94,999": 36,
  "$90,000 to $92,499": 35,
  "$87,500 to $89,999": 34,
  "$85,000 to $87,499": 33,
  "$82,500 to $84,999": 32,
  "$80,000 to $82,499": 31,
  "$77,500 to $79,999": 30,
  "$75,000 to $77,499": 29,
  "$72,500 to $74,999": 28,
  "$70,000 to $72,499": 27,
  "$67,500 to $69,999": 26,
  "$65,000 to $67,499": 25,
  "$62,500 to $64,999": 24,
  "$60,000 to $62,499": 23,
  "$57,500 to $59,999": 22,
  "$55,000 to $57,499": 21,
  "$52,500 to $54,999": 20,
  "$50,000 to $52,499": 19,
  "$47,500 to $49,999": 18,
  "$45,000 to $47,499": 17,
  "$42,500 to $44,999": 16,
  "$40,000 to $42,499": 15,
  "$38,750 to $39,999": 14,
  "$37,500 to $38,749": 13,
  "$36,250 to $37,499": 12,
  "$35,000 to $36,249": 11,
  "$33,750 to $34,999": 10,
  "$32,500 to $33,749": 9,
  "$31,250 to $32,499": 8,
  "$30,000 to $31,249": 7,
  "$28,750 to $29,999": 6,
  "$27,500 to $28,749": 5,
  "$26,250 to $27,499": 4,
  "$25,000 to $26,249": 3,
  "Less than $25,000": 0,
  "Maximum Score": 50,
});

export default WageScoringGrid;
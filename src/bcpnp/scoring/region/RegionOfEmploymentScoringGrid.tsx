type RegionOfEmploymentScoringGridType = Readonly<{
  [scoringDesc: string]: number;
}>;

const RegionOfEmploymentScoringGrid: RegionOfEmploymentScoringGridType = Object.freeze({
  "Stikine, Central Coast, Northern Rockies, Mount Waddington, Skeena-Queen Charlotte, Powell River, Sunshine Coast, Kootenay-Boundary, AlberniClayoquot": 10,
  "Kitimat-Stikine, Bulkley-Nechako, Squamish-Lillooet, Strathcona, ColumbiaShuswap, East Kootenay": 8,
  "Peace River, Comox Valley, Cariboo, Central Kootenay": 6,
  "Okanagan-Similkameen, Cowichan Valley, North Okanagan, Fraser-Fort George": 4,
  "Thompson-Nicola, Nanaimo, Central Okanagan": 2,
  "Capital, Fraser Valley": 2,
  "Greater Vancouver": 0,
  "Maximum Score": 50,
});

export default RegionOfEmploymentScoringGrid;
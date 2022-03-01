import ScoringDataProfile from "./ScoringDataProfile";
import * as calculation from './ScoringCalculation';
import ScoringFactorDescription from "./ScoringFactorDescription";
import { Renderable } from "../common/Renderable";

enum ScoringSection {
  EconomicFactors = 'Economic Factors',
  HumanCapitalFactors = 'Human Capital Factors',
};

enum ScoringFactorName {
  JobSkillLevel = 'Job Skill Level',
  Wage = 'Wage',
  RegionOfEmployment = 'Region of Employment',
  WorkExperience = 'Directly Related Work Experience',
  Education = 'Highest Level of Education',
  Language = 'Language',
}

type ScoringFactor = {
  scoringSection: ScoringSection;
  scoringFactorName: ScoringFactorName;
  scoringFactorDesc: Renderable;
  calculation: (data : ScoringDataProfile) => number;
}

function createScoringFactor(
  scoringSection: ScoringSection,
  scoringFactorName : ScoringFactorName,
  scoringFactorDesc: Renderable,
  calculation: (data : ScoringDataProfile) => number,
) : ScoringFactor {
  return {scoringSection, scoringFactorName, scoringFactorDesc, calculation};
}

const tempScoringFactors:any = {};

tempScoringFactors[ScoringFactorName.JobSkillLevel] =
  createScoringFactor(ScoringSection.EconomicFactors, ScoringFactorName.JobSkillLevel, ScoringFactorDescription.JobSkillLevel, calculation.jobSkillLevelCalculator);

tempScoringFactors[ScoringFactorName.Wage] =
  createScoringFactor(ScoringSection.EconomicFactors, ScoringFactorName.Wage, ScoringFactorDescription.Wage, calculation.wageCalculator);

tempScoringFactors[ScoringFactorName.RegionOfEmployment] =
  createScoringFactor(ScoringSection.EconomicFactors, ScoringFactorName.RegionOfEmployment, ScoringFactorDescription.RegionalOfEmployment, calculation.regionCalculator);

tempScoringFactors[ScoringFactorName.WorkExperience] =
  createScoringFactor(ScoringSection.HumanCapitalFactors, ScoringFactorName.WorkExperience, ScoringFactorDescription.WorkExperience, calculation.workExperienceCalculator);

tempScoringFactors[ScoringFactorName.Education] =
  createScoringFactor(ScoringSection.HumanCapitalFactors, ScoringFactorName.Education, ScoringFactorDescription.Education, calculation.educationCalculator);

tempScoringFactors[ScoringFactorName.Language] =
  createScoringFactor(ScoringSection.HumanCapitalFactors, ScoringFactorName.Language, ScoringFactorDescription.Language, calculation.languageCalculor);

const ScoringFactors = Object.freeze(tempScoringFactors);

export default ScoringFactor;

export {ScoringFactors, ScoringSection, ScoringFactorName};
import ScoringDataProfile from "./ScoringDataProfile";
import JobSkillLevelScoringGrid from "./scoring-grid/JobSkillLevelScoringGird";
import WageScoringGrid from "./scoring-grid/WageScoringGrid";
import RegionOfEmploymentScoringGrid from "./scoring-grid/RegionOfEmploymentScoringGrid";
import WorkExperienceScoringGrid from "./scoring-grid/WorkExperienceScoringGrid";
import EducationScoringGrid from "./scoring-grid/EducationScoringGrid";
import LanguageScoringGrid from "./scoring-grid/LanguageScoringGrid";

function jobSkillLevelCalculator(data : ScoringDataProfile) : number {
  let score = data.noc in JobSkillLevelScoringGrid.Basic ? JobSkillLevelScoringGrid.Basic[data.noc] : 0;
  score += data.noc00 ? JobSkillLevelScoringGrid.Additional.noc00.score : 0;
  score += data.bcHighDemandOccupations ? JobSkillLevelScoringGrid.Additional.bcHighDemandOccupations.score : 0;
  score += data.fullTimeForBcEmployer ? JobSkillLevelScoringGrid.Additional.fullTimeForBcEmployer.score : 0;

  return Math.min(score, JobSkillLevelScoringGrid["Maximum Score"]);
}

function wageCalculator(data : ScoringDataProfile) : number {
  const score = data.annualWageRange in WageScoringGrid ? WageScoringGrid[data.annualWageRange] : 0;
  return Math.min(score, WageScoringGrid["Maximum Score"]);
}

function regionCalculator(data : ScoringDataProfile) : number {
  const score = data.regionOfEmployment in RegionOfEmploymentScoringGrid ? RegionOfEmploymentScoringGrid[data.regionOfEmployment] : 0;
  return Math.min(score, RegionOfEmploymentScoringGrid["Maximum Score"]);
}

function workExperienceCalculator(data : ScoringDataProfile) : number {
  let score = data.relatedWorkExperience in WorkExperienceScoringGrid.Basic ? WorkExperienceScoringGrid.Basic[data.relatedWorkExperience] : 0;
  score += data.oneYearPlusCanadianExperience ? WorkExperienceScoringGrid.Additional.oneYearPlusCanadianExperience.score : 0;
  return Math.min(score, WorkExperienceScoringGrid["Maximum Score"]);
}

function educationCalculator(data : ScoringDataProfile) : number {
  let score = data.highestEducation in EducationScoringGrid.Basic ? EducationScoringGrid.Basic[data.highestEducation] : 0;
  if (data.bcPostSecondaryEducationCompleted) {
    score += EducationScoringGrid.Additional.bcPostSecondaryEducationCompleted.score;
  } else if (data.caPostSecondaryEducationCompleted) {
    score += EducationScoringGrid.Additional.caPostSecondaryEducationCompleted.score;
  } else if (data.eca) {
    score += EducationScoringGrid.Additional.eca.score;
  } else if (data.itabcCompleted) {
    score += EducationScoringGrid.Additional.itabcCompleted.score;
  }
  return Math.min(score, EducationScoringGrid["Maximum Score"]);
}

function languageCalculor(data : ScoringDataProfile) : number {
  const score = data.language in LanguageScoringGrid ? LanguageScoringGrid[data.language] : 0;
  return Math.min(score, LanguageScoringGrid["Maximum Score"]);
}

export {jobSkillLevelCalculator, wageCalculator, regionCalculator, workExperienceCalculator, educationCalculator, languageCalculor};
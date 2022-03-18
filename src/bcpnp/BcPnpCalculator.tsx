import React from "react";
import RowData from "../common/RowData";
import ScoringDataProfile from "./scoring/ScoringDataProfile";
import ScoringFactor, { ScoringFactorName, ScoringFactors } from "./scoring/ScoringFactor";
import DataComponentProp from "../common/DataComponentProp";
import CollapsibleTable from "../common/CollapsibleTable";
import JobSkillLevelDialogRaw from "./scoring/jobskill/JobSkillLevelDialogRaw";
import WageDialogRaw from "./scoring/wage/WageDialogRaw";
import RegionOfEmploymentDialogRaw from "./scoring/region/RegionOfEmploymentDialogRaw";
import WorkExperienceDialogRaw from "./scoring/experience/WorkExperienceDialogRaw";
import EducationDialogRaw from "./scoring/education/EducationDialogRaw";
import LanguageDialogRaw from "./scoring/language/LanguageDialogRaw";

function createRowData(
  scoringFactor: ScoringFactor,
  rowEditComponent: React.ComponentType<DataComponentProp<ScoringDataProfile>>,
  scoreData: ScoringDataProfile[]
) : RowData<ScoringDataProfile> {
  return {
    scoringSection: scoringFactor.scoringSection,
    name: scoringFactor.scoringFactorName,
    desc: scoringFactor.scoringFactorDesc,
    rowValueCalculator: scoringFactor.calculation,
    rowEditComponent,
    scoreData
  };
}

function createRowDataList(profiles: ScoringDataProfile[]): RowData<ScoringDataProfile>[] {
  return [
    createRowData(ScoringFactors[ScoringFactorName.JobSkillLevel], JobSkillLevelDialogRaw, profiles),
    createRowData(ScoringFactors[ScoringFactorName.Wage], WageDialogRaw, profiles),
    createRowData(ScoringFactors[ScoringFactorName.RegionOfEmployment], RegionOfEmploymentDialogRaw, profiles),
    createRowData(ScoringFactors[ScoringFactorName.WorkExperience], WorkExperienceDialogRaw, profiles),
    createRowData(ScoringFactors[ScoringFactorName.Education], EducationDialogRaw, profiles),
    createRowData(ScoringFactors[ScoringFactorName.Language], LanguageDialogRaw, profiles),
  ];
}

function BcPnpCalculator() {
  const [profiles, setProfiles] = React.useState([new ScoringDataProfile('Profile 1'), new ScoringDataProfile('Profile 2')]);

  const onProfileChange = (profile: ScoringDataProfile) => {
    const newProfiles = profiles.map(oldProfile => {
      if (oldProfile.profileName === profile.profileName) {
        return {...profile};
      }
      return {...oldProfile}
    });
    setProfiles(newProfiles);
  };

  return (
    <CollapsibleTable
      firstColumnHeader="BC PNP Scoring Factor"
      profiles={profiles}
      rowDataListCreator={createRowDataList}
      profileNameExtractor={p => p.profileName}
      ariaLabel="BC PNP SIRS table"
      onProfileChange={onProfileChange}
    />
  )
}

export default BcPnpCalculator;
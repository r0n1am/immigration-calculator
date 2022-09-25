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
import * as _ from 'lodash';

function createRowData(
  scoringFactor: ScoringFactor,
  rowEditComponent: React.ComponentType<DataComponentProp<ScoringDataProfile>>
) : RowData<ScoringDataProfile> {
  return {
    scoringSection: scoringFactor.scoringSection,
    name: scoringFactor.scoringFactorName,
    desc: scoringFactor.scoringFactorDesc,
    rowValueCalculator: scoringFactor.calculation,
    rowEditComponent
  };
}

function createRowDataList(): RowData<ScoringDataProfile>[] {
  return [
    createRowData(ScoringFactors[ScoringFactorName.JobSkillLevel], JobSkillLevelDialogRaw),
    createRowData(ScoringFactors[ScoringFactorName.Wage], WageDialogRaw),
    createRowData(ScoringFactors[ScoringFactorName.RegionOfEmployment], RegionOfEmploymentDialogRaw),
    createRowData(ScoringFactors[ScoringFactorName.WorkExperience], WorkExperienceDialogRaw),
    createRowData(ScoringFactors[ScoringFactorName.Education], EducationDialogRaw),
    createRowData(ScoringFactors[ScoringFactorName.Language], LanguageDialogRaw),
  ];
}

function BcPnpCalculator() {
  const [profiles, setProfiles] = React.useState([new ScoringDataProfile('Profile 1'), new ScoringDataProfile('Profile 2')]);

  const rowData = React.useMemo(() => createRowDataList(), []);
  const onChange = 
    React.useCallback((profile: ScoringDataProfile) => 
      setProfiles(
        oldProfiles => {
          let isChanged = false;
          const newProfiles = oldProfiles.map(oldProfile => {
            if (oldProfile.profileName === profile.profileName
              && !_.isEqual(oldProfile, profile)){
              isChanged = true;
              return {...profile};
            }
            return oldProfile;
          });
          if (isChanged) {
            return newProfiles;
          }
          return oldProfiles;
        }
      )
    , [setProfiles]);

  return (
    <CollapsibleTable
      firstColumnHeader="BC PNP Scoring Factor"
      data={profiles}
      rowData={rowData}
      columnNameExtractor={p => p.profileName}
      ariaLabel="BC PNP SIRS table"
      onChange={onChange}
    />
  )
}

export default BcPnpCalculator;
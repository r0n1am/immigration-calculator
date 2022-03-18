import React from "react";
import DataComponentProp from "../../../common/DataComponentProp";
import ScoringDataProfile from "../ScoringDataProfile";
import JobSkillLevelScoringGrid from './JobSkillLevelScoringGird';
import { RadioGroup, FormControlLabel, Radio, FormLabel, FormGroup, Checkbox } from "@mui/material";
import DefaultDialog from "../../../common/DefaultDialog";

function JobSkillLevelDialogRaw(props: DataComponentProp<ScoringDataProfile>) {
  const { onClose, value: valueProp, open, breakpoint } = props;
  const [value, setValue] = React.useState(valueProp);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleJobSkillLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...(value? value : new ScoringDataProfile('')), noc: event.target.value});
  };

  const handleAdditionalPointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...(value? value : new ScoringDataProfile('')), [event.target.name]: event.target.checked });
  };

  return (
    <DefaultDialog
      id="job-skill-level-dialog"
      title="Skill Level of the B.C. Job Offer"
      breakpoint={breakpoint}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <RadioGroup
        aria-label="job skill level"
        name="job skill level"
        value={value?.noc}
        onChange={handleJobSkillLevelChange}
      >
        {Object.entries(JobSkillLevelScoringGrid.Basic).map(([key, value]) => (
          <FormControlLabel value={key} key={key} control={<Radio />} label={key} />
        ))}
      </RadioGroup>
      <FormLabel component="legend">Additional points</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={value?.noc00} onChange={handleAdditionalPointChange} name="noc00" />}
          label={JobSkillLevelScoringGrid.Additional.noc00.desc}
        />
        <FormControlLabel
          control={<Checkbox checked={value?.fullTimeForBcEmployer} onChange={handleAdditionalPointChange} name="fullTimeForBcEmployer" />}
          label={JobSkillLevelScoringGrid.Additional.fullTimeForBcEmployer.desc}
        />
      </FormGroup>
    </DefaultDialog>
  );
}

export default JobSkillLevelDialogRaw;
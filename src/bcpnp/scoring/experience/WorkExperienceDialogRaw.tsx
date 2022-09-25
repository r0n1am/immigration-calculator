import React from "react";
import DataComponentProp from "../../../common/DataComponentProp";
import ScoringDataProfile from "../ScoringDataProfile";
import WorkExperienceScoringGrid from "./WorkExperienceScoringGrid";
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@mui/material";
import DefaultDialog from "../../../common/DefaultDialog";

function WorkExperienceDialogRaw(props: DataComponentProp<ScoringDataProfile>) {
  const { onClose, value: valueProp, open, breakpoint } = props;
  const [value, setValue] = React.useState(valueProp);

  React.useEffect(() => {
    setValue(valueProp);
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleWorkExperienceLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, relatedWorkExperience: event.target.value});
  };

  const handleAdditionalPointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, [event.target.name]: event.target.checked });
  };

  return (
    <DefaultDialog
      id="work-experience-dialog"
      title="Directly Related Work Experience"
      breakpoint={breakpoint}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <RadioGroup
        aria-label="work experience"
        name="work experience"
        value={value.relatedWorkExperience}
        onChange={handleWorkExperienceLevelChange}
      >
        {Object.entries(WorkExperienceScoringGrid.Basic).map(([key, value]) => (
          <FormControlLabel value={key} key={key} control={<Radio />} label={key} />
        ))}
      </RadioGroup>
      <FormLabel component="legend">Additional points</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={value.oneYearPlusCanadianExperience} onChange={handleAdditionalPointChange} name="oneYearPlusCanadianExperience" />}
          label={WorkExperienceScoringGrid.Additional.oneYearPlusCanadianExperience.desc}
        />
      </FormGroup>
    </DefaultDialog>
  );
}

export default WorkExperienceDialogRaw;
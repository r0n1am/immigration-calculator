import React from "react";
import DataComponentProp from "../../common/DataComponentProp";
import ScoringDataProfile from "../ScoringDataProfile";
import EducationScoringGrid from "../scoring-grid/EducationScoringGrid";
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, FormGroup, Checkbox } from "@mui/material";
import DefaultDialog from "../../common/DefaultDialog";

function EducationDialogRaw(props: DataComponentProp<ScoringDataProfile>) {
  const { onClose, value: valueProp, open, breakpoint } = props;
  const [value, setValue] = React.useState(valueProp);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);
  
  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...(value? value : new ScoringDataProfile('')), highestEducation: event.target.value});
  };

  const handleAdditionalPointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...(value? value : new ScoringDataProfile('')),
      bcPostSecondaryEducationCompleted: false,
      caPostSecondaryEducationCompleted: false,
      eca: false,
      itabcCompleted: false,
      [event.target.name]: event.target.checked
    });
  };

  const {bcPostSecondaryEducationCompleted, caPostSecondaryEducationCompleted, eca, itabcCompleted} = value;

  const additionalPointError =
    [bcPostSecondaryEducationCompleted, caPostSecondaryEducationCompleted, eca, itabcCompleted]
      .filter((v) => v).length !== 1;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  return (
    <DefaultDialog
      id="education-dialog"
      title="Highest Level of Education"
      breakpoint={breakpoint}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <FormControl required component="fieldset">
        <RadioGroup
          aria-label="education level"
          name="work experience"
          value={value?.highestEducation}
          onChange={handleEducationChange}
        >
          {Object.entries(EducationScoringGrid.Basic).map(([key, value]) => (
            <FormControlLabel value={key} key={key} control={<Radio />} label={key} />
          ))}
        </RadioGroup>
      </FormControl>
      <FormLabel component="legend">Additional points</FormLabel>
      <FormControl error={additionalPointError} component="fieldset">
        <FormGroup >
          <FormControlLabel
            control={<Checkbox checked={value?.bcPostSecondaryEducationCompleted} onChange={handleAdditionalPointChange} name="bcPostSecondaryEducationCompleted" />}
            label={EducationScoringGrid.Additional.bcPostSecondaryEducationCompleted.desc}
          />
          <FormControlLabel
            control={<Checkbox checked={value?.caPostSecondaryEducationCompleted} onChange={handleAdditionalPointChange} name="caPostSecondaryEducationCompleted" />}
            label={EducationScoringGrid.Additional.caPostSecondaryEducationCompleted.desc}
          />
          <FormControlLabel
            control={<Checkbox checked={value?.eca} onChange={handleAdditionalPointChange} name="eca" />}
            label={EducationScoringGrid.Additional.eca.desc}
          />
          <FormControlLabel
            control={<Checkbox checked={value?.itabcCompleted} onChange={handleAdditionalPointChange} name="itabcCompleted" />}
            label={EducationScoringGrid.Additional.itabcCompleted.desc}
          />
        </FormGroup>
      </FormControl>
    </DefaultDialog>
  );
}

export default EducationDialogRaw;
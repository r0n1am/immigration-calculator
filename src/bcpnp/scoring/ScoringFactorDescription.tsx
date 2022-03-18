import { Link } from "@mui/material";
import { Renderable } from "../../common/Renderable";

const JobSkillLevel: Renderable =
  <p>
    Determined by the occupation identified in your B.C. job offer.
    Occupation is classified into different levels according to the National Occupational Classification (NOC).
  </p>
;

const Wage: Renderable =
  <p>
    The wage is calculated on an annual basis as outlined in your job offer.
    Please note that you must meet program criteria specific to the wage,
    job offer and minimum income requirements as outlined for Skills Immigration or Express Entry BC.
    Annual wage is calculated using the following: &lt;hourly rate&gt; x &lt;hours worked per week&gt;
    (maximum of 40 hours, or maximum of 60 hours for long-haul truck drivers) x 52 (weeks a year).
    BC PNP will only consider regular gross annual wages.
  </p>
;

const RegionalOfEmployment: Renderable =
  <p>
    This factor recognizes the challenges faced in regional communities to attract and retain workers.
    You must enter the main location of your B.C. work location as identified on your job offer.
    Please visit the
    <Link target="_blank" rel="noreferrer" href="https://governmentofbc.maps.arcgis.com/apps/MapSeries/index.html?appid=d70a0e9d100e4ac18c832988dabb3e51">
    &nbsp;BC Stats website
    </Link> to find the regional district of your employment.
  </p>
;

const WorkExperience: Renderable =
  <p>
    This factor recognizes that individuals with directly related work experience
    have a higher likelihood of successful labour market attachment in B.C. 
  </p>
;

const Education: Renderable = 
  <p>
    Points for education will only be awarded for your highest level of education indicated in the
    registration. For example, if you have a bachelor’s and a master’s degree, you will only be awarded
    points for your master’s degree.
  </p>
;

const Language: Renderable =
  <p>
    This factor recognizes the relationship between English or French language ability and successful
    economic establishment and integration in B.C. 
  </p>
;

const ScoringFactorDescription = Object.freeze({
  JobSkillLevel,
  Wage,
  RegionalOfEmployment,
  WorkExperience,
  Education,
  Language,
});

export default ScoringFactorDescription;

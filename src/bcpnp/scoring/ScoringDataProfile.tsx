export default class ScoringDataProfile {
  constructor(
    public profileName: string,
    //job skill level
    public noc: string = '',
    public noc00: boolean = false,
    public bcHighDemandOccupations: boolean = false,
    public fullTimeForBcEmployer: boolean = false,
    //wage
    public annualWageRange: string = '',
    //region
    public regionOfEmployment: string = '',
    //workExperience
    public relatedWorkExperience: string = '',
    public oneYearPlusCanadianExperience: boolean = false,
    //education
    public highestEducation: string = '',
    public bcPostSecondaryEducationCompleted: boolean = false,
    public caPostSecondaryEducationCompleted: boolean = false,
    public eca: boolean = false,
    public itabcCompleted: boolean = false,
    //language
    public language: string = '',
  ){}
}
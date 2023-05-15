class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    
    static generatePassword() {
      return Math.floor(Math.random()*10000);
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  // console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  // console.log(nurseOlynyk.certifications);
  
  class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
      super(name);
      this._insurance = insurance;
    } 
    
    get insurance() {
      return this._insurance;
    }
    
    addInsurance(newInsurance) {
      this.insurance.push(newInsurance);
    }
  }
  
  const doctorNalini = new Doctor('Meow.Nalini98', []);
  doctorNalini.takeVacationDays(0);
  console.log('Doctor: '+doctorNalini.name)
  console.log('Remaining Vacation Days: '+doctorNalini.remainingVacationDays);
  doctorNalini.addInsurance('PVI 24 hours');
  console.log('Insurance: '+doctorNalini.insurance);
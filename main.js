// ФК Person
function Person(name, age, gender, phoneNumber) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._phoneNumber = phoneNumber;
}
// Методы Person
Person.prototype.setName = function (newName) {
    this._name = newName;
}
Person.prototype.getName = function () {
    return this._name;
}
Person.prototype.setAge = function (newAge) {
    this._age = newAge;
}
Person.prototype.getAge = function () {
    return this._age;
}
Person.prototype.setGender = function (newGender) {
    this._gender = newGender;
}
Person.prototype.getGender = function () {
    return this._gender;
}
Person.prototype.setPhoneNumber = function (newPhoneNumber) {
    this._phoneNumber = newPhoneNumber;
}
Person.prototype.getPhoneNumber = function () {
    return this._phoneNumber;
}

// ФК Patient наследуеться от Person
function Patient(name, age, gender, phoneNumber, acceptedDate, sickness) {
    Person.call(this, name, age, gender, phoneNumber);
    this._acceptedDate = acceptedDate;
    this._sickness = sickness;
}

Patient.prototype = Object.create(Person.prototype);
Patient.prototype.constructor = Patient;

// Методы Patient
Patient.prototype.setAcceptedDate = function (newAcceptedDate) {
    this._acceptedDate = newAcceptedDate;
}
Patient.prototype.getAcceptedDate = function () {
    return this._acceptedDate;
}
Patient.prototype.setSickness = function (newSickness) {
    this._sickness = newSickness;
}
Patient.prototype.getSickness = function () {
    return this._sickness;
}

// ФК Staff наследуеться от Person
function Staff(name, age, gender, phoneNumber, education, sertification) {
    Person.call(this, name, age, gender, phoneNumber);
    this._education = education;
    this._sertification = sertification;
}

Staff.prototype = Object.create(Person.prototype);
Staff.prototype.constructor = Staff;

// Методы Staff
Staff.prototype.setEducation = function (newEducation) {
    this._education = newEducation;
}
Staff.prototype.getEducation = function () {
    return this._education;
}
Staff.prototype.setSertification = function (newSertification) {
    this._sertification = newSertification;
}
Staff.prototype.getSertification = function () {
    return this._sertification;
}

// ФК Doctor наследуеться от Staff
function Doctor(name, age, gender, phoneNumber, education, sertification, speciality, patients) {
    Staff.call(this, name, age, gender, phoneNumber, education, sertification);
    this._speciality = speciality;
    this._patients = [];
}

Doctor.prototype = Object.create(Staff.prototype);
Doctor.prototype.constructor = Doctor;

// Методы Doctor
Doctor.prototype.setSpeciality = function (newSpeciality) {
    this._speciality = newSpeciality;
}
Doctor.prototype.getSpeciality = function () {
    return this._speciality;
}
Doctor.prototype.addPatient = function (newPatient) {
    this._patients.push(newPatient);
}
Doctor.prototype.getPatients = function () {
    return this._patients;
}
Doctor.prototype.removePatient = function (patient) {
    this._patients.forEach((item, index, arr) => {
        if (item == patient) {
            arr.splice(index, 1);
        }
    })
}

// ФК Hospital 
function Hospital(name, address, phone, departments) {
    this._name = name;
    this._address = address;
    this._phone = phone;
    this._departments = [];
}

// Методы Hospital
Hospital.prototype.setName = function (newName) {
    this._name = newName;
}
Hospital.prototype.getName = function () {
    return this._name;
}
Hospital.prototype.setAddress = function (newAddress) {
    this._address = newAddress;
}
Hospital.prototype.getAddress = function () {
    return this._address;
}
Hospital.prototype.setPhone = function (newPhone) {
    this._phone = newPhone;
}
Hospital.prototype.getPhone = function () {
    return this._phone;
}
Hospital.prototype.addDepartment = function (newDepartment) {
    this._departments.push(newDepartment);
}
Hospital.prototype.getDepartments = function () {
    return this._departments;
}
Hospital.prototype.removeDepartment = function (department) {
    this._departments.forEach((item, index, arr) => {
        if (item == department) {
            arr.splice(index, 1);
        }
    })
}

// ФК Department 
function Department(name, staffs) {
    this._name = name;
    this._staffs = [];
}

Department.prototype.setName = function (newName) {
    this._name = newName;
}
Department.prototype.getName = function () {
    return this._name;
}
Department.prototype.addStaff = function (newStaff) {
    this._staffs.push(newStaff);
}
Department.prototype.getStaffs = function () {
    return this._staffs;
}
Department.prototype.removeStaff = function (staff) {
    this._staffs.forEach((item, index, arr) => {
        if (item == staff) {
            arr.splice(index, 1);
        }
    })
}

// let hospital1 = new Hospital("Main Kharkiv Hospital", "Pushkin street", "+38076757473")

// let department1 = new Department("Хирургия");
// let department2 = new Department("Терапия");

// let patient1 = new Patient("Tom", 17, "Man", "+3806456456", "date", "flu");
// let patient2 = new Patient("Ted", 24, "Man", "+3803463634", "date", "angina");
// let patient3 = new Patient("Bob", 63, "Man", "+38023555553", "date", "angina");

// let doctor1 = new Doctor("Jack", 40, "Man", "+38111111", "Harvard Medical School", "International", "Surgeon");
// let doctor2 = new Doctor("Kate", 25, "Female", "+380222222", "Oxford University Medical School", "International", "Therapist");
// let doctor3 = new Doctor("Den", 56, "Man", "+380333333", "Karolinska Institute", "International", "Surgeon");
// let doctor4 = new Doctor("Julia", 33, "Female", "+380444444", "Yale School of Medicine", "International", "Therapist");

// doctor1.addPatient(patient1);
// doctor1.addPatient(patient2);
// doctor4.addPatient(patient3);

// department1.addStaff(doctor1);
// department1.addStaff(doctor2);
// department2.addStaff(doctor3);
// department2.addStaff(doctor4);
// console.log("department1 --->", department1);
// console.log("department2 --->", department2);

// hospital1.addDepartment(department1);
// hospital1.addDepartment(department2);

// console.log("Hospital --->", hospital1);






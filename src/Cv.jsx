import React, {useState} from 'react'
function Cv(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [school, setSchool] = useState("");
    const [study, setStudy] = useState("");
    const [location, setLocation] = useState("");
    const [qualification, setQualification] = useState("");
    const [graduation, setGraduation] = useState("");
    const [job, setJob] = useState("");
    const [employer, setEmployer] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const addName = (e) => {
        setName(e.target.value)
    }

    const addEmail = (e) => {
        setEmail(e.target.value)
    }

    const addPhoneNumber = (e) => {
        setNumber(e.target.value)
    }

    const addSchoolName = (e) => {
        setSchool(e.target.value)
    }

    const addFieldOfStudy = (e) => {
        setStudy(e.target.value)
    }

    const addSchoolLocation = (e) => {
        setLocation(e.target.value)
    }

    const addQualification = (e) => {
        setQualification(e.target.value)
    }

    const addGraduationYear = (e) => {
        setGraduation(e.target.value)
    }

    const addJob = (e) => {
        setJob(e.target.value)
    }

    const addEmployer = (e) => {
        setEmployer(e.target.value)
    }

    const addStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const addEndDate = (e) => {
        setEndDate(e.target.value)
    }

    const addCity = (e) => {
        setCity(e.target.value)
    }

    const addCountry = (e) => {
        setCountry(e.target.value)
    }

    return(
        <>
        <div className="general-information">
            <input type='text' value={name} onChange={addName}/>
            <p>Name: {name}</p>
            <input type="email" value={email} onChange={addEmail}/>
            <p>Email: {email}</p>
            <input value={number} onChange={addPhoneNumber}/>
            <p>Phone Number: {number}</p>
        </div>
        <div className="educational-experience">
            <input type="text" value={school} onChange={addSchoolName}/>
            <p>School Name: {school}</p>
            <input type="text" value={study} onChange={addFieldOfStudy}/>
            <p>Field of study: {study}</p>
            <input type="text" value={location} onChange={addSchoolLocation}/>
            <p>School Location: {location}</p>
            <input type="text" value={qualification} onChange={addQualification} placeholder='e.g. Diploma, Degree, A levels' />
            <p>Qualification: {qualification}</p>
            <input type="text" value={graduation} onChange={addGraduationYear} placeholder='2010'/>
            <p>Graduation Year: {graduation}</p>
        </div>

        <div className="practical-experience">
            <input type="text" value={job} onChange={addJob}/>
            <p>Job Title: {job}</p>
            <input type="text"  value={employer} onChange={addEmployer}/>
            <p>Employer: {employer}</p>
            <input type="text" value={startDate} onChange={addStartDate}/>
            <p>Start Date: {startDate}</p>
            <input type="text" value={endDate} onChange={addEndDate} />
            <p>End Date: {endDate}</p>
            <input type="text" value={city} onChange={addCity} />
            <p>City: {city}</p>
            <input type="text" value={country} onChange={addCountry}/>
            <p>Country: {country}</p>

        </div>
        </>
    )

}
export default Cv
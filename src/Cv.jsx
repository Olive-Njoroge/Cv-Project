import React, {useState} from 'react'
function Cv(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
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

    const addFname = (e) => {
        setFname(e.target.value)
    }

     const addLname = (e) => {
        setLname(e.target.value)
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
        <div className="input">
            <div className="general-information">
            <h1>General Information</h1>
            <p>First Name: {fname}</p>
            <input type='text' value={fname} onChange={addFname}/>
            <p>Last Name: {lname}</p>
            <input type='text' value={lname} onChange={addLname}/>
            <p>Email: {email}</p>
            <input type="email" value={email} onChange={addEmail}/>
            <p>Phone Number: {number}</p>
            <input value={number} onChange={addPhoneNumber}/>
        </div>

        <div className="educational-experience">
            <h1>Education</h1>
            <p>School Name: {school}</p>
            <input type="text" value={school} onChange={addSchoolName}/>
            <p>Field of study: {study}</p>
            <input type="text" value={study} onChange={addFieldOfStudy}/>
            <p>School Location: {location}</p>
            <input type="text" value={location} onChange={addSchoolLocation}/>
            <p>Qualification: {qualification}</p>
            <input type="text" value={qualification} onChange={addQualification} placeholder='e.g. Diploma, Degree, A levels' />
            <p>Graduation Year: {graduation}</p>
            <input type="text" value={graduation} onChange={addGraduationYear} placeholder='2010'/>
        </div>

        <div className="practical-experience">
            <h1>Experience</h1>
            <p>Job Title: {job}</p>
            <input type="text" value={job} onChange={addJob}/>
            <p>Employer: {employer}</p>
            <input type="text"  value={employer} onChange={addEmployer}/>
            <p>Start Date: {startDate}</p>
            <input type="text" value={startDate} onChange={addStartDate}/>
            <p>End Date: {endDate}</p>
            <input type="text" value={endDate} onChange={addEndDate} />
            <p>City: {city}</p>
            <input type="text" value={city} onChange={addCity} />
            <p>Country: {country}</p>
            <input type="text" value={country} onChange={addCountry}/>
        </div>

        <div className="skills">
            <h1>⭐Skills</h1>
            <button>+ Add Skill</button>
        </div>
        </div>

        <div className="cv">
        </div>
        
        </>
    )

}
export default Cv
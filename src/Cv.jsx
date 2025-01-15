import React, {useState} from 'react'
function Cv(){
    const [name, setName] = useState({fName:"", lName: "", email: "", number: ""});
    const [school, setSchool] = useState({name: "", study: "", loaction: "", qualification: "", graduation: ""});
    const [job, setJob] = useState({job: "", employer: "", startDate: "", endDate: "", city: "", country: ""});
    const [skills, setSkills] = useState(["writing", "dxx"]);
    const [isSkillInputVisisble, setIsSkillInputVisible] = useState(false);//toggles visibility
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];  // Get the selected file
        if (file) {
            // Create an object URL and update the state with the photo URL
            setPhoto(URL.createObjectURL(file)); 
        }
    };

    const addFname = (e) => {
        setName(n => ({...n, fName: e.target.value}))
    }

     const addLname = (e) => {
        setName (n => ({...n, lName: e.target.value}))
    }

    const addEmail = (e) => {
        setName(n => ({...n, email: e.target.value}))
    }

    const addPhoneNumber = (e) => {
        setName(n => ({...n, number: e.target.value}))
    }

    const addSchoolName = (e) => {
        setSchool(s => ({...s, name: e.target.value}))
    }

    const addFieldOfStudy = (e) => {
        setSchool(s => ({...s, study:e.target.value}))
    }

    const addSchoolLocation = (e) => {
        setSchool(s => ({...s, location: e.target.value}))
    }

    const addQualification = (e) => {
        setSchool(s => ({...s, qualification: e.target.value}))
    }

    const addGraduationYear = (e) => {
        setSchool(s => ({...s, graduation: e.target.value}))
    }

    const addJob = (e) => {
        setJob(j => ({...j, job: e.target.value}))
    }

    const addEmployer = (e) => {
        setJob(j => ({...j, employer: e.target.value}))
    }

    const addStartDate = (e) => {
        setJob(j => ({...j, startDate: e.target.value}))
    }

    const addEndDate = (e) => {
        setJob(j => ({...j, endDate: e.target.value}))
    }

    const addCity = (e) => {
        setJob(j => ({...j, city: e.target.value}))
    }

    const addCountry = (e) => {
        setJob(j => ({...j, country: e.target.value}))
    }

    const addSkill = () => {
        const newSkill = document.getElementById("newSkill").value;
        document.getElementById("newSkill").value = "";
        setSkills(s => [...s, newSkill]);
        setIsSkillInputVisible(false);//Hide input after adding skill
    }

    const removeSkill = (index) => {
        setSkills(skills.filter((_,i) => i !== index));
    }

    const toggleSkillInput = () => {
        setIsSkillInputVisible(true);//toggle input visibility
    }

    return(
        <>
        <div className="cv-container">
            <div className="input">

                 <div className="photo-upload">
                    <h2>Upload a Photo</h2>
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    {photo && (
                        <div className="photo-preview">
                            {/* Display the uploaded photo */}
                            <img src={photo} alt="Preview" width="150" height="150" />
                        </div>
                    )}
                </div>


            <div className="general-information">
            <h1>General Information</h1>
            
            <p>First Name: {name.fName}</p>
            <input type='text' value={name.fName} onChange={addFname}/>
            <p>Last Name: {name.lName}</p>
            <input type='text' value={name.lName} onChange={addLname}/>
            <p>Email: {name.email}</p>
            <input type="email" value={name.email} onChange={addEmail}/>
            <p>Phone Number: {name.number}</p>
            <input value={name.number} onChange={addPhoneNumber}/>
        </div>

        <div className="educational-experience">
            <h1>Education</h1>
            <p>School Name: {school.name}</p>
            <input type="text" value={school.name} onChange={addSchoolName}/>
            <p>Field of study: {school.study}</p>
            <input type="text" value={school.study} onChange={addFieldOfStudy}/>
            <p>School Location: {school.location}</p>
            <input type="text" value={school.location} onChange={addSchoolLocation}/>
            <p>Qualification: {school.qualification}</p>
            <input type="text" value={school.qualification} onChange={addQualification} placeholder='e.g. Diploma, Degree, A levels' />
            <p>Graduation Year: {school.graduation}</p>
            <input type="text" value={school.graduation} onChange={addGraduationYear} placeholder='2010'/>
        </div>

        <div className="practical-experience">
            <h1>Experience</h1>
            <p>Job Title: {job.job}</p>
            <input type="text" value={job.job} onChange={addJob}/>
            <p>Employer: {job.employer}</p>
            <input type="text"  value={job.employer} onChange={addEmployer}/>
            <p>Start Date: {job.startDate}</p>
            <input type="text" value={job.startDate} onChange={addStartDate}/>
            <p>End Date: {job.endDate}</p>
            <input type="text" value={job.endDate} onChange={addEndDate} />
            <p>City: {job.city}</p>
            <input type="text" value={job.city} onChange={addCity} />
            <p>Country: {job.country}</p>
            <input type="text" value={job.country} onChange={addCountry}/>
        </div>

        <div className="skills">
            <h1>⭐Skills</h1>
            
            
                <ul>
                {skills.map((skill, index) => 
                <li key={index} onClick={() => removeSkill(index)}>{skill}</li>)}
                </ul>
            <div className='skillAddDiv'>
            {isSkillInputVisisble && (
                <div className='add-skill-input'><input type="text" id='newSkill' />
            <button onClick={addSkill}>+</button>
            </div>
            )}

            </div>
            
            

            <button onClick={toggleSkillInput}>+ Add Skill</button>
        </div>
        </div>

         <div className="cv-template">
             {photo && <img src={photo} alt="Uploaded Photo" width="150" height="150"/>}
            <h1>{name.fName} {name.lName}</h1>
            <p>✉{name.email}</p>
            <p>📞{name.number}</p>

            <h2>Education</h2>
            <p>{school.name}</p>
            <p>{school.study}</p>
            <p>{school.location}</p>
            <p>{school.qualification}</p>
            <p>{school.graduation}</p>

            <h2>Experience</h2>
            <p>{job.job}</p>
            <p>{job.employer}</p>
            <p>{job.startDate}</p>
            <p>{job.endDate}</p>
            <p>{job.city}</p>
            <p>{job.country}</p>

            <h2>Skills</h2>
            <p>{skills}</p>
            
        </div>
        </div>
        


       
        

       
        


</>
)
}

export default Cv
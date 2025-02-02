import React, {useState} from 'react'
import arrowDown from './assets/Arrow Down Double Icon _ Stroke _ Standard _  Download on Hugeicons Pro.jpeg'
function Cv(){
    const [name, setName] = useState({fName:"", lName: "", email: "", number: ""});
    const [school, setSchool] = useState({name: "", study: "", loaction: "", qualification: "", graduation: ""});
    const [job, setJob] = useState({job: "", employer: "", startDate: "", endDate: "", city: "", country: ""});
    const [skills, setSkills] = useState(["writing", "dxx"]);
    const [isSkillInputVisisble, setIsSkillInputVisible] = useState(false);//toggles visibility
    const [photo, setPhoto] = useState(null);
    const [about, setAbout] = useState("");
    const [showInputs, setShowInputs] = useState(false);
    const [showOutputs, setShowOutputs] = useState(false);
    const [displayInputs, setDisplayInputs] = useState(false);
    const [skillOutputs, setSkillOutputs] = useState(false);

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

    const enterAbout = (e) => {
        setAbout(e.target.value);
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
            <h1 onClick={() => setDisplayInputs(!displayInputs)} style={{ cursor: "pointer" }}>
                General Information {<img src={arrowDown}></img>}</h1>
            {displayInputs && (
        <>
            
            <input type='text' value={name.fName} onChange={addFname} placeholder='First Name...' required/>
            <input type='text' value={name.lName} onChange={addLname} placeholder='Last Name...' required/>
            <input type="email" value={name.email} onChange={addEmail} placeholder='Email...' required/>
            <input value={name.number} onChange={addPhoneNumber} placeholder='Phone Number...' required/>
            <p>About you: {about}</p>
            <textarea onChange={enterAbout} placeholder='Tell us about you'></textarea>
        </>
        )}

        </div>

        

       {/*} <div className="educational-experience">
            <h1>Education {<img src={arrowDown}></img>}</h1>
            <input type="text" value={school.name} onChange={addSchoolName} placeholder='School Name'/>
            <input type="text" value={school.study} onChange={addFieldOfStudy} placeholder='Field of study...e.g Engineering'/>
            <input type="text" value={school.location} onChange={addSchoolLocation} placeholder='School Location'/>
            <input type="text" value={school.qualification} onChange={addQualification} placeholder='Qualification...e.g. Diploma' />
            <input type="text" value={school.graduation} onChange={addGraduationYear} placeholder='Graduation Year'/>
            <button>Add</button>
            <button>Submit</button>

            
        </div>*/}

         <div className="educational-experience">
      {/* Clicking the H1 toggles visibility */}
      <h1 onClick={() => setShowInputs(!showInputs)} style={{ cursor: "pointer" }}>
        Education <img src={arrowDown} alt="Toggle" />
      </h1>

      {/* Conditionally render inputs */}
      {showInputs && (
        <>
          <input type="text" value={school.name} onChange={addSchoolName} placeholder="School Name" />
          <input type="text" value={school.study} onChange={addFieldOfStudy} placeholder="Field of study...e.g Engineering" />
          <input type="text" value={school.location} onChange={addSchoolLocation} placeholder="School Location" />
          <input type="text" value={school.qualification} onChange={addQualification} placeholder="Qualification...e.g. Diploma" />
          <input type="text" value={school.graduation} onChange={addGraduationYear} placeholder="Graduation Year" />
          <button>Add</button>
          <button>Submit</button>
        </>
      )}
    </div>

        <div className="practical-experience">
            <h1 onClick={() => setShowOutputs(!showOutputs)} style={{ cursor: "pointer" }}>
                Experience {<img src={arrowDown}></img>}</h1>
            {showOutputs && (
                <>
            <input type="text" value={job.job} onChange={addJob} placeholder='Job Title'/>
            <input type="text"  value={job.employer} onChange={addEmployer} placeholder='Employer'/>
            <input type="text" value={job.startDate} onChange={addStartDate} placeholder='Start Date'/>
            <input type="text" value={job.endDate} onChange={addEndDate} placeholder='End Date' />
            <input type="text" value={job.city} onChange={addCity} placeholder='City' />
            <input type="text" value={job.country} onChange={addCountry} placeholder='Country'/>
            <button>Add</button>
            <button>Submit</button>
            </>
            )}
        </div>

        <div className="skills">
            <h1 onClick={() => setSkillOutputs(!skillOutputs)} style={{ cursor: "pointer" }}>
                ⭐Skills {<img src={arrowDown}></img>}</h1>
            {skillOutputs && (
                <>
            
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

            <button>Add</button>
            <button>Submit</button>
           
        

            </div>
            
            

            <button onClick={toggleSkillInput}>+ Add Skill</button>
            </>
            )}
        </div>
        </div>

         <div className="cv-template">
            <div className="general">
                <div className="photo">
                    {photo && <img src={photo} alt="Uploaded Photo" width="150" height="150"/>}
                </div>
            <div className="details">
                <h1>{name.fName} {name.lName}</h1>
            <p>✉{name.email}</p>
            <p>📞{name.number}</p>
            </div>
            </div>

            <hr/>

            <h2>About</h2>
            <p>{about}</p>
            <hr/>
             

            <h2>Education</h2>
            <p>{school.name}</p>
            <p>{school.study}</p>
            <p>{school.location}</p>
            <p>{school.qualification}</p>
            <p>{school.graduation}</p>
            <hr/>



            <h2>Experience</h2>
            <p>{job.job}</p>
            <p>{job.employer}</p>
            <p>{job.startDate}</p>
            <p>{job.endDate}</p>
            <p>{job.city}</p>
            <p>{job.country}</p>
            <hr/>

            <h2>Skills</h2>
            <ul>
                <li>{skills}</li>
            </ul>
            
        </div>
        </div>
        


       
        

       
        


</>
)
}

export default Cv
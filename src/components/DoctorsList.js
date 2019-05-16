import React, { useState, useEffect } from 'react';
import { DoctorList, EachDoctor } from "../styles/styles";

const DoctorsList = ({ doctors }) => {
  
  const [selectedDoc, selectDoc] = useState(undefined);
  
  if (selectedDoc !== undefined) {
    const doctor = doctors.data[selectedDoc];
    return (
      <EachDoctor onClick={() => selectDoc(undefined)}>
        <img src={doctor.profile.image_url} alt={doctor.profile.slug}/>
        <br/>
        <div>
          {`${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.profile.title}`}
        </div>
      </EachDoctor>
    );
  }
  
  return (
    <div>
      <DoctorList id={`doctor-list-container`}>
        {
          doctors.data.map((doc, i) => {
            return (
              <EachDoctor key={i} onClick={() => selectDoc(i)}>
                <img src={doc.profile.image_url} alt={doc.profile.slug}/>
                <br/>
                <p>
                  {`${doc.profile.first_name} ${doc.profile.last_name} ${doc.profile.title}`}
                </p>
              </EachDoctor>
            )
          })
        }
      </DoctorList>
    </div>
  );
};

export default DoctorsList;

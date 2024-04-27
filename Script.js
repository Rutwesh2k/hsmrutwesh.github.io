function addPatient() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const address = document.getElementById('address').value;
    const medicalHistory = document.getElementById('medicalHistory').value;

    const patientList = document.getElementById('patients');
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName} - ${dateOfBirth} - ${gender}`;
    patientList.appendChild(li);

    // Clear form
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('dateOfBirth').value = '';
    document.getElementById('gender').value = 'Male';
    document.getElementById('contactNumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('medicalHistory').value = '';
}

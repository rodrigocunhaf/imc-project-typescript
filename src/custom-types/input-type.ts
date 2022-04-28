type InputTypeForm = {
    inputWeight:HTMLInputElement;
    inputHeight:HTMLInputElement;
    inputCPFPatient:HTMLInputElement;
    inputNamePatient:HTMLInputElement;
    inputDoctorCPF:HTMLInputElement;
    inputMedicalDocument:HTMLInputElement;
    inputDoctorName:HTMLInputElement;

    clearInputs:Function
};


const FormInputs: InputTypeForm = {

    inputWeight:document.getElementById('patient-weight') as HTMLInputElement,
    inputHeight:document.getElementById('patient-height')! as HTMLInputElement,
    inputCPFPatient:document.getElementById('patient-document')! as HTMLInputElement,
    inputNamePatient:document.getElementById('patient-name')! as HTMLInputElement,
    inputDoctorCPF:document.getElementById('doctor-document')! as HTMLInputElement,
    inputMedicalDocument:document.getElementById('doctor-medical')! as HTMLInputElement,
    inputDoctorName:document.getElementById('doctor-name')! as HTMLInputElement,
 
    clearInputs: () => {
        const inputs = document.querySelectorAll('input');
        inputs.forEach ( item =>{
            item.value = '';
        });
    }
};

export { FormInputs , InputTypeForm };
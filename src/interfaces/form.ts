interface IForm <T> {
    inputWeight:HTMLInputElement,
    inputHeight:HTMLInputElement,
    inputCPFPatient:HTMLInputElement,
    inputNamePatient:HTMLInputElement,
    inputDoctorCPF:HTMLInputElement,
    inputMedicalDocument:HTMLInputElement;
    inputDoctorName:HTMLInputElement;
    
    submitHandler(event:T):void;

};

export { IForm }
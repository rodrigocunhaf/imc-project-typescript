import { Autobind } from "../decorators/autobind";
import { ConfigureComponent } from "../decorators/configure-component";
import { IForm } from "../interfaces/form";
import { Component } from "../models/component";
import { Patient } from "../models/patient";


@ConfigureComponent
class Form extends Component <HTMLFormElement> implements IForm <SubmitEvent> {
    inputWeight:HTMLInputElement = document.getElementById('patient-weight') as HTMLInputElement;
    inputHeight:HTMLInputElement = document.getElementById('patient-height')! as HTMLInputElement;
    inputCPFPatient:HTMLInputElement = document.getElementById('patient-document')! as HTMLInputElement;
    inputNamePatient:HTMLInputElement = document.getElementById('patient-name')! as HTMLInputElement;
    inputDoctorCPF:HTMLInputElement = document.getElementById('doctor-document')! as HTMLInputElement;
    inputMedicalDocument:HTMLInputElement = document.getElementById('doctor-medical')! as HTMLInputElement;
    inputDoctorName:HTMLInputElement = document.getElementById('doctor-name')! as HTMLInputElement;
    patientList!:Patient[];
    constructor(patientList:Patient[]){
        const element = <HTMLFormElement> document.querySelector('form')! 
        super(element);
        this.patientList = patientList;
    };

    configure(){
        this.typeElement.addEventListener('submit',this.submitHandler);
    };

    @Autobind
    submitHandler(event: SubmitEvent){
        event.preventDefault();
        
        const { weight , height , patientCpf, patientName , doctorCpf , doctorName , medicalDocument}  =  {
            weight:this.inputWeight.value,
            height:this.inputHeight.value,
            patientCpf:this.inputCPFPatient.value,
            patientName:this.inputNamePatient.value,
            doctorCpf:this.inputDoctorCPF.value,
            doctorName:this.inputDoctorName.value,
            medicalDocument:this.inputMedicalDocument.value
        };

        console.log(this)
    };
};

export { Form };
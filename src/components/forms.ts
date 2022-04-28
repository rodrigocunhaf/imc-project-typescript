import { Autobind } from "../decorators/autobind";
import { ConfigureComponent } from "../decorators/configure-component";
import { IForm } from "../interfaces/Iform";
import { Component } from "../models/component";
import { Nutritionist } from "../models/nutritionist";
import { Patient } from "../models/patient";
import { DocumentList} from '../models/document-list'
import { DocumentAvaliationType } from "../custom-types/document-type";
import { FormInputs , InputTypeForm} from "../custom-types/input-type";
import { generateDocument } from "../utils/document-generator";
import { validation } from "../utils/validation-form";


@ConfigureComponent
class Form extends Component <HTMLFormElement> implements IForm <SubmitEvent> {
    inputs:InputTypeForm = FormInputs;
    documentList:DocumentList;
    constructor(){
        const element = <HTMLFormElement> document.querySelector('form')! 
        super(element);
        this.documentList = new DocumentList();
    };

    configure(){
        this.typeElement.addEventListener('submit',this.submitHandler);
    };

    @Autobind
    submitHandler(event: SubmitEvent){
        event.preventDefault();
        
        const { weight , height , patientCpf, patientName , doctorCpf , doctorName , medicalDocument}  =  {
            weight:this.inputs.inputWeight.value,
            height:this.inputs.inputHeight.value,
            patientCpf:this.inputs.inputCPFPatient.value,
            patientName:this.inputs.inputNamePatient.value,
            doctorCpf:this.inputs.inputDoctorCPF.value,
            doctorName:this.inputs.inputDoctorName.value,
            medicalDocument:this.inputs.inputMedicalDocument.value
        };

        const isValid = validation(weight , height , patientCpf, patientName , doctorCpf , doctorName , medicalDocument)!; 

        if ( isValid.length === 0 ){
            const patient = new Patient(patientCpf,patientName,+weight,+height,this.documentList.getId().toString());
            const nutritionist = new Nutritionist(doctorCpf,doctorName,medicalDocument);

            const documentAvaliation: DocumentAvaliationType = { patient, nutritionist };

            generateDocument(documentAvaliation);

            this.documentList.addPatientOnList(documentAvaliation);
            
            FormInputs.clearInputs();
            return;
        };

        console.log(isValid)
        alert(isValid);
        
    };
};

export { Form };
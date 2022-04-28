import { DocumentAvaliationType } from "../custom-types/document-type";

function validation( weight:string , height:string , patientCpf:string, patientName:string , doctorCpf:string , doctorName:string , medicalDocument:string){

    let errorText:string = '';

    if (!weight){
        errorText +='Please type a valid weight.\n';
    };

    if (!height){
        errorText +='Please type a valid height.\n';
    };

    if (!patientCpf){
        errorText+='Please type a valid patient cpf.\n';
    };

    if (!patientName){
        errorText+='Please type a valid patient name.\n';
    };

    if (!doctorCpf){
        errorText+='Please type a valid doctor cpf.\n';
    };
    if (!doctorName){
        errorText+='Please type a valid doctor name.\n';
    };
    if (!medicalDocument){
        errorText+='Please type a valid medical document.\n';
    };

    return errorText;
};

export { validation };
import { DegreeOfObesity } from '../enums/degree-of-obesity';

interface IPatient {
    
    status: DegreeOfObesity;
    imc: number;
    patientId:string;
    weight: number,
    height:number

    get IMC():number;

    get Obesity(): DegreeOfObesity;

    get PatientId():string;

    get Height ():number;

    get Weight():number;
};


export { IPatient };
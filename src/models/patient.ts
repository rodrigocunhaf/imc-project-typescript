import { IPatient } from "../interfaces/patient";
import { Person } from "./people";
import { DegreeOfObesity } from '../enums/degree-of-obesity';

class Patient extends Person implements IPatient{

    constructor(
        cpf:string,
        name:string,
        public weight:number,
        public height:number,
        public patientId:string,
        public status:DegreeOfObesity,
        public imc:number,

    ){
        super(cpf,name);
    };

    get IMC(): number {
        return this.imc;
    }

    get Obesity(): DegreeOfObesity {
        return this.status;
    }

    get Cpf():string {
        return this.cpf;
    };

    get Name():string {
        return this.cpf;
    };

    get Height ():number{
        return this.height;
    };

    get Weight():number{
        return this.weight
    };

    get PatientId(): string {
        return this.patientId
    };
};

export { Patient };

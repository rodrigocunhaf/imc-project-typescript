import { IPatient } from "../interfaces/Ipatient";
import { Person } from "./people";
import { DegreeOfObesity } from '../enums/degree-of-obesity';

class Patient extends Person implements IPatient{

    public status!:DegreeOfObesity;
    public imc!:number;
    public classColor!:string;

    constructor(
        cpf:string,
        name:string,
        public weight:number,
        public height:number,
        public patientId:string,

    ){
        super(cpf,name);
        this.configPatient();
    };

    configPatient(){
        this.imc = this.weight / this.height ** 2;

        if (this.imc < 18.5 ){
            this.status = DegreeOfObesity.UNDER;
            this.classColor = 'under'
            return;
        };

        if ( this.imc >= 18.5 && this.imc <=24.9){
            this.status = DegreeOfObesity.NORMAL;
            this.classColor='normal'
            return;
        };

        if (this.imc >= 25 && this.imc <= 29.9){
            this.status = DegreeOfObesity.OVER;
            this.classColor='overweight'
            return;
        };

        if (this.imc >=30 && this.imc <=39.9){
            this.status = DegreeOfObesity.OBESITY;
            this.classColor = 'overweight'
            return;
        };

        if (this.imc >= 40){
            this.status = DegreeOfObesity.SEVERY;
            this.classColor='severy'
            return;
        };
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
        return this.name;
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

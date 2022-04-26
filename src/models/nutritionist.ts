import { INutritionist } from "../interfaces/nutrionist";
import { Person } from "./people";

class Nutritionist extends Person implements INutritionist{

    constructor(
        cpf:string,
        name:string,
        public medicalDocument:string
    ){
        super(cpf,name);
    };

    get Cpf():string {
        return this.cpf;
    };

    get Name():string {
        return this.cpf;
    };

    get MedicalDocument(): string {
        return this.medicalDocument;
    }

};

export { Nutritionist };

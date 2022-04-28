import { Patient} from '../models/patient'
import { DocumentAvaliationType } from '../custom-types/document-type';

interface IDocumentList <DocumentAvaliationType>{
    documentList:DocumentAvaliationType[];
    patientId:number;

    addPatientOnList( documentAvaliation:DocumentAvaliationType):void;

    getPatientList():DocumentAvaliationType[];

    generateId():void;

    getId():number;
};

export { IDocumentList };
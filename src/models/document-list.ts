import { IDocumentList} from "../interfaces/Idocument-list";
import { Patient } from "./patient";
import { DocumentAvaliationType } from '../custom-types/document-type';

class DocumentList implements IDocumentList <DocumentAvaliationType>{
    
    documentList: DocumentAvaliationType[] = [];
    patientId:number = 1;
    constructor(){};

    addPatientOnList(documentAvaliation: DocumentAvaliationType ): void {
        this.documentList.push(documentAvaliation);
        this.generateId();
        console.log(this.documentList);
    };

    getPatientList(): DocumentAvaliationType[] {
      return this.documentList;  
    };

    generateId(): void {
        this.patientId++;
    };

    getId(): number {
        return this.patientId;
    };
};

export { DocumentList };
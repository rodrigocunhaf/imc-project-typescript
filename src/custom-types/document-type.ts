import { Nutritionist } from "../models/nutritionist";
import { Patient } from "../models/patient";

type DocumentAvaliationType = {
    patient:Patient;
    nutritionist:Nutritionist
};

export { DocumentAvaliationType };
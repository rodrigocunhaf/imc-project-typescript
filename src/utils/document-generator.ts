import { DocumentAvaliationType } from "../custom-types/document-type";

function generateDocument ( documentAvalation: DocumentAvaliationType ){
    const documentList = document.querySelector('.patient-list');

    const newDocument = document.createElement('li');

    const infoToken = document.createElement('div');
    infoToken.setAttribute('class','info-token');
    newDocument.appendChild(infoToken);

    const infoTokenPatient = document.createElement('div');
    infoTokenPatient.setAttribute('class','info-token__patient');
    infoToken.appendChild(infoTokenPatient);

    const infoTokenPatientTitle = document.createElement('h3');
    infoTokenPatientTitle.textContent = 'Assentment'
    infoTokenPatientTitle.setAttribute('class','info-token__title')
    infoTokenPatient.appendChild(infoTokenPatientTitle);

    const patientData = [ 
            documentAvalation.patient.Cpf,
            documentAvalation.patient.Name,
            documentAvalation.patient.imc.toFixed(2).toString(),
            documentAvalation.patient.status
        ];
    
    const paramTitlePatient =['Document Nº:','Name:','I.M.C:','Status:']

    patientData.forEach( (item,index)=> {
            let infoTokenData = document.createElement('div');
            infoTokenData.setAttribute('class','info-token__data');

            let infoTokenDataTitle = document.createElement('b');
            infoTokenDataTitle.textContent = paramTitlePatient[index];
            infoTokenData.appendChild(infoTokenDataTitle);

            let infoTokenDataValor = document.createElement('p');
            infoTokenDataValor.textContent = item;
            if (paramTitlePatient[index] === 'Status:'){
                infoTokenDataValor.setAttribute('id',documentAvalation.patient.classColor);
            };
            infoTokenData.appendChild(infoTokenDataValor);

            infoTokenPatient.appendChild(infoTokenData);
    });


    const doctorData = [ 
        documentAvalation.nutritionist.MedicalDocument,
        documentAvalation.nutritionist.Name,
        documentAvalation.nutritionist.Cpf
    ];

    const infoTokenDoctor = document.createElement('div');
    infoTokenDoctor.setAttribute('class','info-token__doctor');
    infoToken.appendChild(infoTokenDoctor);

    const infoTokenDoctorTitle = document.createElement('h3');
    infoTokenDoctorTitle.setAttribute('class','info-token__title')
    infoTokenDoctorTitle.textContent = 'Evaluator doctor';
    infoTokenDoctor.appendChild(infoTokenDoctorTitle);


    const paramTitleDoctor =['Medical Document Nº:','Name:','CPF:']

    doctorData.forEach( (item,index)=> {
            let infoTokenData = document.createElement('div');
            infoTokenData.setAttribute('class','info-token__data');

            let infoTokenDataTitle = document.createElement('b');
            infoTokenDataTitle.textContent = paramTitleDoctor[index];
            infoTokenData.appendChild(infoTokenDataTitle);

            let infoTokenDataValor = document.createElement('p');
            infoTokenDataValor.textContent = item;
            console.log(item)
            infoTokenData.appendChild(infoTokenDataValor);

            infoTokenDoctor.appendChild(infoTokenData);
    });

    documentList?.appendChild(newDocument);
};

export { generateDocument };
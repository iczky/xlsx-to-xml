import axios from "axios";

const SERVICE_NAME = process.env.NEXT_PUBLIC_SERVICE_NAME;
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const USERNAME = process.env.SOAP_USERNAME;
const PASSWORD = process.env.SOAP_PASSWORD;

const soapRequest = (xmlData) => {
    const envelope = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:coc="cocokms.xsd">
    <soapenv:Header/>
    <soapenv:Body>
        <coc:${SERVICE_NAME}>
            <coc:username>${USERNAME}</coc:username>
            <coc:password>${PASSWORD}</coc:password>
            <coc:fstream><![CDATA[${xmlData}]]></coc:fstream>
        </coc:${SERVICE_NAME}>
    </soapenv:Body>
</soapenv:Envelope>`;

    return axios.post(ENDPOINT, envelope, {
        headers: {
            "Content-Type": "text/xml",
        },
    });
};

export default soapRequest;
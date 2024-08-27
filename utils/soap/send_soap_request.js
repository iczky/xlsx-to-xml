import axios from "axios";

const SERVICE_NAME = process.env.VITE_SERVICE_NAME;
const ENDPOINT = process.env.VITE_ENDPOINT;
const USERNAME = process.env.VITE_SOAP_USERNAME;
const PASSWORD = process.env.VITE_SOAP_PASSWORD;

const soapRequest = async (xmlData) => {
  const envelope = `
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
                   xmlns:xsd="https://www.w3.org/2001/XMLSchema"
                   xmlns:soap="https://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <${SERVICE_NAME} xmlns="http://services.beacukai.go.id/">
          <fStream>${xmlData}</fStream>
          <Username>${USERNAME}</Username>
          <Password>${PASSWORD}</Password>
        </${SERVICE_NAME}>
      </soap:Body>
    </soap:Envelope>
  `;

  try {
    const response = await axios.post(ENDPOINT, envelope, {
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        Accept: "text/xml, application/xml",
        SOAPAction: `https://services.beacukai.go.id/${SERVICE_NAME}`,
      },
    });

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, "text/xml");
    const result = xmlDoc.getElementsByTagName(`${SERVICE_NAME}Result`)[0]
      ?.textContent;

    const isSuccess = result.includes("Berhasil");
    return {
      status: isSuccess ? "success" : "failed",
      message: result,
    };
  } catch (error) {
    console.error("Error during SOAP request:", error);
    return {
      status: "error",
      message: "An error occurred",
    };
  }
};

export default soapRequest;

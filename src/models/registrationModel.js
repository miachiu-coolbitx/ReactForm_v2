import { parseOnlyLetterAndSpace, parseLength } from '../services/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkIsfilled, checkIsTrue } from '../services/inputValidator';

const registrationModel = [{
    title: 'Email Address',
    name: 'email_address',
    style: 'input-field required',
    label: 'Your valid email address.',
    type: 'text',
    placeholder: 'Input mail address',
    validators: [{
        id: 'mail-pattern',
        isValidFun: checkEmailPattern,
        alert: 'Email is not valid'
    }, {
        id: 'email-required',
        isValidFun: checkIsfilled,
        alert: 'Email is empty'
    }]
}, {
    title: 'Company Name',
    name: 'company_name',
    style: 'input-field required',
    label: 'Your registered company name. Example: "VASP LTD."',
    type: 'text',
    placeholder: 'Your company name',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'CompanyName-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Company name is too short'
    }, {
        id: 'CompanyName-required',
        isValidFun: checkIsfilled,
        alert: 'Company name is empty'
    }]
}, {
    title: 'VASP Code Name',
    name: 'vasp_code_name',
    style: 'input-field required',
    label: '4 uppercase letters to represent your company name. Example: "Coinbase exchange" could be "CBSE", "Sygna" could be "SYGN"',
    type: 'text',
    placeholder: 'Input VASP code Name',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'VASPcodeName-length',
        isValidFun: expression => checkAtLeastLength(expression, 4),
        alert: 'VASP code name is too short'
    }, {
        id: 'VASPcodeName-required',
        isValidFun: checkIsfilled,
        alert: 'VASP code name is empty'
    }]
}, {
    title: 'Country Code',
    name: 'country_code',
    style: 'input-field required',
    label: 'Country location of your company jurisdiction. Please follow ISO 3166-1 alpha-2 country code.',
    type: 'select',
    options: [
        { value: '', name: 'Select' },
        { value: '1', name: 'Option1' },
        { value: '2', name: 'Option2' },
        { value: '3', name: 'Option3' }
    ],
    validators: [{
        id: 'CountryCode-required',
        isValidFun: checkIsfilled,
        alert: 'Country code is not selected'
    }]
}, {
    title: 'City Code',
    name: 'city_code',
    style: 'input-field required',
    label: '2 letters city abbreviation. Example: "NY"',
    type: 'text',
    placeholder: 'Input city code',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'CityCode-length',
        isValidFun: expression => checkAtLeastLength(expression, 2),
        alert: 'City code is too short'
    }, {
        id: 'CityCode-required',
        isValidFun: checkIsfilled,
        alert: 'City code name is empty'
    }]
}, {
    title: 'Company ID',
    name: 'company_id',
    style: 'input-field',
    label: 'Company registration code under local jurisdiction.',
    type: 'text',
    placeholder: 'Input company ID'
}, {
    title: 'VASP Category',
    name: 'vasp_category',
    style: 'input-field required',
    type: 'select',
    selected: 'Select',
    options: [
        { value: '', name: 'Select' },
        { value: '1', name: 'Virtual/Flatl' },
        { value: '2', name: 'Virtual/Virtual' },
        { value: '3', name: 'Transfer' },
        { value: '4', name: 'Custodian' },
        { value: '5', name: 'Other' }
    ],
    validators: [{
        id: 'VASPcategory-required',
        isValidFun: checkIsfilled,
        alert: 'VASP category is not selected'
    }]
}, {
    title: 'Beneficiary VASP API endpoint URL',
    name: 'vasp_api_url',
    style: 'input-field required',
    label: 'API endpoint for beneficiary VASP to receive API request from Bridge Server (http://bit.ly/2NhZUlS). Example: "beneficiary.example/api/v1/bridge/transaction/permission-request"',
    type: 'text',
    placeholder: 'Input beneficiary VASP API endpoint URL',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'VASP-API-URL-required',
        isValidFun: checkIsfilled,
        alert: 'VASP API endpoint URL is empty'
    }]
}, {
    title: 'Fixed static IP Address',
    name: 'ip_address',
    style: 'input-field',
    label: 'To create a secure communication tunnel between Bridge and VASP servers, Bridge can register VASP server static IP for identification. (optional)',
    type: 'text',
    placeholder: 'Input fixed static IP address'
}, {
    title: 'Go-Live Date',
    name: 'go_live_Date',
    style: 'input-field',
    type: 'text',
    label: 'Default date: three days after the registration is done.'
}, {
    title: 'VASP Public Key',
    name: 'vasp_key_type',
    style: 'input-field required',
    label: 'For other VASPs to encrypt private information. Please see Key pair generation for more details.',
    type: 'select',
    options: [
        { value: '', name: 'Select Public Type' },
        { value: '1', name: 'HEX' },
        { value: '2', name: 'PEM' }
    ],
    validators: [{
        id: 'VASPpublicKey-required',
        isValidFun: checkIsfilled,
        alert: 'VASP public key type is not selected'
    }]
}, {
    name: 'vasp_key',
    style: 'input-field',
    type: 'textarea',
    tester: 'textarea',
    disable: 'true',
    placeholder: 'ex.\n-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEKciXy+GOwFZ7JEt+kpcMpFdHkEpzG0ln\n9XIcNs+Ak5qykSXRF0YnzqgzWnXEg8wA/ZWkEw8V8oPPNd9v5PQynw==\n-----END PUBLIC KEY-----'
} ];

export default registrationModel;
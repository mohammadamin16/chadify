// URL: https://app.snapp.taxi/api/api-passenger-oauth/v3/mutotp

// Method: POST

// example of a type
// {
//    "cellphone": "+989936337829",
//    "attestation": {
//        "method": "skip",
//        "platform": "skip"
//    },
//    "extra_methods": []
//}

interface Attestation {
  method: string;
  platform: string;
}

interface RequestMutOTP {
  cellphone: string;
  attestation: Attestation;
  extra_methods: string[];
}

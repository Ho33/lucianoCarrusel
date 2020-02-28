STORE.namespace("STORE.DataControlFactory");

STORE.DataControlFactory = function () {

    var API = {};

    API.address = function () {
        var myObject = {
            id: "adress",
            validate: "STORE.validate.address",
            type: "text",
            required: true,
            title: "costumer address",
            size: "25",
            minLength: "2",
            maxLength: "100",
            placeholder: "intro costumer address"
        }
        return STORE.frameLabelInput(myObject);
    };
    API.birthday = function () {
        var myObject = {
            id: "birthday",
            required: true,
            title: "date of birthday",

        }
        return API.date(myObject);
    };
    API.date = function (params) {
        var myObject = {
            id : params.id,
            validate: "STORE.validate.date",
            type: "date",
            required: params.required,
            title: params.title,
            size : "20"            
        }
        return STORE.frameLabelInput(myObject);
    };
   
    API.cp = function () {
            var myObject = {
                id: "cp",
                validate: "STORE.validate.cp",
                type: "text",
                required: true,
                title: "Código Postal",
                size: "5",
                minLength: "5",
                maxLength: "5",
                placeholder: "Intro postal code"
            }
            return STORE.frameLabelInput(myObject);
        },
    API.dni = function () {
            var myObject = {
                id: "dni",
                validate: "STORE.validate.dniNieCif",
                type: "text",
                required: "required",
                title: "dni",
                size: "25",
                minLength: "9",
                maxLength: "9",
                placeholder: "intro DNI"
            }
            return STORE.frameLabelInput(myObject);

        };
    API.email = function(){
        var myObject = {
            id: "email",
            validate: "STORE.validate.email",
            type: "text",
            size: "25",
            minLength: "10",
            maxLength: "150",
            required: true,
            placeholder: "input your Email",
            title: "10 to 150 characters"
        }
        return STORE.frameLabelInput(myObject);
    };
    API.firstname = function () {
        var myObject = {
            id: "firstname",
            validate: "STORE.validate.lettersWithSpace",
            type: "text",
            size: "25",
            minLength: "2",
            maxLength: "50",
            required: true,
            placeholder: "input your FirstName",
            title: "2 to 50 characters"
        }
        return STORE.frameLabelInput(myObject);
    };
    API.img = function(){
        var myObject = {
            id: "myImg",
            validate: "STORE.validate.imageName",
            type: "file",
            size: "25",
            minLength: "2",
            maxLength: "50",
            required: "required",
            placeholder: "Intro image",
            title: ""
        }
        return STORE.frameLabelInput(myObject);
    }
    API.lastname = function () {
        var myObject = {
            id: "lastname",
            validate: "STORE.validate.lettersWithSpace",
            type: "text",
            size: "25",
            minLength: "2",
            maxLength: "100",
            required: true,
            placeholder: "input your LastName",
            title: "2 to 100 characters"
        };
        return STORE.frameLabelInput(myObject);
    };
    API.landline = function () {
        var myObject = {
            id: "landline",
            idSelect: "prefixLandline",
            validate: "STORE.validate.landline",
            size: '20',
            required: false,
            placeholder: 'Tlf Fijo',
            title: 'Tlf Fijo'

        };
        return STORE.frameLabelSelectInput(myObject);
    };
    API.mobile = function () {
        var myObject = {
            id: "mobile",
            idSelect: "prefixMobile",
            validate: "STORE.validate.mobile",
            size: '20',
            required: true,
            placeholder: 'Tlf Móvil',
            title: 'Tlf Móvil'

        };
        return STORE.frameLabelSelectInput(myObject);
    };
    API.password = function(){
        var myObject = {
            id: "password",
            validate: "STORE.validate.password",
            type: "password",
            required: true,
            title: "costumer address",
            size: "25",
            minLength: "8",
            maxLength: "15",
            placeholder: "intro password Aa_..9999 ",
            title: 'Password'
        }
        return STORE.frameLabelInput(myObject);
        
    };
    API.passwordConfirm = function(){
        var myObject = {
            id: "passwordConfirm",
            validate: "STORE.validate.password",
            type: "password",
            required: true,
            size: "25",
            minLength: "8",
            maxLength: "15",
            placeholder: "intro new password Aa_..9999 ",
            title: 'Password confirm'
        }
        return STORE.frameLabelInput(myObject);

    };
    API.user = function(){
        var myObject = {
            id: "user",
            validate: "",//"STORE.validate.user",
            type: "text",
            required: true,
            title: "costumer address",
            size: "25",
            minLength: "7",
            maxLength: "7",
            placeholder: "intro user AAA9999 or A999999",
            title: 'User AAA9999 or A999999'
        }
        return STORE.frameLabelInput(myObject);
    };
    return API;

}

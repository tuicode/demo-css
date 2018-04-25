import { Injectable } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Injectable()
export class ValidationHelper {

    getTheValidationArrayFromProperties(theObj) {
        let result = Object.keys(theObj).map(function (key) {
            return [{ key: key, validation: theObj[key] }];
        });
        return result;
    }

    getSchema(dataObj) {
        let property = this.getTheValidationArrayFromProperties(dataObj['properties']);
        let propertyRequired = this.getTheValidationArrayFromProperties(dataObj['required']);
        for (let i = 0; i < property.length; i++) {
            for (let j = 0; j < propertyRequired.length; j++) {
                if (property[i][0].key === propertyRequired[j][0].validation) {
                    property[i][0].validation = Object.assign({}, property[i][0].validation, { required: true });
                }
            }

        }
        return property;
    }

    mapValidators(data) {
        const formValidators = [];
        for (let result of data) {
            if (result.validation.required) {
                formValidators.push(Validators.required);
            }
            if (result.validation.maxLength) {
                formValidators.push(Validators.maxLength(result.validation.maxLength));
            }
            if (result.validation.minLength) {
                formValidators.push(Validators.minLength(result.validation.minLength));
            }
        }
        return formValidators;
    }

    // generateForm(dataObj) {
    //     let group: any = {};
    //     for (let gr of dataObj) {
    //         group[gr[0].key] = new FormControl('', this.mapValidators(gr));
    //     }
    //     return new FormGroup(group);
    // }
}


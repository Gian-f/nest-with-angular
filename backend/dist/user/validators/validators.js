"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateString = exports.IsDateStringConstraint = void 0;
const class_validator_1 = require("class-validator");
const moment_1 = require("moment");
let IsDateStringConstraint = class IsDateStringConstraint {
    validate(value, args) {
        if (value instanceof Date) {
            return true;
        }
        return (0, moment_1.default)(value, moment_1.default.ISO_8601, true).isValid();
    }
    defaultMessage(args) {
        return `${args.property} must be a valid ISO 8601 date string or Date instance.`;
    }
};
IsDateStringConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isDateString', async: false })
], IsDateStringConstraint);
exports.IsDateStringConstraint = IsDateStringConstraint;
function IsDateString(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isDateString',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: IsDateStringConstraint,
        });
    };
}
exports.IsDateString = IsDateString;
//# sourceMappingURL=validators.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRequest = void 0;
/**
 * Cette classe est une classe utilitaire conçue pour faciliter l'envoi de requêtes Fetch dans une application web.
 * Elle offre une interface simple pour effectuer des requêtes HTTP
 * et gérer les actions avant et après l'envoi de la requête.
 */
var FetchRequest = /** @class */ (function () {
    function FetchRequest(options) {
        var _this = this;
        this.preFetch = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this.options.preFetchAction === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.options.preFetchAction()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.options.data = data.data;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, dataResponse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!this.options) {
                            throw new Error("Missing Options for the request");
                        }
                        if (!this.options.uri) {
                            throw new Error("L'URI est obligatoire");
                        }
                        if (!this.options.options || !this.options.options.method) {
                            throw new Error("La méthode d'appel est obligatoire");
                        }
                        return [4 /*yield*/, fetch(this.options.uri, {
                                method: this.options.options.method,
                                body: this._formData,
                                headers: {
                                    'X-Requested-With': 'XMLHttpRequest'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        dataResponse = _a.sent();
                        this._response = dataResponse;
                        if (this.options.postFetchAction) {
                            this.options.postFetchAction(dataResponse);
                        }
                        if (this.options.onSuccess) {
                            return [2 /*return*/, this.options.onSuccess(dataResponse)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (this.options.onError) {
                            return [2 /*return*/, this.options.onError(error_1)];
                        }
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.postFetch = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.options.submiter instanceof HTMLButtonElement) {
                    this.options.submiter.removeAttribute('disabled');
                }
                return [2 /*return*/, this.options.postFetchAction ? this.options.postFetchAction() : undefined];
            });
        }); };
        this.submitForm = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!this.options.preFetchAction) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.preFetch()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.fetchData()];
                    case 3:
                        _a.sent();
                        if (!this.options.postFetchAction) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.postFetch()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        console.error('Erreur lors de l\'envoi du formulaire : ', error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.createFormData = function (data) {
            var formData = new FormData();
            for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                formData.append(key, value !== null && value !== void 0 ? value : "");
            }
            return formData;
        };
        this.createJSON = function (data) {
            return JSON.stringify({ data: data });
        };
        this.options = options;
        if (options.submiter) {
            options.submiter.addEventListener('click', this.submitForm);
        }
        else {
            this.submitForm();
        }
    }
    Object.defineProperty(FetchRequest.prototype, "_formData", {
        get: function () {
            var isFormData = function (data) { return data instanceof FormData; };
            var isArray = function (data) { return Array.isArray(data); };
            var isObject = function (data) { return typeof data === 'object' && Object.keys(data).length > 0; };
            if (this.options.options) {
                var acceptDataFormat = this.options.options.acceptDataFormat;
                if (acceptDataFormat) {
                    switch (acceptDataFormat) {
                        case "form-data":
                            if (isFormData(this.options.data)) {
                                return this.options.data;
                            }
                            else if (isArray(this.options.data)) {
                                return this.createJSON(this.options.data);
                            }
                            else if (isObject(this.options.data)) {
                                return this.createFormData(this.options.data);
                            }
                            break;
                        case "classic-object":
                            if (isFormData(this.options.data) || isArray(this.options.data) || isObject(this.options.data)) {
                                return this.createJSON(isArray(this.options.data) ? this.options.data : this.options.data);
                            }
                            break;
                        default:
                            throw Error("Le format ".concat(acceptDataFormat, " n'est pas support\u00E9"));
                    }
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FetchRequest.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    return FetchRequest;
}());
exports.FetchRequest = FetchRequest;
//# sourceMappingURL=fetch-request.js.map
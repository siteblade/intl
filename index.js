/**
 * @module
 * @description Provides assets-based message translation.
 */

import axios from 'axios';
import { Enum } from 'com.siteblade.util';
import _fileSystemLoader from './loader.nodejs.js';

/**
 * Defines constants for available languages.
 * @enum
 */
class Language {
    constructor(id, direction, fallback = null) {
        Language._byId.set(id, this);
        /**
         * @type {String}
         */
        this.id = id;
        /**
         * @type {Language.Direction}
         */
        this.direction = Language.Direction(direction);
        /**
         * @type {Language?}
         */
        this.fallback = fallback;

        if (Language.EN_US)
            this.fallback = this.fallback || Language.EN_US;
    }

    toString() {
        return this.id;
    }
}

Language._byId = new Map;

const LanguageProxy = new Proxy(Language, {
    apply(target, thisArg, argumentsList) {
        let [ id ] = argumentsList;
        if (id instanceof Language) return id;
        let split = String(id).toLowerCase().replace(/_/g, '-').split('-');
        return Language._byId.get(split[0] + (split.length > 1 ? '_' + split.slice(1).map(s => s.toUpperCase()).join('_') : ''));
    }
});

export { LanguageProxy as Language };

/**
 * Defines constants for language reading directions.
 * @enum
 */
Language.Direction = Enum('Direction', [
    'LTR', 'RTL',
]);

/** */
Language.EN_US = new Language('en_US', 'ltr');

/** */
Language.AF = new Language('af', 'ltr');

/** */
Language.SQ = new Language('sq', 'ltr');

/** */
Language.AM = new Language('am', 'ltr');

/** */
Language.AR_DZ = new Language('ar_DZ', 'rtl');

/** */
Language.AR_BH = new Language('ar_BH', 'rtl');

/** */
Language.AR_EG = new Language('ar_EG', 'rtl');

/** */
Language.AR_IQ = new Language('ar_IQ', 'rtl');

/** */
Language.AR_JO = new Language('ar_JO', 'rtl');

/** */
Language.AR_KW = new Language('ar_KW', 'rtl');

/** */
Language.AR_LB = new Language('ar_LB', 'rtl');

/** */
Language.AR_LY = new Language('ar_LY', 'rtl');

/** */
Language.AR_MA = new Language('ar_MA', 'rtl');

/** */
Language.AR_OM = new Language('ar_OM', 'rtl');

/** */
Language.AR_QA = new Language('ar_QA', 'rtl');

/** */
Language.AR_SA = new Language('ar_SA', 'rtl');

/** */
Language.AR_SY = new Language('ar_SY', 'rtl');

/** */
Language.AR_TN = new Language('ar_TN', 'rtl');

/** */
Language.AR_AE = new Language('ar_AE', 'rtl');

/** */
Language.AR_YE = new Language('ar_YE', 'rtl');

/** */
Language.HY = new Language('hy', 'ltr');

/** */
Language.AS = new Language('as', 'ltr');

/** */
Language.AZ_AZ = new Language('az_AZ', 'ltr');

/** */
Language.AZ_AZ = new Language('az_AZ', 'ltr');

/** */
Language.EU = new Language('eu', 'ltr');

/** */
Language.BE = new Language('be', 'ltr');

/** */
Language.BN = new Language('bn', 'ltr');

/** */
Language.BN = new Language('bn', 'ltr');

/** */
Language.BS = new Language('bs', 'ltr');

/** */
Language.BG = new Language('bg', 'ltr');

/** */
Language.MY = new Language('my', 'ltr');

/** */
Language.CA = new Language('ca', 'ltr');

/** */
Language.ZH_CN = new Language('zh_CN', 'ltr');

/** */
Language.ZH_HK = new Language('zh_HK', 'ltr');

/** */
Language.ZH_MO = new Language('zh_MO', 'ltr');

/** */
Language.ZH_SG = new Language('zh_SG', 'ltr');

/** */
Language.ZH_TW = new Language('zh_TW', 'ltr');

/** */
Language.HR = new Language('hr', 'ltr');

/** */
Language.CS = new Language('cs', 'ltr');

/** */
Language.DA = new Language('da', 'ltr');

/** */
Language.NL_BE = new Language('nl_BE', 'ltr');

/** */
Language.NL_NL = new Language('nl_NL', 'ltr');

/** */
Language.EN_AU = new Language('en_AU', 'ltr');

/** */
Language.EN_BZ = new Language('en_BZ', 'ltr');

/** */
Language.EN_CA = new Language('en_CA', 'ltr');

/** */
Language.EN_CB = new Language('en_CB', 'ltr');

/** */
Language.EN_GB = new Language('en_GB', 'ltr');

/** */
Language.EN_IN = new Language('en_IN', 'ltr');

/** */
Language.EN_IE = new Language('en_IE', 'ltr');

/** */
Language.EN_JM = new Language('en_JM', 'ltr');

/** */
Language.EN_NZ = new Language('en_NZ', 'ltr');

/** */
Language.EN_PH = new Language('en_PH', 'ltr');

/** */
Language.EN_ZA = new Language('en_ZA', 'ltr');

/** */
Language.EN_TT = new Language('en_TT', 'ltr');

/** */
Language.ET = new Language('et', 'ltr');

/** */
Language.MK = new Language('mk', 'ltr');

/** */
Language.FO = new Language('fo', 'ltr');

/** */
Language.FA = new Language('fa', 'ltr');

/** */
Language.FI = new Language('fi', 'ltr');

/** */
Language.FR_BE = new Language('fr_BE', 'ltr');

/** */
Language.FR_CA = new Language('fr_CA', 'ltr');

/** */
Language.FR_FR = new Language('fr_FR', 'ltr');

/** */
Language.FR_LU = new Language('fr_LU', 'ltr');

/** */
Language.FR_CH = new Language('fr_CH', 'ltr');

/** */
Language.GD_IE = new Language('gd_IE', 'ltr');

/** */
Language.GD = new Language('gd', 'ltr');

/** */
Language.DE_AT = new Language('de_AT', 'ltr');

/** */
Language.DE_DE = new Language('de_DE', 'ltr');

/** */
Language.DE_LI = new Language('de_LI', 'ltr');

/** */
Language.DE_LU = new Language('de_LU', 'ltr');

/** */
Language.DE_CH = new Language('de_CH', 'ltr');

/** */
Language.EL = new Language('el', 'ltr');

/** */
Language.GN = new Language('gn', 'ltr');

/** */
Language.GU = new Language('gu', 'ltr');

/** */
Language.HE = new Language('he', 'ltr');

/** */
Language.HI = new Language('hi', 'ltr');

/** */
Language.HU = new Language('hu', 'ltr');

/** */
Language.IS = new Language('is', 'ltr');

/** */
Language.ID = new Language('id', 'ltr');

/** */
Language.IT_IT = new Language('it_IT', 'ltr');

/** */
Language.IT_CH = new Language('it_CH', 'ltr');

/** */
Language.JA = new Language('ja', 'ltr');

/** */
Language.KN = new Language('kn', 'ltr');

/** */
Language.KS = new Language('ks', 'ltr');

/** */
Language.KK = new Language('kk', 'ltr');

/** */
Language.KM = new Language('km', 'ltr');

/** */
Language.KO = new Language('ko', 'ltr');

/** */
Language.LO = new Language('lo', 'ltr');

/** */
Language.LA = new Language('la', 'ltr');

/** */
Language.LV = new Language('lv', 'ltr');

/** */
Language.LT = new Language('lt', 'ltr');

/** */
Language.MS_BN = new Language('ms_BN', 'ltr');

/** */
Language.MS_MY = new Language('ms_MY', 'ltr');

/** */
Language.ML = new Language('ml', 'ltr');

/** */
Language.MT = new Language('mt', 'ltr');

/** */
Language.MI = new Language('mi', 'ltr');

/** */
Language.MR = new Language('mr', 'ltr');

/** */
Language.MN = new Language('mn', 'ltr');

/** */
Language.MN = new Language('mn', 'ltr');

/** */
Language.NE = new Language('ne', 'ltr');

/** */
Language.NO_NO = new Language('no_NO', 'ltr');

/** */
Language.NO_NO = new Language('no_NO', 'ltr');

/** */
Language.OR = new Language('or', 'ltr');

/** */
Language.PL = new Language('pl', 'ltr');

/** */
Language.PT_BR = new Language('pt_BR', 'ltr');

/** */
Language.PT_PT = new Language('pt_PT', 'ltr');

/** */
Language.PA = new Language('pa', 'ltr');

/** */
Language.RM = new Language('rm', 'ltr');

/** */
Language.RO_MO = new Language('ro_MO', 'ltr');

/** */
Language.RO = new Language('ro', 'ltr');

/** */
Language.RU = new Language('ru', 'ltr');

/** */
Language.RU_MO = new Language('ru_MO', 'ltr');

/** */
Language.SA = new Language('sa', 'rtl');

/** */
Language.SR_SP = new Language('sr_SP', 'ltr');

/** */
Language.SR_SP = new Language('sr_SP', 'ltr');

/** */
Language.TN = new Language('tn', 'ltr');

/** */
Language.SD = new Language('sd', 'ltr');

/** */
Language.SI = new Language('si', 'ltr');

/** */
Language.SK = new Language('sk', 'ltr');

/** */
Language.SL = new Language('sl', 'ltr');

/** */
Language.SO = new Language('so', 'ltr');

/** */
Language.SB = new Language('sb', 'ltr');

/** */
Language.ES_AR = new Language('es_AR', 'ltr');

/** */
Language.ES_BO = new Language('es_BO', 'ltr');

/** */
Language.ES_CL = new Language('es_CL', 'ltr');

/** */
Language.ES_CO = new Language('es_CO', 'ltr');

/** */
Language.ES_CR = new Language('es_CR', 'ltr');

/** */
Language.ES_DO = new Language('es_DO', 'ltr');

/** */
Language.ES_EC = new Language('es_EC', 'ltr');

/** */
Language.ES_SV = new Language('es_SV', 'ltr');

/** */
Language.ES_GT = new Language('es_GT', 'ltr');

/** */
Language.ES_HN = new Language('es_HN', 'ltr');

/** */
Language.ES_MX = new Language('es_MX', 'ltr');

/** */
Language.ES_NI = new Language('es_NI', 'ltr');

/** */
Language.ES_PA = new Language('es_PA', 'ltr');

/** */
Language.ES_PY = new Language('es_PY', 'ltr');

/** */
Language.ES_PE = new Language('es_PE', 'ltr');

/** */
Language.ES_PR = new Language('es_PR', 'ltr');

/** */
Language.ES_ES = new Language('es_ES', 'ltr');

/** */
Language.ES_UY = new Language('es_UY', 'ltr');

/** */
Language.ES_VE = new Language('es_VE', 'ltr');

/** */
Language.SW = new Language('sw', 'ltr');

/** */
Language.SV_FI = new Language('sv_FI', 'ltr');

/** */
Language.SV_SE = new Language('sv_SE', 'ltr');

/** */
Language.TG = new Language('tg', 'ltr');

/** */
Language.TA = new Language('ta', 'ltr');

/** */
Language.TT = new Language('tt', 'ltr');

/** */
Language.TE = new Language('te', 'ltr');

/** */
Language.TH = new Language('th', 'ltr');

/** */
Language.BO = new Language('bo', 'ltr');

/** */
Language.TS = new Language('ts', 'ltr');

/** */
Language.TR = new Language('tr', 'ltr');

/** */
Language.TK = new Language('tk', 'ltr');

/** */
Language.UK = new Language('uk', 'ltr');

/** */
Language.UR = new Language('ur', 'ltr');

/** */
Language.UZ_UZ = new Language('uz_UZ', 'ltr');

/** */
Language.UZ_UZ = new Language('uz_UZ', 'ltr');

/** */
Language.VI = new Language('vi', 'ltr');

/** */
Language.CY = new Language('cy', 'ltr');

/** */
Language.XH = new Language('xh', 'ltr');

/** */
Language.YI = new Language('yi', 'ltr');

/** */
Language.ZU = new Language('zu', 'ltr');

/**
 * @description Defines constants for message genders.
 */
const Gender = Enum('Gender', [
    'MALE',
    'FEMALE',
]);

/**
 * @description Provides message translation facility.
 */
export class Translator {
    constructor(options = {}) {
        this._assetsPath = null;
        this._assetsRoots = [];
        this._assetsLoader = null;
        this._assetsCleaner = true;

        /**
         * @description Triggers when language is updated.
         * @type {Function}
         */
        this.onlanguageupdate = null;

        this._language = null;
        this._assets = new Map;
        this.config(options);
    }

    config(options = {}) {
        options.assets = options.assets || {};
        this._assetsPath = String(options.assets.path || '');
        this._assetsRoots = options.assets.roots || [];
        var loaderType = LoaderType(options.assets.loaderType);
        this._assetsLoader = loaderType == 'http' ? httpResourceLoader : fileSystemResourceLoader;
        this._assetsCleaner = true;
    }

    /**
     * @returns {Language?}
     */
    getLanguage() {
        return this._language;
    }

    /**
     * @param {Language?} language 
     */
    async setLanguage(language) {
        language = LanguageProxy(language);
        this._language = language;
        if (this._assetsCleaner) {
            let k = [];
            if (language)
                for (let l = language; l; l = l.fallback)
                    k.push(l);
            for (let l in this._assets)
                if (k.indexOf(l) === -1)
                    this._assets.delete(l);
        }
        await this.loadAssets();
    }

    getState() {
        if (!this._language)
            return null;
        let r = {
            lang: this._language.toString(),
            langAssets: {},
        };
        for (let [k, v] of this._assets)
            r.langAssets[k.toString()] = v;
        return r;
    }

    setState(state) {
        this._language = LanguageProxy(state.lang);
        for (let k in state.langAssets)
            this._assets[LanguageProxy(k)] = state.langAssets[k];
    }

    /**
     * @description Loads language resources.
     */
    async loadAssets() {
        if (!this._language)
            return;
        for (let l = this._language; l; l = l.fallback) {
            if (this._assets.has(l))
                continue;
            await this._assetsLoader(this, l);
        }
    }

    /**
     * @description Translates given message identifier.
     * @param {*} id 
     * @param {...any} rest 
     * @returns {String}
     */
    t(id, ...options) {
        let variables, gender, amount;

        for (let option of options) {
            if (option.constructor == Object)
                variables = option;
            else if (typeof option == 'number')
                amount = option;
            else if (option instanceof Gender)
                gender = option;
        }

        if (!this._language)
            return id;

        if (typeof amount == 'number')
            id += amount > 0 ? 'Plural' : amount == 0 ? 'Empty' : 'Single';
        else if (gender instanceof Gender)
            id += gender == Gender.MALE ? 'Male' : 'Female';

        let splitId = id.split('.');
        for (let l = this._language; l; l = l.fallback) {
            let message = this._resolveId(this._assets.get(l), splitId);
            if (message)
                return this._applyMessage(message, variables, gender, amount);
        }
        if (this._assets.has(Language.EN_US)) {
            let message = this._resolveId(this._assets.get(Language.EN_US), splitId);
            if (message)
                return this._applyMessage(message, variables, gender, amount);
        }
        return id;
    }

    /**
     * Returns a clone of the Translator, which shares the same
     * resources.
     * 
     * @returns {Translator}
     */
    clone() {
        let t = new Translator;
        t._assetsPath = this._assetsPath;
        t._assetsRoots = this._assetsRoots.slice(0);
        t._assetsLoader = this._assetsLoader;
        //t._assetsCleaner = this._assetsCleaner;
        t._language = this._language;
        t._languageResources = this._assets;
        return t;
    }

    _resolveId(root, splitId) {
        let r = root;
        let l = splitId.length;
        if (!r)
            return null;
        for (let i = 0; i != l; ++i) {
            r = r[splitId[i]];
            if (r === undefined)
                return null;
        }
        return typeof r == 'string' ? r : null;
    }

    _applyMessage(message, variables, gender, amount) {
        if (typeof amount == 'number') {
            variables = variables || {};
            variables.amount = option;
        }
        let r = message;
        if (variables) {
            r = r.replace(/\$([a-z0-9]+)/, (_, id) => variables[id]);
            r = r.replace('$$', '$');
        }
        return r;
    }

    _assignAssets(language, root, data) {
        this._assets.set(language, this._assets.get(language) || {});
        let r = this._assets.get(language);
        let idSplit = root.split('.');
        for (let i = 0; i != idSplit.length - 1; ++i)
            r[idSplit[i]] = r[idSplit[i]] || {};
        r[idSplit[idSplit.length - 1]] = data;
    }
}

/** */
export const LoaderType = Enum('LoaderType', [
    'HTTP',
    'FILE_SYSTEM',
]);

/**
 * @description HTTP resource loader.
 * @type {Function}
 */
async function httpResourceLoader(translator, language) {
    for (let root of translator._assetsRoots) {
        try {
            let { data } = await axios.get(translator._assetsPath + '/' + language + '/' + root.replace(/\./g, '/') + '.json', {
                responseType: 'json',
            });
            translator._assignAssets(language, root, data);
        }
        catch (e) {}
    }
}

/**
 * @description File-system resource loader.
 * @type {Function}
 */
async function fileSystemResourceLoader(translator, language) {
    return await _fileSystemLoader(translator, language);
}

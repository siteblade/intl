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
        this.direction = direction;
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
        return id instanceof Language ? id : Language._byId.get(id.toLowerCase().replace('_', '-'));
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
Language.EN_US = new Language('en-us', Language.Direction.LTR);

/** */
Language.AF = new Language('af', Language.Direction.LTR);

/** */
Language.SQ = new Language('sq', Language.Direction.LTR);

/** */
Language.AM = new Language('am', Language.Direction.LTR);

/** */
Language.AR_DZ = new Language('ar-dz', Language.Direction.RTL);

/** */
Language.AR_BH = new Language('ar-bh', Language.Direction.RTL);

/** */
Language.AR_EG = new Language('ar-eg', Language.Direction.RTL);

/** */
Language.AR_IQ = new Language('ar-iq', Language.Direction.RTL);

/** */
Language.AR_JO = new Language('ar-jo', Language.Direction.RTL);

/** */
Language.AR_KW = new Language('ar-kw', Language.Direction.RTL);

/** */
Language.AR_LB = new Language('ar-lb', Language.Direction.RTL);

/** */
Language.AR_LY = new Language('ar-ly', Language.Direction.RTL);

/** */
Language.AR_MA = new Language('ar-ma', Language.Direction.RTL);

/** */
Language.AR_OM = new Language('ar-om', Language.Direction.RTL);

/** */
Language.AR_QA = new Language('ar-qa', Language.Direction.RTL);

/** */
Language.AR_SA = new Language('ar-sa', Language.Direction.RTL);

/** */
Language.AR_SY = new Language('ar-sy', Language.Direction.RTL);

/** */
Language.AR_TN = new Language('ar-tn', Language.Direction.RTL);

/** */
Language.AR_AE = new Language('ar-ae', Language.Direction.RTL);

/** */
Language.AR_YE = new Language('ar-ye', Language.Direction.RTL);

/** */
Language.HY = new Language('hy', Language.Direction.LTR);

/** */
Language.AS = new Language('as', Language.Direction.LTR);

/** */
Language.AZ_AZ = new Language('az-az', Language.Direction.LTR);

/** */
Language.AZ_AZ = new Language('az-az', Language.Direction.LTR);

/** */
Language.EU = new Language('eu', Language.Direction.LTR);

/** */
Language.BE = new Language('be', Language.Direction.LTR);

/** */
Language.BN = new Language('bn', Language.Direction.LTR);

/** */
Language.BN = new Language('bn', Language.Direction.LTR);

/** */
Language.BS = new Language('bs', Language.Direction.LTR);

/** */
Language.BG = new Language('bg', Language.Direction.LTR);

/** */
Language.MY = new Language('my', Language.Direction.LTR);

/** */
Language.CA = new Language('ca', Language.Direction.LTR);

/** */
Language.ZH_CN = new Language('zh-cn', Language.Direction.LTR);

/** */
Language.ZH_HK = new Language('zh-hk', Language.Direction.LTR);

/** */
Language.ZH_MO = new Language('zh-mo', Language.Direction.LTR);

/** */
Language.ZH_SG = new Language('zh-sg', Language.Direction.LTR);

/** */
Language.ZH_TW = new Language('zh-tw', Language.Direction.LTR);

/** */
Language.HR = new Language('hr', Language.Direction.LTR);

/** */
Language.CS = new Language('cs', Language.Direction.LTR);

/** */
Language.DA = new Language('da', Language.Direction.LTR);

/** */
Language.NL_BE = new Language('nl-be', Language.Direction.LTR);

/** */
Language.NL_NL = new Language('nl-nl', Language.Direction.LTR);

/** */
Language.EN_AU = new Language('en-au', Language.Direction.LTR);

/** */
Language.EN_BZ = new Language('en-bz', Language.Direction.LTR);

/** */
Language.EN_CA = new Language('en-ca', Language.Direction.LTR);

/** */
Language.EN_CB = new Language('en-cb', Language.Direction.LTR);

/** */
Language.EN_GB = new Language('en-gb', Language.Direction.LTR);

/** */
Language.EN_IN = new Language('en-in', Language.Direction.LTR);

/** */
Language.EN_IE = new Language('en-ie', Language.Direction.LTR);

/** */
Language.EN_JM = new Language('en-jm', Language.Direction.LTR);

/** */
Language.EN_NZ = new Language('en-nz', Language.Direction.LTR);

/** */
Language.EN_PH = new Language('en-ph', Language.Direction.LTR);

/** */
Language.EN_ZA = new Language('en-za', Language.Direction.LTR);

/** */
Language.EN_TT = new Language('en-tt', Language.Direction.LTR);

/** */
Language.ET = new Language('et', Language.Direction.LTR);

/** */
Language.MK = new Language('mk', Language.Direction.LTR);

/** */
Language.FO = new Language('fo', Language.Direction.LTR);

/** */
Language.FA = new Language('fa', Language.Direction.LTR);

/** */
Language.FI = new Language('fi', Language.Direction.LTR);

/** */
Language.FR_BE = new Language('fr-be', Language.Direction.LTR);

/** */
Language.FR_CA = new Language('fr-ca', Language.Direction.LTR);

/** */
Language.FR_FR = new Language('fr-fr', Language.Direction.LTR);

/** */
Language.FR_LU = new Language('fr-lu', Language.Direction.LTR);

/** */
Language.FR_CH = new Language('fr-ch', Language.Direction.LTR);

/** */
Language.GD_IE = new Language('gd-ie', Language.Direction.LTR);

/** */
Language.GD = new Language('gd', Language.Direction.LTR);

/** */
Language.DE_AT = new Language('de-at', Language.Direction.LTR);

/** */
Language.DE_DE = new Language('de-de', Language.Direction.LTR);

/** */
Language.DE_LI = new Language('de-li', Language.Direction.LTR);

/** */
Language.DE_LU = new Language('de-lu', Language.Direction.LTR);

/** */
Language.DE_CH = new Language('de-ch', Language.Direction.LTR);

/** */
Language.EL = new Language('el', Language.Direction.LTR);

/** */
Language.GN = new Language('gn', Language.Direction.LTR);

/** */
Language.GU = new Language('gu', Language.Direction.LTR);

/** */
Language.HE = new Language('he', Language.Direction.LTR);

/** */
Language.HI = new Language('hi', Language.Direction.LTR);

/** */
Language.HU = new Language('hu', Language.Direction.LTR);

/** */
Language.IS = new Language('is', Language.Direction.LTR);

/** */
Language.ID = new Language('id', Language.Direction.LTR);

/** */
Language.IT_IT = new Language('it-it', Language.Direction.LTR);

/** */
Language.IT_CH = new Language('it-ch', Language.Direction.LTR);

/** */
Language.JA = new Language('ja', Language.Direction.LTR);

/** */
Language.KN = new Language('kn', Language.Direction.LTR);

/** */
Language.KS = new Language('ks', Language.Direction.LTR);

/** */
Language.KK = new Language('kk', Language.Direction.LTR);

/** */
Language.KM = new Language('km', Language.Direction.LTR);

/** */
Language.KO = new Language('ko', Language.Direction.LTR);

/** */
Language.LO = new Language('lo', Language.Direction.LTR);

/** */
Language.LA = new Language('la', Language.Direction.LTR);

/** */
Language.LV = new Language('lv', Language.Direction.LTR);

/** */
Language.LT = new Language('lt', Language.Direction.LTR);

/** */
Language.MS_BN = new Language('ms-bn', Language.Direction.LTR);

/** */
Language.MS_MY = new Language('ms-my', Language.Direction.LTR);

/** */
Language.ML = new Language('ml', Language.Direction.LTR);

/** */
Language.MT = new Language('mt', Language.Direction.LTR);

/** */
Language.MI = new Language('mi', Language.Direction.LTR);

/** */
Language.MR = new Language('mr', Language.Direction.LTR);

/** */
Language.MN = new Language('mn', Language.Direction.LTR);

/** */
Language.MN = new Language('mn', Language.Direction.LTR);

/** */
Language.NE = new Language('ne', Language.Direction.LTR);

/** */
Language.NO_NO = new Language('no-no', Language.Direction.LTR);

/** */
Language.NO_NO = new Language('no-no', Language.Direction.LTR);

/** */
Language.OR = new Language('or', Language.Direction.LTR);

/** */
Language.PL = new Language('pl', Language.Direction.LTR);

/** */
Language.PT_BR = new Language('pt-br', Language.Direction.LTR);

/** */
Language.PT_PT = new Language('pt-pt', Language.Direction.LTR);

/** */
Language.PA = new Language('pa', Language.Direction.LTR);

/** */
Language.RM = new Language('rm', Language.Direction.LTR);

/** */
Language.RO_MO = new Language('ro-mo', Language.Direction.LTR);

/** */
Language.RO = new Language('ro', Language.Direction.LTR);

/** */
Language.RU = new Language('ru', Language.Direction.LTR);

/** */
Language.RU_MO = new Language('ru-mo', Language.Direction.LTR);

/** */
Language.SA = new Language('sa', Language.Direction.RTL);

/** */
Language.SR_SP = new Language('sr-sp', Language.Direction.LTR);

/** */
Language.SR_SP = new Language('sr-sp', Language.Direction.LTR);

/** */
Language.TN = new Language('tn', Language.Direction.LTR);

/** */
Language.SD = new Language('sd', Language.Direction.LTR);

/** */
Language.SI = new Language('si', Language.Direction.LTR);

/** */
Language.SK = new Language('sk', Language.Direction.LTR);

/** */
Language.SL = new Language('sl', Language.Direction.LTR);

/** */
Language.SO = new Language('so', Language.Direction.LTR);

/** */
Language.SB = new Language('sb', Language.Direction.LTR);

/** */
Language.ES_AR = new Language('es-ar', Language.Direction.LTR);

/** */
Language.ES_BO = new Language('es-bo', Language.Direction.LTR);

/** */
Language.ES_CL = new Language('es-cl', Language.Direction.LTR);

/** */
Language.ES_CO = new Language('es-co', Language.Direction.LTR);

/** */
Language.ES_CR = new Language('es-cr', Language.Direction.LTR);

/** */
Language.ES_DO = new Language('es-do', Language.Direction.LTR);

/** */
Language.ES_EC = new Language('es-ec', Language.Direction.LTR);

/** */
Language.ES_SV = new Language('es-sv', Language.Direction.LTR);

/** */
Language.ES_GT = new Language('es-gt', Language.Direction.LTR);

/** */
Language.ES_HN = new Language('es-hn', Language.Direction.LTR);

/** */
Language.ES_MX = new Language('es-mx', Language.Direction.LTR);

/** */
Language.ES_NI = new Language('es-ni', Language.Direction.LTR);

/** */
Language.ES_PA = new Language('es-pa', Language.Direction.LTR);

/** */
Language.ES_PY = new Language('es-py', Language.Direction.LTR);

/** */
Language.ES_PE = new Language('es-pe', Language.Direction.LTR);

/** */
Language.ES_PR = new Language('es-pr', Language.Direction.LTR);

/** */
Language.ES_ES = new Language('es-es', Language.Direction.LTR);

/** */
Language.ES_UY = new Language('es-uy', Language.Direction.LTR);

/** */
Language.ES_VE = new Language('es-ve', Language.Direction.LTR);

/** */
Language.SW = new Language('sw', Language.Direction.LTR);

/** */
Language.SV_FI = new Language('sv-fi', Language.Direction.LTR);

/** */
Language.SV_SE = new Language('sv-se', Language.Direction.LTR);

/** */
Language.TG = new Language('tg', Language.Direction.LTR);

/** */
Language.TA = new Language('ta', Language.Direction.LTR);

/** */
Language.TT = new Language('tt', Language.Direction.LTR);

/** */
Language.TE = new Language('te', Language.Direction.LTR);

/** */
Language.TH = new Language('th', Language.Direction.LTR);

/** */
Language.BO = new Language('bo', Language.Direction.LTR);

/** */
Language.TS = new Language('ts', Language.Direction.LTR);

/** */
Language.TR = new Language('tr', Language.Direction.LTR);

/** */
Language.TK = new Language('tk', Language.Direction.LTR);

/** */
Language.UK = new Language('uk', Language.Direction.LTR);

/** */
Language.UR = new Language('ur', Language.Direction.LTR);

/** */
Language.UZ_UZ = new Language('uz-uz', Language.Direction.LTR);

/** */
Language.UZ_UZ = new Language('uz-uz', Language.Direction.LTR);

/** */
Language.VI = new Language('vi', Language.Direction.LTR);

/** */
Language.CY = new Language('cy', Language.Direction.LTR);

/** */
Language.XH = new Language('xh', Language.Direction.LTR);

/** */
Language.YI = new Language('yi', Language.Direction.LTR);

/** */
Language.ZU = new Language('zu', Language.Direction.LTR);

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
        this._assetsLoader = options.assets.loaderType == 'http' ? httpResourceLoader : fileSystemResourceLoader;
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
    t(id, variables = undefined, option = undefined) {
        if (!this._language)
            return id;

        if (typeof option == 'number')
            id += option > 0 ? 'Plural' : option == 0 ? 'Empty' : 'Single';
        else if (option instanceof Gender)
            id += option == Gender.MALE ? 'Male' : 'Female';

        let splitId = id.split('.');
        for (let l = this._language; l; l = l.fallback) {
            let message = this._resolveId(this._assets.get(l), splitId);
            if (message)
                return this._applyMessage(message, variables, option);
        }
        if (this._assets.has(Language.EN_US)) {
            let message = this._resolveId(this._assets.get(Language.EN_US), splitId);
            if (message)
                return this._applyMessage(message, variables, option);
        }
        return id;
    }

    /**
     * Returns a clone of the Translator, which shares the same
     * resources.
     * 
     * @returns {Translator}
     */
    clone()
    {
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

    _applyMessage(message, variables, option) {
        if (typeof option == 'number') {
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

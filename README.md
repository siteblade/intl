##### com.siteblade.intl

This package provides assets-based message translation.

## Getting started

```javascript
import { Translator } from 'com.siteblade.intl';

const translator = new Translator({
    assets: {
        // Configure URL or path for resource loading
        path: 'pathOrUrl/res/lang',

        // Configure JSON files for resource loading under resourcePath option
        roots: ['common', 'validation'],

        // Whether to clean assets automatically.
        clean: true,

        // Select a loader: file system ('fileSystem') or HTTP ('http').
        loaderType: 'fileSystem',
    }
});

(async () => {
    await translator.setLanguage('en-us');
})();

import { Gender } from 'com.siteblade.intl';

const t = translator.t.bind(translator);

console.log(t('common.messageId'));
console.log(t('common.parameterized', { x: 'foo' }));
console.log(t('common.contextual', null, Gender.MALE));
console.log(t('common.quantified', null, 10));
```

Example resource:

```json
{
    "messageId": "Some message",
    "parameterized": "Here: $x",
    "contextualMale": "Male message",
    "contextualMale": "Female message",
    "quantifiedEmpty": "$amount: empty",
    "quantifiedSingle": "$amount: single",
    "quantifiedPlural": "$amount: plural"
}
```

### Server applications

In server applications, it's convinient to clone Translator instances and to the disable assets cleaner.

To clone a Translator, you can use the Translator.clone() method, which will return an object that shares the same assets dictionary with the original object:

```javascript
var tClone = translator.clone();
```

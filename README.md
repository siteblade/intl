##### com.siteblade.intl

This package provides assets-based message translation.

## Getting started

```javascript
import { Translator } from 'com.siteblade.intl';

const translator = new Translator({
    assets: {
        // URL or path for resource loading
        path: 'path/to/res/lang',

        // configure JSON files for resource loading under assets.path option
        roots: ['common', 'validation'],

        // whether to clean assets automatically.
        clean: true,

        // 'fileSystem' or 'http'
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
console.log(t('common.contextual', Gender.MALE));
console.log(t('common.quantified', 10));
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

### Clone

When cloning Translator instances, it's recommended to set the `assets.clean` option to false.

To clone a Translator, you can use the Translator.clone() method, which will return an object that shares the same asset storage with the original object:

```javascript
var tClone = translator.clone();
```

### State extraction

```javascript
let state = translator.getState();
translator.setState(state);
```
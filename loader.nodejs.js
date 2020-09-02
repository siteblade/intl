import * as fs from 'fs';
import * as path from 'path';

export default function fileSystemResourceLoader(translator, language) {
    return new Promise(resolve => {
        let resolvedCount = 0;
        let length = translator._assetsRoots.length;
        for (let root of translator._assetsRoots) {
            fs.readFile(path.resolve(translator._assetsPath, language.toString(), root.replace(/\./g, '/') + '.json'), 'utf8', function(error, data) {
                if (!error)
                    translator._assignAssets(language, root, JSON.parse(data));
                if (++resolvedCount == length)
                    resolve();
            });
        }
    });
}
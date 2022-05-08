
const fs = require('fs');
const directory = "/Users/naor.tedgi/workdir/demand-libs/packages";

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        if (!dir.includes("node_modules")) {
            file = dir + '/' + file;
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory())
                results = results.concat(walk(file));
            else {
                if (file.includes("package.json"))
                    results.push(file);
            }
        }
    });
    return results;
}

const depMapper = {}
const files = walk(directory);
files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const json = JSON.parse(content);
    const { name, version, dependencies, devDependencies } = json;
    depMapper[name] = { ...depMapper[name], realVersion: version };
    deps = [dependencies, devDependencies].filter(it => it != null)
    deps.forEach(depCollection => {
        Object.keys(depCollection).forEach(key => {
            if (!depMapper.hasOwnProperty(key)) {
                depMapper[key] = {
                    version: [],
                    versionSet: new Set()
                };
            }
            if (!depMapper[key].hasOwnProperty('version')) {
                depMapper[key].version = [];
                depMapper[key].versionSet = new Set();
            }

            depMapper[key].version.push(depCollection[key]);
            depMapper[key].versionSet.add(depCollection[key]);
        })
    })
})

Object.keys(depMapper).forEach(key => {
    if (depMapper[key].version && depMapper[key].versionSet.size > 1) {
        console.log(key)
        console.log(depMapper[key])
        console.log(key, depMapper[key].versionSet.size);
        console.log("#################################################################");
    }
})
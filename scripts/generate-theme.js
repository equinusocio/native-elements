const glob = require('glob')
const fs = require('fs')
const propertyRegex = /(var\(.+\))/gmi

const cwd = process.cwd()

function findFiles() {
  return new Promise((resolve, reject) => {
    return glob(`${cwd}/src/elements/**/config.js`, (err, files) => {
      return err ? reject(err) : resolve(files)
    })
  })
}

function getFilesContent(fileList) {
  return fileList.map(file => fs.readFileSync(file, "utf8"))
}

function getProperties(fileContent) {
  return fileContent.map(fileCont => {
    return fileCont
      .match(propertyRegex)
      .map(r => {
        const property = r.split(',')[0].replace('var(', '').replace(',','');
        const valueRgx = /^([^,]+)(,\s)(.+)\){1}$/;
        const extractValue = r.match(valueRgx);
        const value = extractValue[3].replace('hsl(235, 100%, 60%)', 'var(--accent-color)')
        return `  ${property}: ${value};`
      })
  })
}

function writeFiles(arrayResult) {
  const results = [].concat(...arrayResult).join('\n')
  return new Promise((resolve, reject) => {
    return fs.writeFile(`${cwd}/theme.css`, `:root {
  --accent-color: hsl(235, 100%, 60%);

${results}
}`, (err) => {
      return err ? reject(err) : resolve('File written correctly.')
    })
  })
}

(async () => {
  const configFiles = await findFiles()
  const fileContents = getFilesContent(configFiles)
  const properties = getProperties(fileContents)
  const writeResult = await writeFiles(properties)
  console.log(writeResult)
})()

const glob = require('glob')
const fs = require('fs')
const propertyRegex = /(--ne)(.*?)(?=,)/gm

const cwd = process.cwd()

function findFiles() {
  return new Promise((resolve, reject) => {
    return glob(`${cwd}/src/elements/**/_config.pcss`, (err, files) => {
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
      .map(r => r.replace(/\s/g, ''))
  })
}

function writeFiles(arrayResult) {
  const results = [].concat(...arrayResult).join('\n')
  return new Promise((resolve, reject) => {
    return fs.writeFile(`${cwd}/vars.md`, results, (err) => {
      return err ? reject(err) : resolve('File written correctly.')
    })
  })
}

(async () => {
  const pcssFiles = await findFiles()
  const fileContents = getFilesContent(pcssFiles)
  const properties = getProperties(fileContents)
  const writeResult = await writeFiles(properties)
  console.log(writeResult)
})()

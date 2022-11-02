const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err,data) => {
            if(err) reject ('Could not find the file')
            resolve(data);
        })
    })
}

const writeFilePro = (file, data ) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if(err) reject (' File could not be written')
            resolve('Succesfull')
        })
    })
}

readFilePro(`${__dirname}/dog.txt`).then(data=> {});
const { DodecahedronGeometry } = require('three');
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`Breed: ${data}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
        if(err) return console.log(err.message);
        


        fs.writeFile('dog-img.txt', res.body.message, err => {
            if(err) return console.log(err.message);
            console.log('Random dog image save to file');
        })
    }).catch(err => {
        console.log(err.message);
    })

    
    
})
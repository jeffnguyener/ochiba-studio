require('dotenv').config();
const aws = require('aws-sdk');

aws.config.update({
  accessKeyId: process.env.AMAZON_S3_ID,
  secretAccessKey: process.env.AMAZON_S3_SECRET
})



const sign = (filename, filetype) => {
  let s3 = new aws.S3();

  let params = {
    Bucket: 'os-personal-project',
    Key: filename,
    Expires: 60,
    ContentType: filetype
  };

  return s3.getSignedUrl('putObject', params)
}

const getSignedURL = (req, res) => {
  let { filename, filetype } = req.body;
  if (filename && filetype) {
    let signedURL = sign(filename, filetype)
    res.send({
      url: signedURL
    })
  }
}

module.exports  = {getSignedURL}
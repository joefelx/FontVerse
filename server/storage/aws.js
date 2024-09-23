const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const {
  AWS_REGION,
  AWS_ACCESSKEY_ID,
  AWS_SECRET_ACCESSKEY,
  AWS_BUCKET_NAME,
} = require("../utils/constEnv");

let s3 = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESSKEY_ID,
    secretAccessKey: AWS_SECRET_ACCESSKEY,
  },
});

class AWSHandler {
  constructor() {}

  uploadFont(fileName, file, mimetype) {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: fileName,
      Body: file,
      ContentType: mimetype,
      ACL: "public-read",
    };

    return s3.send(new PutObjectCommand(params));
  }
}

const s3Connection = new AWSHandler();

module.exports = s3Connection;

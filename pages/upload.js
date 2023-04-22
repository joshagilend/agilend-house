import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'us-west-1' });

export default function Upload() {
    main();
    return (
        <>
        Upload status: not started.
        </>
    )
}

export const main = async () => {
    const command = new PutObjectCommand({
      Bucket: "agilend-house",
      Key: "hello-s3.txt",
      Body: "Hello S3!",
    });
  
    try {
      const response = await s3Client.send(command);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  
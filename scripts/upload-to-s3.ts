import {
	S3Client,
	PutObjectCommand,
	// ListObjectsV2Command,
	// DeleteObjectsCommand,
} from "@aws-sdk/client-s3"

import mime from "mime"
import path from "path"
import fs from "fs/promises"

const BUILD_PATH =
	path.resolve(process.cwd(), "build")

const Bucket =
	process.env.AWS_S3_BUCKET_NAME

const client =
	new S3Client({})

const main =
	async () => {
		try {
			// const listObjectsOutput =
			// 	await client.send(
			// 		new ListObjectsV2Command({
			// 			Bucket,
			// 		}),
			// 	)

			// if (listObjectsOutput.Contents) {
			// 	await client.send(
			// 		new DeleteObjectsCommand({
			// 			Bucket,
			// 			Delete: {
			// 				Objects:
			// 					listObjectsOutput.Contents.map(
			// 						({ Key }) => ({ Key }),
			// 					),
			// 			},
			// 		}),
			// 	)
			// }

			const files =
				await fs.readdir(BUILD_PATH)

			for (const Key of files) {
				const filePath =
					path.join(BUILD_PATH, Key)
				const Body =
					await fs.readFile(filePath)
				const mimeType =
					mime.getType(filePath)
				if (mimeType) {
					await client.send(
						new PutObjectCommand({
							Key,
							Body,
							Bucket,
							ContentType: mimeType,
						}),
					)
				}
			}
		} catch (error) {
			console.error(error)
		}
	}

void main()
interface ProcessEnv {
	HOST: string,
	PORT: string,
	AWS_REGION: string,
	AWS_ACCESS_KEY_ID: string,
	AWS_S3_BUCKET_NAME: string,
	AWS_SECRET_ACCESS_KEY: string,
	NODE_ENV: "development" | "production",
}
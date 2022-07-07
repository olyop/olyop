type NodeENV =
	"development" | "production"

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: NodeENV,

		HOST: string,
		PORT: string,

		AWS_REGION: string,
		AWS_ACCESS_KEY_ID: string,
		AWS_ACCESS_KEY_SECRET: string,

		AWS_S3_BUCKET_NAME: string,
	}
}
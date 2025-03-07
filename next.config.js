/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			// Wildcard path matching
			{
				source: "/competitions/:competitionId",
				destination: "/competitions/:competitionId/results",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;

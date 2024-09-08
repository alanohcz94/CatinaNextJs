/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'owjosckubsnefkjsattp.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**'
            }
        ]
    },
    // output: "export",
};

export default nextConfig;

// In order to generate / deploy this contain we will need to add output: "export" first
// when we want to npm run dev please remember to comment out output: "export"
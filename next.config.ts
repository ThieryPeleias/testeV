import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Remove this line to surface any Typescript errors during the build.
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // Remove this line to surface any ESLint errors during the build.
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'virtuart4d.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'srv951-files.hstgr.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /**
   * Fix: Add allowedDevOrigins
   *
   * This configuration addresses the issue where the Next.js app was blocking
   * cross-origin requests from development origins. By specifying the allowed
   * origins, we ensure that the app can communicate with these origins during
   * development.
   *
   * More info: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
   */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Or specify the exact origins you want to allow
          },
        ],
      },
    ];
  },
  /**
   * Fix: Add allowedDevOrigins
   *
   * This configuration addresses the issue where the Next.js app was blocking
   * cross-origin requests from development origins. By specifying the allowed
   * origins, we ensure that the app can communicate with these origins during
   * development.
   *
   * More info: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
   */
  // Added allowedDevOrigins due to cross-origin request issues during development
  allowedDevOrigins: [
    'https://6000-idx-studio-1744334051470.cluster-4xpux6pqdzhrktbhjf2cumyqtg.cloudworkstations.dev',
    'https://9000-idx-studio-1744334051470.cluster-4xpux6pqdzhrktbhjf2cumyqtg.cloudworkstations.dev',
    'https://9002-idx-studio-1744334051470.cluster-4xpux6pqdzhrktbhjf2cumyqtg.cloudworkstations.dev',
  ],
};

export default nextConfig;

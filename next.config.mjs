import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export"
};

export default withNextVideo(nextConfig, { folder: 'public/images/hero.mp4' });
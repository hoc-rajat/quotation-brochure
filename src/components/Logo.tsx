
const LOGO_URL = "/image.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return <img src={LOGO_URL} alt="House of Companies" className={`block w-auto ${className}`} />;
}
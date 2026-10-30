import { SarajAnimatedLogo } from "./SarajAnimatedLogo";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
};

/**
 * Saraj Foundation official logo:
 * Circular emblem with dove, sunbeams, hands and flowers,
 * enhanced with smooth, cinematic CSS animations.
 */
export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  return (
    <SarajAnimatedLogo
      className={className}
      variant={variant}
      size={size}
      showText={true}
    />
  );
}

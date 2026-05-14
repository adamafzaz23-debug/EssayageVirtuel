import { 
  Compass, 
  Camera, 
  User, 
  Shirt, 
  Menu, 
  ShoppingBag, 
  ChevronRight, 
  RotateCcw, 
  Eye, 
  Plus, 
  CheckCircle2, 
  ArrowRight,
  Maximize2,
  Minimize2,
  Ruler,
  Wind,
  Maximize,
  Verified,
  Sparkles,
  Edit,
  Accessibility
} from "lucide-react";

interface IconProps {
  size?: number;
  filled?: boolean;
  className?: string;
}

export const ExploreIcon = ({ size = 24, filled = false, className }: IconProps) => (
  <Compass size={size} strokeWidth={filled ? 2.5 : 1.5} className={className} />
);

export const ScanIcon = ({ size = 24, filled = false, className }: IconProps) => (
  <Camera size={size} strokeWidth={filled ? 2.5 : 1.5} fill={filled ? "currentColor" : "none"} className={className} />
);

export const WardrobeIcon = ({ size = 24, filled = false, className }: IconProps) => (
  <Shirt size={size} strokeWidth={filled ? 2.5 : 1.5} className={className} />
);

export const ProfileIcon = ({ size = 24, filled = false, className }: IconProps) => (
  <User size={size} strokeWidth={filled ? 2.5 : 1.5} fill={filled ? "currentColor" : "none"} className={className} />
);

export const MenuIcon = ({ size = 24, className }: IconProps) => (
  <Menu size={size} strokeWidth={1.5} className={className} />
);

export const ShoppingBagIcon = ({ size = 24, className }: IconProps) => (
  <ShoppingBag size={size} strokeWidth={1.5} className={className} />
);

export const ChevronRightIcon = ({ size = 20, className }: IconProps) => (
  <ChevronRight size={size} strokeWidth={1.5} className={className} />
);

export const RefreshIcon = ({ size = 20, className }: IconProps) => (
  <RotateCcw size={size} strokeWidth={1.5} className={className} />
);

export const EyeIcon = ({ size = 20, className }: IconProps) => (
  <Eye size={size} strokeWidth={1.5} className={className} />
);

export const PlusIcon = ({ size = 20, className }: IconProps) => (
  <Plus size={size} strokeWidth={1.5} className={className} />
);

export const CheckIcon = ({ size = 20, className }: IconProps) => (
  <CheckCircle2 size={size} strokeWidth={1.5} className={className} />
);

export const ArrowRightIcon = ({ size = 20, className }: IconProps) => (
  <ArrowRight size={size} strokeWidth={1.5} className={className} />
);

export const RulerIcon = ({ size = 20, className }: IconProps) => <Ruler size={size} strokeWidth={1.5} className={className} />;
export const WindIcon = ({ size = 20, className }: IconProps) => <Wind size={size} strokeWidth={1.5} className={className} />;
export const MaximizeIcon = ({ size = 20, className }: IconProps) => <Maximize size={size} strokeWidth={1.5} className={className} />;
export const VerifiedIcon = ({ size = 20, className }: IconProps) => <Verified size={size} strokeWidth={1.5} className={className} />;
export const SparklesIcon = ({ size = 20, className }: IconProps) => <Sparkles size={size} strokeWidth={1.5} className={className} />;
export const EditIcon = ({ size = 20, className }: IconProps) => <Edit size={size} strokeWidth={1.5} className={className} />;
export const AccessibilityIcon = ({ size = 20, className }: IconProps) => <Accessibility size={size} strokeWidth={1.5} className={className} />;
export const AspectRatioIcon = ({ size = 20, className }: IconProps) => <Maximize2 size={size} strokeWidth={1.5} className={className} />;

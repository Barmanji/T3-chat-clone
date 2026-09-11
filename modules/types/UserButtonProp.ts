interface UserButtonProp {
  user?: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    createdAt: Date;
  } | null;
  onLogout?: () => void;
  onSettings?: () => void;
  onProfile?: () => void;
  onBilling?: () => void;
  showBadge?: boolean;
  badgeText?: string;
  badgeVariant?: "default" | "link" | "outline" | "secondary" | "ghost" | "destructive" | null;
  size?: "sm" | "md" | "lg";
  showEmail?: boolean;
  showMemberSince?: boolean;
}

interface UserButtonProp {
  user?: any;
  onLogout?: () => void;
  onSettings?: () => void;
  onProfile?: () => void;
  onBilling?: () => void;
  showBadge?: boolean;
  badgeText?: string;
badgeVariant?: "default" | "link" | "outline" | "secondary" | "ghost" | "destructive" | null | undefined;
  size?: string;
  showEmail?: boolean;
  showMemberSince?: boolean;
}

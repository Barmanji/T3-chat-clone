interface ModalProp {
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
  showFooter?: boolean;
  submitVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null;
  size?: string;
  className?: string;
}

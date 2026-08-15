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
  submitVariant?: string;
  size?: string;
  className?: string;
}

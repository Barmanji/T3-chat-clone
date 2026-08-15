interface ChatItemProp {
  chat: {
    id: string;
    title: string;
    [key: string]: any;
  };
  isActive?: boolean;
  onDelete: (e: React.MouseEvent, chatId: string) => void;
}

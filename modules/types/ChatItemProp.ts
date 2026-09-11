interface ChatItemProp {
  chat: {
    id: string;
    title: string;
    createdAt: string | Date;
    messages?: Array<{
      id: string;
      content: string;
      messageRole: string;
    }>;
  };
  isActive?: boolean;
  onDelete: (e: React.MouseEvent, chatId: string) => void;
}

interface ChatGroupProp {
  label: string;
  chats: Array<{
    id: string;
    title: string;
    createdAt: string | Date;
    messages?: Array<{
      id: string;
      content: string;
      messageRole: string;
    }>;
  }>;
  activeChatId?: string;
  onDelete: (e: React.MouseEvent, chatId: string) => void;
}

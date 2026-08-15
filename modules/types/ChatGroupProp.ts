interface ChatGroupProp {
  label: string;
  chats: any[];
  activeChatId?: string | number;
onDelete: (e: React.MouseEvent, chatId: string) => void;
}

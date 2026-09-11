import ChatMessageView from "@/modules/chat/components/chat-view/chat-message-view";
import { currentUser } from "@/modules/authentication/actions";

export default async function Home() {
  const user = await currentUser()
  return (
   <>
    <ChatMessageView user={user}/>
   </>
  );
}

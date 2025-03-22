import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../util/chatSlice";
import { generateRandomName, getRandomMessage } from "../../../helper/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[487px] border border-gray-300 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form className="w-full border border-gray-300 rounded-lg" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
          name: 'you',
          message: liveMessage
        }))
        setLiveMessage('');
      }}>
        <input
          className="p-2 w-3/4"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-1/4">Send</button>
      </form>
    </>
  );
}

export default LiveChat;

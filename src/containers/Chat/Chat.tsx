import {useState} from "react";
import {Message} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";

const Chat = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    setInterval( async () => {
        try {
            const {data} = await axiosApi.get<Message>("/messages");
            setMessages([...messages, data]);
        } catch (e) {
            console.error('Some error', e);
        }
    }, 3000);


    return (
        <div className="mx-auto">
fs
        </div>
    );
};

export default Chat;
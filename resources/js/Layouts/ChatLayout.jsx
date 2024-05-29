import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const ChatLayout = ({ children }) => {

    const page = usePage();
    const conversation = page.props.conversation;
    const selectedConversation = page.props.selectedConversation;

    console.log(conversation);
    console.log(selectedConversation);
    useEffect(() => {

        Echo.join("online")
            .here((user) => {
                console.log("join", user);
            })
            .joining((user) => {
                console.log("joining", user);
            })
            .leaving((user) => {
                console.log("leaving", user);
            })
            .error((error) => {
                console.log("error", user);
            });

        return () => {
            Echo.leave("online");
        }

    }, [])

    return (
        <>
            Chat Layout
            <div>
                {children}
            </div>
        </>
    );
}

export default ChatLayout;
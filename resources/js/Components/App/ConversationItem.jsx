import { Link, usePage } from "@inertiajs/react";

const ConversationItem = ({
    conversation,
    selectedConversation = null,
    online = null,
}) => {

    const page = usePage();
    const currentUser = page.props.auth.user;
    let classes = " border-transparent";
    if (selectedConversation) {
        if (
            !selectedConversation.is_group &&
            !conversation.is_group &&
            selectedConversation.id == conversation.id
        ) {
            classes = "border-blue-500 bg-black/20";
        }

        if (
            selectedConversation.is_group &&
            conversation.is_group &&
            selectedConversation.id == conversation.id
        ) {
            classes = "border-blue-500 bg-black/20";
        }
    }
    return (
        <Link
            href={
                conversation.is_group
                    ? route('chat.group', conversation)
                    : route('chat.user', conversation)
            }
        >

        </Link>
    );
}

export default ConversationItem;
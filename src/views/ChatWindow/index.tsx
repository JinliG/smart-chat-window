import Chat, { Bubble, MessageProps, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';
import styles from './index.module.less';
import { getMessageCompletion } from './service';

const ChatWindow = () => {
	const { messages, appendMsg, setTyping } = useMessages([]);

	function handleSend(type: string, val: string) {
		if (type === 'text' && val.trim()) {
			appendMsg({
				type: 'text',
				content: { text: val },
				position: 'right',
			});

			setTyping(true);

			getMessageCompletion({ msg: val })
				.then((res) => {
					const { data } = res.data;

					let responseContent = data?.choices[0].text as string;
					if (responseContent.startsWith('\n\n')) {
						responseContent = responseContent.replace('\n\n', '');
					}

					appendMsg({
						type: 'text',
						content: { text: responseContent },
					});
				})
				.catch((err) => {});
		}
	}

	function renderMessageContent(msg: MessageProps) {
		const { content } = msg;
		return (
			<div className={styles.bubbleWrapper}>
				<Bubble content={content.text} />
			</div>
		);
	}

	return (
		<div className={styles['chat-window']}>
			<Chat
				navbar={{ title: 'AA' }}
				messages={messages}
				toolbar={[
					{
						type: 'image',
						title: '相册',
						icon: 'image',
					},
				]}
				renderMessageContent={renderMessageContent}
				onSend={handleSend}
			/>
		</div>
	);
};

export default ChatWindow;

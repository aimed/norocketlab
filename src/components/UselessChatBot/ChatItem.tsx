import * as React from 'react';

export interface ChatItemData {
  id: string | number;
  sender: 'user' | 'bot';
  message: string | JSX.Element | null;
}

export interface ChatItemProps {
  item: ChatItemData;
}

export class ChatItem extends React.Component<ChatItemProps, {}> {
  render() {
    const { sender, message } = this.props.item;

    return (
      <div className={'chat-item sender-' + sender}>{message}</div>
    );
  }
}

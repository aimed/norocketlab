import './UselessChatBot.css';

import * as React from 'react';

import { Chat } from './Chat';
import { ChatInput } from './ChatInput';
import { ChatItemData } from './ChatItem';

const invertString = (str: string): string => str.split('').map((c, i) => str[str.length - 1 - i]).join('');

export interface UselessChatBotState {
  items: ChatItemData[];
}

export interface UselessChatBotProps {
}

export class UselessChatBot extends React.Component<UselessChatBotProps, {}> {

  static msgId: number = 0;

  state: UselessChatBotState = {
    items: []
  };

  makeMsg = (message: string, sender: 'user' | 'bot'): ChatItemData => ({
    id: UselessChatBot.msgId++,
    message,
    sender
  })

  componentDidMount() {
    this.addItems(
      this.makeMsg(`Hello! I'm a really useless 🤖`, 'bot'),
      this.makeMsg(`Like really useless 💁🏼`, 'bot')
    );
  }

  addItems = (...messages: ChatItemData[]) => {
    this.setState({ items: [...this.state.items, ...messages] });
  }

  handleUserMessage = (message: string) => {
    this.addItems(this.makeMsg(message, 'user'), this.makeMsg(invertString(message) + '?', 'bot'));
  }

  render() {
    return (
      <div className="useless-chat-bot">
        <Chat items={this.state.items} />
        <ChatInput onSubmit={this.handleUserMessage} />
      </div>
    );
  }
}

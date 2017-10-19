import * as React from 'react';

export interface ChatInputState {
  value: string;
}

export interface ChatInputProps {
  onSubmit?: (value: string) => void;
}

export class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  state: ChatInputState = {
    value: ''
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.props.onSubmit && this.state.value !== '') {
      this.props.onSubmit(this.state.value);
    }

    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.handleSubmit}>
        <input
          placeholder="Type here..."
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
      </form>
    );
  }
}

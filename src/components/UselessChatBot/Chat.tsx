import * as React from 'react';

import { ChatItem, ChatItemData } from './ChatItem';

export interface ChatProps {
  items?: ChatItemData[];
}

export class Chat extends React.Component<ChatProps, {}> {
  containerRef: HTMLDivElement | null = null;

  componentDidUpdate() {
    const container = this.containerRef;

    // Scroll so that the last message is visible.
    if (container && container.children.length > 0) {
      const lastChild = container.children[container.children.length - 1];
      lastChild.scrollIntoView();
    }
  }

  render() {
    return (
      <div className="chat" ref={(ref) => this.containerRef = ref}>
      {(this.props.items || []).map(item =>
        <ChatItem item={item} key={item.id} />
      )}
      </div>
    );
  }
}

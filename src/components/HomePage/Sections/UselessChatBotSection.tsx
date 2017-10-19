import './UselessChatBotSection.css';

import * as React from 'react';

import { UselessChatBot } from '../../UselessChatBot/UselessChatBot';

interface UselessChatBotSectionProps {
}

export const UselessChatBotSection: React.SFC<UselessChatBotSectionProps> = (props) => {
  return (
    <section className="useless-chat-bot-section">
      <UselessChatBot />
    </section>
  );
};

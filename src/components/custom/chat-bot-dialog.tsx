import Script from 'next/script';

export function ChatBotDialog() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      <df-messenger
        project-id={process.env.NEXT_GOOGLE_DIALOGFLOW_PROJECT_ID}
        agent-id={process.env.NEXT_GOOGLE_DIALOGFLOW_AGENT_ID}
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="softtek-assistant" />
      </df-messenger>

      <Script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></Script>
    </>
  );
}

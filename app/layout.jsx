import '@styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

function RootLayout({ children }) {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;

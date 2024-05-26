export default function Main({ children }: { children: React.ReactElement[] }) {
  return (
    <main>
      <h2>Completed challenges</h2>
      {children}
    </main>
  );
}

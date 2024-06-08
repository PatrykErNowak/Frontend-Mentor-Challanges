function Message({ children }: { children: string }) {
  return <p className="py-4 px-5 text-activeTask text-center bg-task border-b border-defaultColor sm:py-5 sm:px-6 sm:text-lg">{children}</p>;
}

export default Message;

export default function Page({ children }) {
  return (
    <div className="h-screen flex justify-center items-center p-4">
      {children}
    </div>
  );
}
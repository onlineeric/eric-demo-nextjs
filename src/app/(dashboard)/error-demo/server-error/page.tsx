export default async function ServerErrorPage() {
  // Intentionally throw an error to demonstrate error handling
  throw new Error("This is a simulated server error for demonstration purposes");
  
  return (
    <div>
      <h2>This should not be visible</h2>
    </div>
  );
}
import ActionForm from "./ui/ActionForm";

export default function ActionsPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Server Actions</h2>
      <p>Handle a form without writing a separate POST API by calling a server function directly.</p>
      <ActionForm />
    </section>
  );
}
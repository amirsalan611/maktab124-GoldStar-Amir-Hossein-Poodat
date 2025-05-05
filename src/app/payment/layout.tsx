export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-neutral-100 min-h-screen">
      {children}
    </section>
  );
}

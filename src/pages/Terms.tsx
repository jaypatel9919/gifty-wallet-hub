import PublicLayout from "@/components/layout/PublicLayout";

const Terms = () => (
  <PublicLayout>
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">By accessing and using GoToGifty, you accept and agree to be bound by the terms and conditions of this agreement.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">2. Gift Card Terms</h2>
          <p className="text-muted-foreground">Digital gift cards are subject to the terms set by individual stores and networks. Balances are non-refundable unless required by law.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
          <p className="text-muted-foreground">Users are responsible for maintaining the security of their accounts and OTP verification codes.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">4. Contact</h2>
          <p className="text-muted-foreground">For questions about these terms, contact us at legal@gotogifty.com</p>
        </section>
      </div>
    </div>
  </PublicLayout>
);

export default Terms;

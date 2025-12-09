import PublicLayout from "@/components/layout/PublicLayout";

const Privacy = () => (
  <PublicLayout>
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
          <p className="text-muted-foreground">We collect information you provide directly, including name, email, phone number, and transaction data.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground">Your information is used to process transactions, provide customer support, and improve our services.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Data Security</h2>
          <p className="text-muted-foreground">We implement industry-standard security measures including encryption and OTP verification.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground">For privacy inquiries, contact privacy@gotogifty.com</p>
        </section>
      </div>
    </div>
  </PublicLayout>
);

export default Privacy;

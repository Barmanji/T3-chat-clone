import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground cursor-pointer mb-8 inline-block"
        >
          ← Back to T3 Chat
        </Link>

        <h1 className="text-3xl font-bold mb-8">Legal Information</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Terms of Service</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Welcome to T3 Chat. By accessing or using our service, you agree
                to be bound by these Terms of Service.
              </p>
              <p>
                <strong>Use of Service:</strong> T3 Chat provides an AI-powered
                chat interface. You may use the service for lawful purposes only
                and in accordance with these Terms.
              </p>
              <p>
                <strong>User Accounts:</strong> You are responsible for
                safeguarding the credentials used to access the service and for
                all activities that occur under your account.
              </p>
              <p>
                <strong>Acceptable Use:</strong> You agree not to misuse the
                service, including but not limited to: generating harmful,
                illegal, or offensive content; attempting to circumvent usage
                limits; or disrupting the service for other users.
              </p>
              <p>
                <strong>Intellectual Property:</strong> The service and its
                original content, features, and functionality are owned by T3
                Chat and are protected by international copyright, trademark,
                patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                <strong>Disclaimer:</strong> The service is provided &quot;as
                is&quot; without warranties of any kind. T3 Chat does not
                guarantee the accuracy, completeness, or reliability of any
                AI-generated content.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> In no event shall T3
                Chat be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of
                the service.
              </p>
              <p>
                <strong>Termination:</strong> We may terminate or suspend your
                access to the service immediately, without prior notice, for
                conduct that we determine violates these Terms.
              </p>
              <p>
                <strong>Changes:</strong> We reserve the right to modify these
                Terms at any time. Continued use of the service after changes
                constitutes acceptance of the new Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Privacy Policy</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Your privacy is important to us. This Privacy Policy explains
                how T3 Chat collects, uses, and protects your personal
                information.
              </p>
              <p>
                <strong>Information We Collect:</strong> When you sign in via a
                third-party provider (GitHub or Google), we collect your name,
                email address, and profile image as provided by that provider.
              </p>
              <p>
                <strong>Chat Data:</strong> Your chat conversations are stored
                securely in our database and are only accessible by you. We do
                not share your conversations with third parties.
              </p>
              <p>
                <strong>AI Interactions:</strong> Messages you send to AI models
                are processed through third-party AI providers (e.g.,
                OpenRouter). These providers may process your messages according
                to their own privacy policies.
              </p>
              <p>
                <strong>Data Security:</strong> We implement appropriate security
                measures to protect your personal information. However, no
                method of electronic transmission or storage is 100% secure.
              </p>
              <p>
                <strong>Data Retention:</strong> We retain your account
                information and chat data for as long as your account is
                active. You may delete your chats at any time.
              </p>
              <p>
                <strong>Cookies:</strong> We use session cookies to maintain
                your authentication state. These cookies are essential for the
                service to function.
              </p>
              <p>
                <strong>Third-Party Services:</strong> We use GitHub and Google
                for authentication, Neon for database hosting, and OpenRouter
                for AI model access. Each has its own privacy policy.
              </p>
              <p>
                <strong>Contact:</strong> If you have questions about this
                Privacy Policy, please contact us through our GitHub
                repository.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">AI Content Disclaimer</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                AI-generated content provided through T3 Chat is for
                informational purposes only. Always verify important
                information independently. AI models may occasionally produce
                inaccurate or misleading responses.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

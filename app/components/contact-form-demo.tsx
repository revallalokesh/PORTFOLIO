import { useRef, useState } from "react";
import { Label } from "./subcomponents/label";
import { Input } from "./subcomponents/input";
import { cn } from "./lib/utils";
import { IconSend } from "@tabler/icons-react";
import emailjs from "emailjs-com";

export default function ContactFormDemo() {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      setStatusMessage("Please fill in all fields.");
      setStatusType("warning");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        () => {
          setStatusMessage("Your message has been sent successfully!");
          setStatusType("success");
          formRef.current?.reset();
        },
        () => {
          setStatusMessage("Oops! Something went wrong.");
          setStatusType("error");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="border-5 border-white max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-gradient-to-b from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mx-auto text-center mb-4 dark:text-neutral-300">
        Have a question or want to get in touch? Send me a message!
      </p>

      <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="you@example.com" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="Your message subject" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows={4}
            required
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50/80 dark:bg-zinc-800/80 text-black dark:text-white shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
          <IconSend className="inline-block ml-2 h-4 w-4" />
        </button>

        {statusMessage && (
          <div
            className={`mt-4 p-3 text-center rounded-md text-sm backdrop-blur-sm ${
              statusType === "success"
                ? "bg-green-100/80 text-green-700"
                : statusType === "error"
                ? "bg-red-100/80 text-red-700"
                : "bg-yellow-100/80 text-yellow-700"
            }`}
          >
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

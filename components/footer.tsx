import { Container } from "./container";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-center gap-2 text-xs text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>Construído com Next.js, TypeScript e Tailwind CSS.</p>
      </Container>
    </footer>
  );
}

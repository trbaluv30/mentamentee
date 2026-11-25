import { Container, Cta } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="max-w-3xl py-20 text-center md:py-28">
      <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">We couldn&apos;t find that page.</h1>
      <p className="mt-4 text-lg text-slate-700">But your mentor is still out there.</p>
      <Cta href="/" className="mt-8">
        Go to the home page
      </Cta>
    </Container>
  );
}

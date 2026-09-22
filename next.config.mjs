/**
 * Cabeçalhos de segurança.
 *
 * O site não carrega nada de origem externa — fontes, ícones e logos são
 * servidos do próprio domínio —, então a CSP pode ser restritiva sem
 * quebrar nada.
 *
 * `'unsafe-inline'` em script-src é necessário porque o Next injeta um
 * bootstrap inline e o next-themes aplica o tema antes da primeira pintura.
 * Eliminá-lo exigiria nonce por requisição, o que tornaria as páginas
 * dinâmicas e derrubaria a geração estática. O risco residual é baixo: o
 * site não renderiza nenhuma entrada de usuário. Note que 'unsafe-eval'
 * NÃO está liberado.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

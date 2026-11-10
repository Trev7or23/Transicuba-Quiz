import cors from "cors";

export function corsMiddleware() {
  const corsOrigin = process.env.CORS_ORIGIN ?? "*";
  return cors({
    origin: corsOrigin,
  });
}

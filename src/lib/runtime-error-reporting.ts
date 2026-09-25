/**
 * Minimal runtime error reporting hook used by the root error boundary.
 * Extend this to forward errors to your own monitoring service.
 */
export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[runtime-error]", {
    message,
    ...(stack !== undefined && { stack }),
    route: window.location.pathname,
    ...context,
  });
}

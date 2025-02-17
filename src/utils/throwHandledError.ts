export function throwHandledError(prefix: string, error: unknown): never {
  const message = error instanceof Error ? error.message : "erro desconhecido";
  throw new Error(`${prefix}: ${message}`);
}

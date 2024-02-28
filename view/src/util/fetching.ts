export async function get<T = unknown>(url: string): Promise<T | undefined> {
  const response = await fetch(url);
  try {
    return (await response.json()) as T;
  } catch {
    return undefined;
  }
}

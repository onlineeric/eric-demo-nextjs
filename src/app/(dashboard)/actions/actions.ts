'use server';

export async function toUpper(formData: FormData) {
  const s = (formData.get('text') as string) ?? "";
  return s.toUpperCase();
}
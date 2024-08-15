export default async function invoices() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <h1>Welcome to invoices!</h1>;
}

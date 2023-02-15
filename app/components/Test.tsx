import { ClientOnly } from "remix-utils";

export default function Test() {
  return <ClientOnly>{() => <div>Test</div>}</ClientOnly>;
}

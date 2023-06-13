import { Check } from "lucide-solid";
function SentBadge() {
  return (
    <span class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
      <Check size={16} class="mr-1" />
      <p class="whitespace-nowrap text-sm">Sent</p>
    </span>
  );
}

export default SentBadge;

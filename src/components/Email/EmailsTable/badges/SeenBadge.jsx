import { CheckCheck } from "lucide-solid";

function SeenBadge() {
  return (
    <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
      <CheckCheck size={16} class="mr-1" />
      <p class="whitespace-nowrap text-sm">Seen</p>
    </span>
  );
}

export default SeenBadge;

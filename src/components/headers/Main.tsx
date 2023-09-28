import names from "@/constants/names";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <div className="flex flex-row w-screen px-4 py-2 justify-between items-center border-b-2 border-cyan-700">
      <Bars3Icon className="w-10 h-10" />
      <div className="text-4xl font-bold my-auto pb-1 justify-center">
        {names.serviceName}
      </div>
      <MagnifyingGlassIcon className="w-10 h-10" />
    </div>
  );
}

import { names } from "@/constants";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <div className="flex flex-row w-screen px-4 py-1.5 justify-between items-center border-b-2 border-main-blue-dark">
      <Bars3Icon className="w-8 h-8" />
      <div className="text-4xl font-bold my-auto pb-1 justify-center">
        {names.serviceName}
      </div>
      <MagnifyingGlassIcon className="w-8 h-8" />
    </div>
  );
}

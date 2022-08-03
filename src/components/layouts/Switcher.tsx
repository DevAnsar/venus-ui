import { Switch } from "@headlessui/react";

const Switcher: React.FC<{
  enabled?: boolean;
  setEnabled?: (status: boolean) => void;
}> = ({ enabled, setEnabled }) => {
  if (typeof setEnabled !== "function") {
    setEnabled = (status: boolean) => {
      console.log(status);
    };
  }
  return (
    <Switch
      checked={enabled || false}
      onChange={setEnabled}
      className={`${enabled ? "bg-[#1f2028]" : "bg-[#1f2028]"}
          relative inline-flex h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${
          enabled ? "translate-x-6 bg-blue-500" : "translate-x-0 bg-[#383944]"
        }
            pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};
export default Switcher;

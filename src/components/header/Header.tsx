import DropDown from "../dropDown/DropDown";
import Logo from "../logo/Logo";
import SearchInput from "../Shared/SearchInput/SearchInput";

export default function Header() {
  return (
    <div className="p-5 bg-gray-50 flex justify-between">
      <Logo />
      <div className="flex flex-col gap-5 justify-center">
        <SearchInput />
        <DropDown />
      </div>
      <div></div>
    </div>
  );
}

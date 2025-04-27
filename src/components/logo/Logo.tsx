import { useRouter } from "next/navigation";

  export default function Logo() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
      <img src="/goldStar.jpg" alt="logo" className="w-[70px] rounded-full" />
      <p className="text-2xl">Gold Star</p>
    </div>
  );
}

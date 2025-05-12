import Image from "next/image";
import { useRouter } from "next/navigation";

  export default function Logo() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
      <Image src="/goldStar.jpg" alt="logo" className="w-[70px] rounded-full" width={1000} height={1000}/>
      <p className="text-2xl">Gold Star</p>
    </div>
  );
}

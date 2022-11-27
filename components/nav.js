import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <>
      <nav
        className={`z-10 bg-black fixed top-0 left-0 right-0 h-[60px] font-normal flex flex-row gap-10 uppercase items-center justify-center
      
      
      `}
      >
        <div
          onClick={() => {
            router.push("/certificateswebinars");
          }}
          className={` cursor-pointer
        ${router.route == "/certificateswebinars" ? "underline" : ""}
        `}
        >
          Certificates/Webinars
        </div>

        <div
          onClick={() => {
            router.push("/");
          }}
          className={` cursor-pointer
        ${router.route == "/" ? "underline" : ""}
        `}
        >
          Home
        </div>
      </nav>
    </>
  );
}

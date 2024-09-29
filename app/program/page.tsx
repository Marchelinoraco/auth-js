import Link from "next/link";

const ProgramPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-screen-md mx-auto py-10">
        <div className="flex gap-4 justify-center lg:text-2xl ">
          <Link
            className="hover:text-red-500 hover:font-semibold duration-300 "
            href="program/program-pemuda"
          >
            Program Pemuda
          </Link>
          <Link
            className="hover:text-red-500 hover:font-semibold duration-300 "
            href="program/program-olahraga"
          >
            Program Olahraga
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;

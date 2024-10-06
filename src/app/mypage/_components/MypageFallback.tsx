import Image from "next/image";

const MypageFallback = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px] border-gray-scale-200 bg-gray-scale-0">
      <Image
        src="/images/fallbackLogo.png"
        alt="service"
        width={76}
        height={76}
      />
      <span className="text-body2-medium text-gray-scale-600">
        아직 스크랩한 페스티벌이 없어요!
      </span>
    </div>
  );
};

export default MypageFallback;

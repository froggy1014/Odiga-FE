import Image from "next/image";
import { FC } from "react";

import { useUserStore } from "@/store/user";
import { UserTypeImage, UserTypeText } from "@/utils";

interface Props {}

const RecommendFestivalHeader: FC<Props> = ({}) => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="relative flex w-full justify-between">
      <div className="flex w-1/2 flex-wrap pb-[18px] text-title-bold">
        <span className={UserTypeText[user?.userTypeId ?? 1]}>
          {user?.nickname ?? "피에스타"}
        </span>
        <span>들을</span>
        <span>위한 페스티벌이에요!</span>
      </div>
      <Image
        className="absolute bottom-[-15px] right-[20px]"
        src={UserTypeImage[user?.userTypeId ?? 1] ?? "/images/fallbackLogo.png"}
        alt={user?.nickname ?? "피에스타"}
        width={109}
        height={109}
      />
    </div>
  );
};

export default RecommendFestivalHeader;
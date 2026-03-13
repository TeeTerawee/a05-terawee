import InteractiveCard from "./InteractiveCard";

export default function Card({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard>
      <img src={imgSrc} className="w-full h-[200px] object-cover rounded-lg" />

      <div className="p-2 text-center font-bold">{venueName}</div>
    </InteractiveCard>
  );
}

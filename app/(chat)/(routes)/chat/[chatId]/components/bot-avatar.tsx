import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAVatarProps {
  src: string;
}

const BotAVatar = ({ src }: BotAVatarProps) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default BotAVatar;

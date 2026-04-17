import { User, Flag, Clock } from "lucide-react";
import { getDuration, getStatusColor } from "@/lib/utils";

type Props = {
  collabType: string;
  status: string;
  start?: string;
  end?: string;
};

export function ProjectFooter({ collabType, status, start, end }: Props) {
  return (
    <div className="pt-4 border-t mt-4 grid grid-cols-3 gap-3 text-sm w-full">
      <div className="flex flex-col items-start text-xs gap-2">
        <div className="flex items-center gap-1 text-muted-foreground pl-1">
          <User className="w-4 h-4" /> Role
        </div>
        <div className="w-full">
          <div className="px-3 py-1 rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            {collabType}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-xs gap-2">
        <div className="flex items-center gap-1 text-muted-foreground pl-1">
          <Flag className="w-4 h-4" /> Status
        </div>
        <div className="w-full">
          <div className={`px-3 py-1 rounded-md w-full text-start ${getStatusColor(status)}`}>
            {status}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-xs gap-2">
        <div className="flex items-center gap-1 text-muted-foreground pl-1">
          <Clock className="w-4 h-4" /> Duration
        </div>
        <div className="w-full">
          <div className="px-3 py-1 rounded-md w-full text-start bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200">
            {getDuration(start, end)}
          </div>
        </div>
      </div>
    </div>
  );
}

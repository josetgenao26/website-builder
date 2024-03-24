import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/common/components/tooltip";
import { Button } from "@/modules/common/components/button";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  tootip: string;
  letter: string;
  title: string;
  active?: boolean;
  className?: string;
};

const SidebarButton = (props: Props) => {
  if (!props.tootip) {
    return (
      <Button
        {...props}
        className={cn(
          "rounded-xl bg-gray-100 p-2 text-gray-400 hover:bg-gray-50",
          props.className,
          props.active && "bg-gray-100 text-blue-600"
        )}
      >
        <span className="h-6 w-6 stroke-current">{props.children}</span>
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            "rounded-xl p-2 text-gray-400 hover:bg-gray-50",
            props.className,
            props.active && "bg-gray-100 text-blue-600"
          )}
        >
          <span className="h-6 w-6 stroke-current">{props.children}</span>
        </TooltipTrigger>
        <TooltipContent align="end">
          <p>
            {props.tootip}
            {props.letter && (
              <span className="text-gray-500 font-semibold">
                {" "}
                ({props.letter})
              </span>
            )}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarButton;

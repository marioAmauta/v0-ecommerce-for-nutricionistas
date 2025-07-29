"use client";

import { Eye, EyeOff, Lock } from "lucide-react";
import { ComponentProps, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputPassword({ className, ref, ...props }: ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-gray-400" />
      <Input ref={ref} type={showPassword ? "text" : "password"} className={cn("px-10", className)} {...props} />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="size-4 text-gray-400" /> : <Eye className="size-4 text-gray-400" />}
      </Button>
    </div>
  );
}

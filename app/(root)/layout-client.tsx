"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Header from "@/components/header";
import ChatSidebar from "@/modules/chat/components/chat-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type LayoutUser = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  createdAt: Date;
} | null;

const MIN_WIDTH = 200;
const MAX_WIDTH = 400;

export default function RootLayoutClient({
  children,
  user,
}: {
  children: React.ReactNode;
  user: LayoutUser;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(280);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = width;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [width],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      const newWidth = Math.min(
        MAX_WIDTH,
        Math.max(MIN_WIDTH, startWidth.current + delta),
      );
      setWidth(newWidth);
      if (isCollapsed && newWidth > MIN_WIDTH) {
        setIsCollapsed(false);
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isCollapsed]);

  return (
    <TooltipProvider>
      <div className="flex h-screen overflow-hidden">
        <div
          className="h-full border-r border-border transition-none shrink-0 flex flex-col"
          style={{ width: isCollapsed ? 64 : width }}
        >
          <ChatSidebar
            user={user}
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          />
        </div>

        {!isCollapsed && (
          <div
            className="w-1 shrink-0 cursor-col-resize hover:bg-border active:bg-border transition-colors"
            onMouseDown={handleMouseDown}
          />
        )}

        <main className="flex-1 overflow-hidden h-full min-w-0">
          <Header />
          {children}
        </main>
      </div>
    </TooltipProvider>
  );
}

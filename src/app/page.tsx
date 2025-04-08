// app/page.tsx
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-green-50 to-amber-50 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 clip-path-polygon transform rotate-45 blur-2xl" />

      {/* 主内容容器 */}
      <div className="container relative h-screen flex flex-col items-center justify-center text-center">
        {/* 标题动画容器 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              小易
            </span>
            <span className="mx-4 text-3xl text-gray-500">❤</span>
            <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
              小宋
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-medium text-gray-600 mt-4 inline-block">
              的快乐生活
            </span>
          </h1>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              asChild
              className="h-14 px-8 rounded-2xl text-lg bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/story">
                <span className="mr-2">🌸</span>
                点击查看我们的故事
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


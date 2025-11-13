"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductBadge from "@/components/ui/product-badge";

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [100, 0]);
  const y2 = useTransform(scrollY, [0, 300], [50, 0]);
  const y3 = useTransform(scrollY, [0, 300], [0, 0]);
  const y4 = useTransform(scrollY, [0, 300], [50, 0]);
  const y5 = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <Section id="hero" className="min-h-[100vh] w-full overflow-hidden">
      <main className="mx-auto pt-8 sm:pt-12 md:pt-16 text-center relative px-4">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: easeInOutCubic }}
            className="mb-16 relative z-20 flex flex-col items-center justify-center"
            style={{ transformOrigin: "top" }}
          >
            <img src="/rena-logo.png" alt="Rena Logo" className="w-20 h-20 mb-2 mx-auto" />
            <span className="font-bold text-2xl text-orange-500">AapliShala</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: easeInOutCubic }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance mx-auto mb-4"
          >
            Smart School Management System.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: easeInOutCubic }}
            className="max-w-2xl mx-auto text-xl mb-8 font-medium text-balance"
          >
            AapliShala simplifies school management with digital attendance, timetables, and instant parent-teacher updates. Ideal for boosting efficiency, transparency, and communication in education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-2xl mx-auto mb-6"
          >
            {/* product badge */}
            <div className="mx-auto">
              <ProductBadge size="md" />
            </div>
          </motion.div>
          <div className="flex justify-center mb-16">
            <a
              href="https://play.google.com/store/apps/details?id=com.aaplishala&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              title="Download from Play Store"
            >
              <motion.img
                src="/googleplay-dark.png"
                alt="Download from Play Store"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-48 h-auto flex-shrink-0 block"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
          <motion.img
            src="/student-profile.png"
            alt="Student Profile"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/student-timetable.png"
            alt="Student Timetable"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y2 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/teacher-after-login.png"
            alt="Teacher Dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ y: y3 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/teacher-attendance-class.png"
            alt="Teacher Taking Attendance"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y4 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
          <motion.img
            src="/student-assignment.png"
            alt="Student Assignment"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: y5 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
          />
        </div>
      </main>
    </Section>
  );
}
import React, { useState } from 'react';
import {
  X,
  Mail,
  Instagram,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  User,
  Award,
  Sparkles,
  BookmarkCheck,
} from 'lucide-react';

interface AboutContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutContactModal: React.FC<AboutContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<'ig' | 'email' | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'ig' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const references = [
    {
      title: 'APEX System (Additive System of Photographic Exposure)',
      author: 'American National Standards Institute (ANSI PH2.7)',
      detail: 'มาตรฐานการคำนวณสมดุลแสงสากล: EV = Av + Tv = log₂(N²/t) - log₂(ISO/100) ซึ่งใช้เป็นสูตรแกนหลักในโปรแกรมจำลองนี้',
      category: 'คณิตศาสตร์และสูตรฟิสิกส์แสง',
    },
    {
      title: 'ISO 12232: Photography — Digital Still Cameras',
      author: 'International Organization for Standardization (ISO)',
      detail: 'มาตรฐานสากลว่าด้วยการกำหนดดัชนีการเปิดรับแสง (Exposure Index) และระดับความไวแสงของเซนเซอร์กล้องดิจิทัล',
      category: 'มาตรฐานอุตสาหกรรมกล้อง',
    },
    {
      title: 'Depth of Field & Circle of Confusion (CoC) Formulations',
      author: 'Carl Zeiss Optics & Optical Engineering Handbooks',
      detail: 'ทฤษฎีออปติกส์ว่าด้วยระนาบโฟกัส (Focal Plane) และการจำลองโบเก้ (Bokeh Disc Blur) ตามขนาดรูรับแสงและระยะชัดลึก',
      category: 'ทัศนศาสตร์เชิงฟิสิกส์',
    },
    {
      title: 'The Law of Reciprocity (กฎการชดเชยแสง)',
      author: 'Robert Bunsen & Henry Roscoe / Photographic Science',
      detail: 'หลักการความสัมพันธ์ผกผันระหว่างความเข้มของแสงและระยะเวลาที่เซนเซอร์เปิดรับแสง เพื่อให้ได้ปริมาณแสงสุทธิเท่าเดิม',
      category: 'วิทยาศาสตร์การถ่ายภาพ',
    },
    {
      title: 'Understanding Exposure: How to Shoot Great Photographs',
      author: 'Bryan Peterson (Amphoto Books)',
      detail: 'คู่มือและทฤษฎีสามเหลี่ยมการเปิดรับแสง (Exposure Triangle) เชิงปฏิบัติการที่ได้รับการยอมรับและใช้อ้างอิงทั่วโลก',
      category: 'วรรณกรรมการถ่ายภาพ',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-neutral-900 border border-neutral-700/80 rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                แหล่งอ้างอิงและช่องทางติดต่อผู้พัฒนา
              </h2>
              <p className="text-xs text-neutral-400">
                Interactive Camera Exposure Simulator · สื่อการเรียนรู้ฟิสิกส์การถ่ายภาพ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="ปิดหน้าต่าง"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-6 max-h-[75vh] overflow-y-auto pr-1">
          {/* Section 1: Developer & Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-200 font-mono">
                ข้อมูลติดต่อผู้พัฒนาแอปพลิเคชัน (Developer Contact)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Instagram Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-pink-950/30 via-neutral-950 to-neutral-950 border border-pink-500/30 hover:border-pink-500/60 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-105 transition-transform">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-300">
                      Instagram
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                    IG
                  </span>
                </div>

                <div className="font-mono text-sm font-bold text-white select-all break-all">
                  fluke_Might_Be_Late
                </div>

                <div className="mt-3 flex items-center gap-2 pt-2 border-t border-neutral-800/80">
                  <a
                    href="https://instagram.com/fluke_Might_Be_Late"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-pink-500/30"
                  >
                    <span>เปิด Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleCopy('fluke_Might_Be_Late', 'ig')}
                    className="py-1.5 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer border border-neutral-700"
                    title="คัดลอกชื่อไอจี"
                  >
                    {copiedType === 'ig' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">คัดลอกแล้ว</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>คัดลอก</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Gmail Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-rose-950/30 via-neutral-950 to-neutral-950 border border-rose-500/30 hover:border-rose-500/60 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-300">
                      Gmail / อีเมล
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                    Email
                  </span>
                </div>

                <div className="font-mono text-xs font-bold text-white select-all break-all">
                  fluke12345638@gmail.com
                </div>

                <div className="mt-3 flex items-center gap-2 pt-2 border-t border-neutral-800/80">
                  <a
                    href="mailto:fluke12345638@gmail.com"
                    className="flex-1 py-1.5 px-2.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-rose-500/30"
                  >
                    <span>ส่งอีเมล</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleCopy('fluke12345638@gmail.com', 'email')}
                    className="py-1.5 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer border border-neutral-700"
                    title="คัดลอกอีเมล"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">คัดลอกแล้ว</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>คัดลอก</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Academic & Photography References */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-200 font-mono">
                แหล่งอ้างอิงทางวิชาการและทฤษฎีการถ่ายภาพ (References)
              </h3>
            </div>

            <div className="space-y-2.5">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-black/60 border border-neutral-800/90 text-xs space-y-1 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{ref.title}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800/90 text-sky-300 border border-neutral-700/60">
                      {ref.category}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-amber-400/90">
                    {ref.author}
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-[11px]">
                    {ref.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Purpose Note */}
          <div className="p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed flex items-start gap-2.5">
            <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-neutral-300">วัตถุประสงค์เพื่อการศึกษา:</strong> โปรแกรมจำลองนี้สร้างขึ้นเพื่อถ่ายทอดหลักการทางฟิสิกส์และศิลปะการควบคุมกล้องถ่ายภาพ (Exposure Triangle) แบบ Interactive 60FPS เพื่อให้ผู้เรียนมองเห็นความสัมพันธ์ของแสง ความชัดลึก การเคลื่อนไหว และสัญญาณรบกวนได้อย่างเป็นรูปธรรม
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-neutral-800 text-white hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-700 cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

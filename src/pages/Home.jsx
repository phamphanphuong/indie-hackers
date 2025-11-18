import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, LineChart, Bot, Code2 } from 'lucide-react';
import VideoGrid from '../components/VideoGrid';

export default function Home() {
  return (
    <>
      <div className="space-y-20">
        {/* Background particles */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <section className="pt-10 pb-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 dark:border-slate-700 bg-gray-100/60 dark:bg-slate-900/60 text-xs text-gray-700 dark:text-slate-300 mb-2">
              <Sparkles className="h-3 w-3 text-brand-500" />
              <span>Dev Việt xây sản phẩm nhỏ, kiếm tiền thật</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Indie Hacker{' '}
              <span className="bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">
                Việt Nam
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Từng bước biến kỹ năng lập trình thành sản phẩm nhỏ, dòng tiền
              recurring và cuộc sống chủ động hơn.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <Link
                to="/blog"
                className="px-6 py-3 bg-brand-500 text-black rounded-lg font-semibold shadow-soft hover:opacity-90"
              >
                Bắt đầu đọc blog →
              </Link>
              <Link
                to="/vn30-bot"
                className="px-6 py-3 border border-gray-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-slate-900"
              >
                Xem VN30 Bot →
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<LineChart className="h-5 w-5" />}
            title="Tư duy sản phẩm"
            desc="Không chỉ viết code. Hiểu vấn đề, chọn niche, ship MVP, lắng nghe người dùng."
          />
          <FeatureCard
            icon={<Bot className="h-5 w-5" />}
            title="Tự động hoá & bot"
            desc="Tận dụng bot, API, automation (như VN30 bot) để nhân hóa công sức của bạn."
          />
          <FeatureCard
            icon={<Code2 className="h-5 w-5" />}
            title="Dev-first, tối giản"
            desc="Stack quen thuộc, dev-friendly, không over-engineer, tập trung giá trị cốt lõi."
          />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Bài viết nổi bật</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                slug: 'post1',
                title: 'Hành trình Indie Hacker Việt Nam',
                desc: 'Bắt đầu từ con số 0 và đi từng bước nhỏ.',
              },
              {
                slug: 'post2',
                title: 'Vì sao dev nên làm sản phẩm nhỏ?',
                desc: 'Điều bạn cần hiểu trước khi bắt đầu.',
              },
              {
                slug: 'post3',
                title: 'Roadmap 90 ngày Indie Hacker',
                desc: 'Lộ trình chi tiết 0 → 90 ngày.',
              },
            ].map((p) => (
              <Link
                key={p.slug}
                to={'/blog/' + p.slug}
                className="p-5 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-gray-50 dark:hover:bg-slate-900 transition shadow-sm"
              >
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-slate-50">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {p.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Videos mới nhất</h2>
          <VideoGrid />
          <div className="mt-4 text-right">
            <Link
              to="/videos"
              className="underline text-sm text-gray-600 dark:text-slate-300"
            >
              Xem tất cả →
            </Link>
          </div>
        </section>

        <section className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900/70 border border-gray-200 dark:border-slate-800 shadow-soft">
          <h3 className="text-2xl font-bold mb-3">Nhận newsletter mỗi tuần</h3>
          <p className="text-gray-600 dark:text-slate-300 mb-4">
            Mỗi tuần một email ngắn gọn: case study, bài học và chiến lược dành
            cho Indie Hacker Việt Nam.
          </p>
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col sm:flex-row gap-4"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="Nhập email của bạn…"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-brand-500 text-black rounded-lg font-semibold text-sm"
            >
              Đăng ký
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm">
      <div className="h-9 w-9 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center mb-3 text-brand-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-slate-400">{desc}</p>
    </div>
  );
}

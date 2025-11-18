import { Code, Bot, TrendingUp } from 'lucide-react';

export default function VN30Bot() {
  return (
    <>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">VN30 Bot</h1>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Bot tự động theo dõi và phân tích chỉ số VN30, giúp trader Việt Nam
            đưa ra quyết định nhanh chóng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="h-6 w-6 text-brand-500" />
              <h3 className="text-xl font-semibold">Tính năng chính</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300">
              <li>• Theo dõi realtime VN30 index</li>
              <li>• Phân tích xu hướng và tín hiệu</li>
              <li>• Alert qua Telegram/Discord</li>
              <li>• Backtest chiến lược trading</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-brand-500" />
              <h3 className="text-xl font-semibold">Demo API</h3>
            </div>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Sử dụng API đơn giản để lấy dữ liệu VN30:
            </p>
            <pre className="bg-slate-950 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`// Lấy dữ liệu VN30 hiện tại
fetch('https://api.vn30bot.com/current')
  .then(res => res.json())
  .then(data => console.log(data));

// Response example:
{
  "index": 1250.5,
  "change": "+1.2%",
  "volume": 1500000
}`}</code>
            </pre>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-6 w-6 text-brand-500" />
            <h3 className="text-xl font-semibold">Code Snippet (Python)</h3>
          </div>
          <pre className="bg-slate-950 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{`import requests

def get_vn30_data():
    response = requests.get('https://api.vn30bot.com/current')
    data = response.json()
    return data

# Sử dụng
vn30 = get_vn30_data()
print(f"VN30 Index: {vn30['index']}")`}</code>
          </pre>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/yourusername/vn30-bot"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-brand-500 text-black rounded-lg font-semibold hover:opacity-90"
          >
            Xem source code trên GitHub →
          </a>
        </div>
      </div>
    </>
  );
}

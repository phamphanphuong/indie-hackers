import{c as s,j as e}from"./index-B2PKs6ib.js";import{B as t}from"./bot-C4vU3nBx.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=s("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=s("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);function d(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"VN30 Bot"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto",children:"Bot tự động theo dõi và phân tích chỉ số VN30, giúp trader Việt Nam đưa ra quyết định nhanh chóng."})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(t,{className:"h-6 w-6 text-brand-500"}),e.jsx("h3",{className:"text-xl font-semibold",children:"Tính năng chính"})]}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-slate-300",children:[e.jsx("li",{children:"• Theo dõi realtime VN30 index"}),e.jsx("li",{children:"• Phân tích xu hướng và tín hiệu"}),e.jsx("li",{children:"• Alert qua Telegram/Discord"}),e.jsx("li",{children:"• Backtest chiến lược trading"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(a,{className:"h-6 w-6 text-brand-500"}),e.jsx("h3",{className:"text-xl font-semibold",children:"Demo API"})]}),e.jsx("p",{className:"text-gray-700 dark:text-slate-300 mb-4",children:"Sử dụng API đơn giản để lấy dữ liệu VN30:"}),e.jsx("pre",{className:"bg-slate-950 p-4 rounded-lg text-sm overflow-x-auto",children:e.jsx("code",{children:`// Lấy dữ liệu VN30 hiện tại
fetch('https://api.vn30bot.com/current')
  .then(res => res.json())
  .then(data => console.log(data));

// Response example:
{
  "index": 1250.5,
  "change": "+1.2%",
  "volume": 1500000
}`})})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(r,{className:"h-6 w-6 text-brand-500"}),e.jsx("h3",{className:"text-xl font-semibold",children:"Code Snippet (Python)"})]}),e.jsx("pre",{className:"bg-slate-950 p-4 rounded-lg text-sm overflow-x-auto",children:e.jsx("code",{children:`import requests

def get_vn30_data():
    response = requests.get('https://api.vn30bot.com/current')
    data = response.json()
    return data

# Sử dụng
vn30 = get_vn30_data()
print(f"VN30 Index: {vn30['index']}")`})})]}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"https://github.com/yourusername/vn30-bot",target:"_blank",rel:"noreferrer",className:"inline-block px-6 py-3 bg-brand-500 text-black rounded-lg font-semibold hover:opacity-90",children:"Xem source code trên GitHub →"})})]})})}export{d as default};

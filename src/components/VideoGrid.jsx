import { Video } from "lucide-react";

export default function VideoGrid(){
  const videos=[
    {id:"bQJOkQ2VyLc",title:"Video 1"},
    {id:"Ur87_TSyP-A",title:"Video 2"},
    {id:"-WGqCmeu2E8",title:"Video 3"}
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {videos.map((v)=>(
        <a
          key={v.id}
          href={"https://youtube.com/watch?v=" + v.id}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-soft relative">
            <img
              src={"https://img.youtube.com/vi/" + v.id + "/hqdefault.jpg"}
              className="w-full h-40 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <Video className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="mt-2 text-sm text-slate-100">{v.title}</div>
        </a>
      ))}
    </div>
  );
}
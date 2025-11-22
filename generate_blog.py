import json
import os

print("Bắt đầu chạy script generate_blog.py")

try:
    # Đọc dữ liệu video
    with open("src/data/videos.json", "r", encoding="utf-8") as f:
        videos = json.load(f)

    print(f"Đã đọc {len(videos)} video.")

    # Tạo thư mục blog nếu chưa có
    os.makedirs("public/blog", exist_ok=True)

    # Tạo bài blog cho mỗi video
    for i, video in enumerate(videos, 1):
        slug = f"video{i}"
        title = video["title"]
        video_id = video["id"]
        description = video.get("description", title)  # Nếu không có description, dùng title

        print(f"Tạo bài blog cho: {title}")

        # Tạo nội dung Markdown
        content = f"""# {title}

## Giới thiệu

{description}

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    src="https://www.youtube.com/embed/{video_id}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen
    title="{title}">
  </iframe>
</div>

## Nội dung chính

[Xem video đầy đủ trên YouTube](https://www.youtube.com/watch?v={video_id})

---

_Bài viết được tạo tự động từ video YouTube._
"""

        # Lưu file
        filename = f"public/blog/{slug}.md"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"Đã tạo bài blog: {filename}")

    print("Hoàn thành tạo blog posts từ videos.")
except Exception as e:
    print(f"Lỗi: {e}")
    import traceback
    traceback.print_exc()
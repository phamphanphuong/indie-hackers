const fs = require('fs');
const path = require('path');

// Đọc videos.json
const videosPath = path.join(__dirname, 'src', 'data', 'videos.json');
const videos = JSON.parse(fs.readFileSync(videosPath, 'utf8'));

// Tạo thư mục blog nếu chưa có
const blogDir = path.join(__dirname, 'public', 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Tạo file .md cho mỗi video
videos.forEach((video, index) => {
  const slug = `video${index + 1}`;
  const title = video.title;
  const videoId = video.id;
  const description = video.description || title;

  const content = `# ${title}

## Giới thiệu

${description}

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    src="https://www.youtube.com/embed/${videoId}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen
    title="${title}">
  </iframe>
</div>

## Nội dung chính

[Xem video đầy đủ trên YouTube](https://www.youtube.com/watch?v=${videoId})

---

_Bài viết được tạo tự động từ video YouTube._
`;

  const filePath = path.join(blogDir, `${slug}.md`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created ${filePath}`);
});

console.log('All blog posts created!');

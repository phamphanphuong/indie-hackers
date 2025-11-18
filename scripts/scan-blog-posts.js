#!/usr/bin/env node

// Script tự động scan blog posts và cập nhật Blog.jsx
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'public', 'blog');
const blogJsxPath = path.join(__dirname, '..', 'src', 'pages', 'Blog.jsx');

console.log('🔍 Scanning blog posts...');

// Đọc tất cả file .md trong thư mục blog
const files = fs
  .readdirSync(blogDir)
  .filter((file) => file.endsWith('.md'))
  .sort(); // Sắp xếp theo tên file

console.log(`📁 Found ${files.length} blog posts:`, files);

const posts = [];

// Parse từng file
files.forEach((filename) => {
  const filePath = path.join(blogDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse title từ heading đầu tiên (# Title)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : filename.replace('.md', '');

  // Parse description từ đoạn text đầu tiên sau title
  let description = '';
  const lines = content.split('\n');

  // Tìm phần giới thiệu hoặc đoạn text đầu tiên
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('##')) {
      // Tìm heading "Giới thiệu" hoặc tương tự
      if (
        line.toLowerCase().includes('giới thiệu') ||
        line.toLowerCase().includes('introduction')
      ) {
        // Lấy đoạn text sau heading này
        for (let j = i + 1; j < lines.length; j++) {
          const descLine = lines[j].trim();
          if (descLine && !descLine.startsWith('#') && descLine.length > 10) {
            description = descLine;
            break;
          }
        }
        break;
      }
    } else if (line && !line.startsWith('#') && line.length > 20) {
      // Lấy đoạn text đầu tiên dài hơn 20 ký tự
      description = line;
      break;
    }
  }

  // Fallback description
  if (!description) {
    description = `Bài viết về ${title.toLowerCase()}`;
  }

  // Tạo slug từ filename (đã có .md rồi)
  const slug = filename.replace('.md', '');

  posts.push({
    slug,
    title,
    desc: description,
  });

  console.log(`✅ Processed: ${filename} -> "${title}"`);
});

// Đọc file Blog.jsx hiện tại
let blogJsxContent = fs.readFileSync(blogJsxPath, 'utf8');

// Tạo string cho array posts
const postsString = posts
  .map(
    (post) =>
      `  {
    slug: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    desc: '${post.desc.replace(/'/g, "\\'")}',
  }`
  )
  .join(',\n');

// Cập nhật array posts trong Blog.jsx
const postsRegex = /const posts = \[[\s\S]*?\];/;
const newPostsArray = `const posts = [\n${postsString}\n];`;

blogJsxContent = blogJsxContent.replace(postsRegex, newPostsArray);

// Ghi file
fs.writeFileSync(blogJsxPath, blogJsxContent);

console.log('🎉 Blog.jsx updated successfully!');
console.log(`📊 Total posts: ${posts.length}`);

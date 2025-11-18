# Hướng Dẫn Thêm Blog Post Mới

## Cách Thêm Post Mới (Tự Động) ⭐

**Chỉ cần tạo file .md trong thư mục `public/blog/` và build!**

### Bước 1: Tạo File Markdown

Tạo file mới trong `public/blog/` với tên bất kỳ (không cần theo quy tắc slug):

```
public/blog/ten-bai-viet.md
```

### Bước 2: Viết Nội Dung

```markdown
# Tiêu Đề Bài Viết

## Giới thiệu

Mô tả ngắn gọn về bài viết...

## Nội dung chính

Nội dung chi tiết...
```

### Bước 3: Build Project

```bash
npm run build
```

**Script tự động sẽ:**

- ✅ Scan tất cả file .md trong `public/blog/`
- ✅ Parse tiêu đề từ heading đầu tiên (# Title)
- ✅ Parse mô tả từ phần giới thiệu
- ✅ Tạo slug từ tên file
- ✅ Cập nhật Blog.jsx tự động

### Bước 4: Test

Truy cập `/blog` để xem post mới xuất hiện!

## Cấu Trúc File Markdown

```markdown
# Tiêu Đề Bài Viết

## Giới thiệu

Nội dung giới thiệu...

## Phần 1

Nội dung chi tiết...

## Phần 2

Thêm nội dung...

## Kết Luận

Tóm tắt...

---

_Đăng ký newsletter để nhận bài viết mới: [Link đăng ký]_
```

## Thêm Video Embed

```html
<div
  style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;"
>
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen
    title="Tiêu đề video"
  >
  </iframe>
</div>
```

## Lưu Ý

- File Markdown phải có đuôi `.md`
- Tiêu đề được lấy từ heading đầu tiên (# Title)
- Mô tả được lấy từ phần giới thiệu hoặc đoạn text đầu tiên
- Build lại project sau khi thêm/xóa/sửa file
- Test trên localhost trước khi deploy

## Ví Dụ Posts Hiện Tại

- `post1.md` - Hành trình Indie Hacker Việt Nam
- `post2.md` - Xây Dựng MVP Đầu Tiên
- `post3.md` - Marketing & Growth
- `ai-va-indie-hacker.md` - Indie Hacker Và AI
- `cch-monetize-sn-phm-indie.md` - Cách Monetize Sản Phẩm Indie
- `seo-cho-indie-hacker.md` - SEO Cho Indie Hacker
- `xy-dng-community-online.md` - Xây Dựng Community Online
- `phuong-dep-trai.md` - Phương Đẹp Trai Nhất Vũ Trụ
- `cch-lm-giu-t-indie-hacking.md` - Cách Làm Giàu Từ Indie Hacking

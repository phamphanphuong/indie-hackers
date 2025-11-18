import googleapiclient.discovery

def get_playlist_videos(api_key, playlist_id):
    """
    Lấy ID và Tiêu đề của tất cả video trong một playlist.

    Args:
        api_key (str): Khóa API YouTube Data API v3 của bạn.
        playlist_id (str): ID của playlist.
    """
    # Khởi tạo dịch vụ YouTube
    youtube = googleapiclient.discovery.build(
        "youtube", "v3", developerKey=api_key
    )

    all_videos = []
    next_page_token = None

    print(f"Bắt đầu lấy dữ liệu cho Playlist ID: {playlist_id}")

    # Lặp qua các trang (do API giới hạn số lượng mục trên mỗi phản hồi)
    while True:
        request = youtube.playlistItems().list(
            part="snippet",
            playlistId=playlist_id,
            maxResults=50,  # Số lượng video tối đa mỗi lần gọi (max là 50)
            pageToken=next_page_token
        )
        response = request.execute()

        # Trích xuất ID và Tiêu đề từ mỗi mục
        for item in response.get("items", []):
            try:
                video_id = item["snippet"]["resourceId"]["videoId"]
                title = item["snippet"]["title"]
                all_videos.append({"id": video_id, "title": title})
            except KeyError:
                # Bỏ qua các mục không phải là video (ví dụ: các mục đã bị xóa)
                continue

        # Kiểm tra nếu còn trang tiếp theo
        next_page_token = response.get("nextPageToken")
        if not next_page_token:
            break

    return all_videos

# --- Thông tin cần thiết ---
YOUR_API_KEY = "AIzaSyCloqbLu82XRoE33OJ-UWm2Es7Zn09MZG8"  # <-- THAY THẾ KHÓA API CỦA BẠN VÀO ĐÂY
PLAYLIST_ID = "PLJK9YNrTz_MIa6nuGky5147hI7fwlOBWA" # ID từ URL: https://youtube.com/playlist?list=PLJK9YNrTz_MIa6nuGky5147hI7fwlOBWA

# Thực thi hàm
video_list = get_playlist_videos(YOUR_API_KEY, PLAYLIST_ID)

# In kết quả

import json
if video_list:
    print("\n--- KẾT QUẢ ---")
    print(f"Tìm thấy {len(video_list)} video trong playlist.")
    for i, video in enumerate(video_list, 1):
        print(f"{i}. ID: {video['id']} | Tiêu đề: {video['title']}")
    # Lưu ra file JSON
    with open("src/data/videos.json", "w", encoding="utf-8") as f:
        json.dump(video_list, f, ensure_ascii=False, indent=2)
    print("Đã lưu danh sách video vào src/data/videos.json")
else:
    print("\nKhông tìm thấy video nào hoặc có lỗi xảy ra. Vui lòng kiểm tra lại Khóa API và ID Playlist.")
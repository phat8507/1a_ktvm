# Trang thuyết trình `1a_ktvm`

Đây là website tĩnh dùng để trình bày học thuật cho chủ đề **“Khủng hoảng Kinh tế, Phe 1A: Market Failure & Lòng tham của thị trường”**. Dự án được dựng bằng `HTML + CSS + JavaScript thuần`, tối ưu để mở trực tiếp bằng trình duyệt hoặc deploy bằng GitHub Pages.

## Chạy local

Bạn có thể dùng một trong hai cách:

1. Mở trực tiếp `index.html` bằng trình duyệt.
2. Mở thư mục dự án bằng VS Code rồi chạy `Live Server` nếu muốn tự reload khi chỉnh sửa.

## Chỉnh nội dung

Phần lớn nội dung hiển thị nằm trong `data.js`, gồm:

- metadata chung của site
- tiêu đề, mô tả và text của từng phần
- glossary thuật ngữ
- dữ liệu biểu đồ
- caption, note và panel nguồn
- danh sách thành viên nhóm
- đường dẫn ảnh hoặc placeholder

Nếu muốn sửa lời thoại, số liệu, caption biểu đồ, tên thành viên, vai trò trình bày hoặc text trong panel nguồn, hãy sửa trực tiếp trong `data.js`.

## Chỉnh nguồn

Mỗi phần có mảng `sources` trong `data.js`. Mỗi mục nguồn gồm:

- tên file nguồn
- dữ liệu hoặc luận điểm lấy từ nguồn đó
- ghi chú logic chuẩn hóa nếu có

Tên file nguồn có thể giữ nguyên đúng theo tài liệu gốc.

## Ảnh và placeholder

Ảnh nên đặt trong thư mục:

- `assets/images/`

Các tên file mẫu đã được map sẵn:

- `assets/images/cover-hero.jpg`
- `assets/images/hook-worker.jpg`
- `assets/images/framework-diagram.jpg`
- `assets/images/hanoi-apartment.jpg`
- `assets/images/bond-project-gap.jpg`
- `assets/images/real-estate-bonds.jpg`
- `assets/images/export-factory.jpg`
- `assets/images/red-sea-logistics.jpg`
- `assets/images/svb-bank.jpg`
- `assets/images/lehman-2008.jpg`
- `assets/images/team-member.jpg`
- `assets/images/final-synthesis.jpg`

Nếu ảnh thật chưa có:

- layout vẫn giữ nguyên
- site sẽ hiện placeholder đồng bộ giao diện
- người dùng chỉ cần thay file ảnh vào đúng đường dẫn hoặc sửa `path` trong `data.js`

Các phần hiện đang sẵn sàng thay ảnh:

- Trang mở đầu
- Mở đầu
- Framework 4 tầng
- Cơ chế 1, 2, 3
- Bất động sản Việt Nam 2021-2025
- Cú sốc xuất khẩu và lao động 2023
- Biển Đỏ quý I/2024
- SVB 2023
- Khủng hoảng 2008
- Thành viên nhóm
- Kết luận

## Deploy GitHub Pages

1. Đẩy toàn bộ file lên nhánh `main`.
2. Vào `Settings` của repo trên GitHub.
3. Chọn `Pages`.
4. Ở mục `Build and deployment`, chọn:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Lưu lại và chờ GitHub Pages build site.

## Lưu ý kỹ thuật

- Tất cả text hiển thị được viết bằng tiếng Việt có dấu, trừ các thuật ngữ học thuật cần giữ tiếng Anh.
- File dùng chuẩn UTF-8 để hiển thị đúng trên GitHub Pages.
- Dự án không cần backend và không cần cài thêm framework.

#HTML DOM
1. HTML DOM là gì ?
- HTML DOM(Document object Model) : Khi trang web được tải,trình duyệt
  tạo ra 1 DOM.Thật ra khi trình duyệt đọc trang web,nó nhận đc chuỗi html
  --> dựa theo qui chuẩn W3C dịch chuỗi html ra thành mô hình(DOM) hay là
  Mô hình dạng cây
+ Có 3 thành phần ;
    - element
    - attribute
    - text
+ Javascript chỉ cung cấp công cụ để truy xuất vào HTML DOM.Dom không
  phải của Javascript
+ Javascript chạy trên : Browser | Server
+ Document : chính là đại diện cả website ( khi trình duyệt đọc html thì tạo ra DOM sau đó lưu hết vào
  biến Document.Đã đc tích hợp sẵn trong web API )
2. DOM API
- Browser : HTML -> DOM -> DOM API\
  ( Browser cần access vào cái Dom được tạo nên từ HTML,vì vậy ông browser cần 1 cái gọi là DOM API.
  DOM API ở đây là WEB API(chỉ chạy trên trình duyệt,ví dụ lấy vị trí(location) là 1 API or nhận thông báo
  gì hay không --> là 1 API)
- Định nghĩa DOM API : Là bộ API nằm trong WEB API có mặt trên những môi trường hỗ trợ duyệt Web - như
  trên trình duyệt.DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất,chỉnh sửa các đối tượng/
  thành phần trong DOM
3. Phương thức get element
- getElementById ->Trả về trực tiếp Element vì chỉ có 1 đối tượng
- getElementsByClassName
- getElementsByTagName
- querySelector -> Trả về trực tiếp Element vì chỉ có 1 đối tượng
- querySelectorAll
- HTML collection
- document.write
4. Attribute node & Text node
- Attribute node & Text node được lấy ra từ Element
- Dom attributes : + Lấy ra 1 element
  + thêm attribute [title,class ( dùng từ khoá là className)...] vào element --> dùng seter
  hoặc setAttribute\
  seter: attribute phải đúng theo từng element\
  setAttribute : có thể thêm attribute bất kì
  Muốn get value của atribute thì dùng : .getAttribute
- Text node : + Lấy ra 1 element
  . innerText : nội dung lấy được giống với những gì nhìn thấy trên trình duyệt ( thuộc tính năm trong element node)\
  . textcontent : nội dung thật của nó ( thuộc tính tồn tại trong element note và cả textnode)
-

5. InnerHTML và OuterHTML
   Thay đổi nội dung html của node element
6. DOM CSS

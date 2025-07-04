# Food Casier App 🍔

Aplikasi pemesanan makanan berbasis web yang memungkinkan kasir untuk memesan makanan, dan akan diproses di kitchen ,dan datanya akan tersimpan otomatis di sistem admin. Dibangun menggunakan **React.js** untuk frontend dan **Node.js + Express.js** untuk backend, serta menggunakan **MySQL** sebagai database.

---

## ✨ Fitur

### Kasir:
- Melihat daftar menu makanan
- Memesan makanan dengan mengisi data seperti jenis dan jumlah
- User-friendly interface dengan tampilan minimalis

### Admin:
- Melihat daftar pesanan dari pelanggan
- Semua data tersimpan di database MySQL
- Bisa dikelola dari backend atau admin panel
- Melihat top makanan paling sering dibeli
- Bisa menghitung pendapatan
- History Pembelian
 
### Kitcen:
- Melihat daftar menu yang dipesan
- Mengubah status Menu

---

## 🛠️ Teknologi

- **Frontend**: React.js, Tailwindcss
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Penyimpanan data**: disimpan ke MySQL melalui API

---
## 🚀 Cara Menjalankan Aplikasi

### 1. Clone Repo

```bash
git clone https://github.com/micelvalensia/WebisteEc
cd WebsiteEc

Jalankan backend:
cd node
npm install
npm start

jalankan frontend:
cd react
npm install
npm run dev

```
dan masukkan file db ke database kalian
note : untuk login admin ada di url localhost:port/admin/login 
untuk kitchen ada di /kitchen/login dan untuk login admin itu 
email: miceldoang@gmail.com
password: miceldoang122
dan untuk login kitchen
email: juliankitchen@gmail.com
password: 12345678

---

## 📸 Preview Tampilan

### Halaman Home
![Home](https://raw.githubusercontent.com/micelvalensia/WebsiteEc/main/react/src/assets/home.png)

### Halaman Pemesanan
![menu](https://raw.githubusercontent.com/micelvalensia/WebsiteEc/main/react/src/assets/menu.png)

### Halaman Cart
![cart](https://raw.githubusercontent.com/micelvalensia/WebsiteEc/main/react/src/assets/cart.png)

### Halaman Kitchen
![cart](https://raw.githubusercontent.com/micelvalensia/WebsiteEc/main/react/src/assets/kitchen.png)

### Halaman Dashboard Admin
![dashboard](https://raw.githubusercontent.com/micelvalensia/WebsiteEc/main/react/src/assets/dashboard.png)

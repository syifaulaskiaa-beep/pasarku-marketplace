/* =========================================================
   PASARKU — script.js
   Data produk UMKM, rendering, dan seluruh logika interaktif.
========================================================= */

/* ---------------- IKON (SVG inline) ---------------- */
const SVG = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="8" width="16" height="12" rx="1"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13,5 20,12 13,19"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="7" width="13" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,
  badgeCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><polyline points="8,12 11,15 16,9"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></svg>`,
  heartHand: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 20s-7-4.2-9-8.3A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 9 5.7C19 15.8 12 20 12 20z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="6"/><line x1="15" y1="15" x2="20" y2="20"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,12 9,17 20,6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="5,8 12,15 19,8"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 4 12.5 4 5a2 2 0 0 1 2-2z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,6 12,13 21,6"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="7" x2="12" y2="12"/><line x1="12" y1="12" x2="16" y2="14"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 20l1.5-3.6A7.9 7.9 0 0 1 4 12z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>`,
};
function heartSVG(filled) {
  return `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2 4.5-9.5 9-9.5 9z" fill="${filled ? "currentColor" : "none"}"/></svg>`;
}

/* ---------------- SLUG KATEGORI ---------------- */
const CATEGORY_SLUG = {
  "Makanan & Minuman": "makanan",
  "Kerajinan Tangan": "kerajinan",
  "Fashion & Aksesoris": "fashion",
  "Kecantikan & Perawatan": "kecantikan",
  "Rumah Tangga": "rumahtangga",
};
const CATEGORY_LETTER = {
  "Makanan & Minuman": "M",
  "Kerajinan Tangan": "K",
  "Fashion & Aksesoris": "F",
  "Kecantikan & Perawatan": "P",
  "Rumah Tangga": "R",
};
const VARIANTS_BY_CATEGORY = {
  "Makanan & Minuman": ["Kemasan Reguler", "Kemasan Besar"],
  "Kerajinan Tangan": ["Standar"],
  "Fashion & Aksesoris": ["S", "M", "L"],
  "Kecantikan & Perawatan": ["Original"],
  "Rumah Tangga": ["Standar"],
};

/* ---------------- DATA PRODUK ---------------- */
const stockFor = (id) => [14, 8, 4, 22, 3, 17, 6, 30, 9, 2][id % 10];
const soldFor = (id) => 35 + ((id * 19) % 300);
const reviewCountFor = (id) => 20 + ((id * 11) % 180);

const REVIEW_POOL = [
  { name: "Fajar Nugroho", text: "Rasanya otentik dan pengemasannya rapi, aman sampai tujuan." },
  { name: "Ika Marlina", text: "Kualitas kerajinannya halus banget, terlihat dikerjakan dengan teliti." },
  { name: "Yusuf Ramadhan", text: "Pengiriman cepat, produk sesuai deskripsi, seller responsif." },
  { name: "Citra Ayu", text: "Bangga bisa dukung UMKM lokal lewat produk sebagus ini." },
  { name: "Doni Saputra", text: "Sudah repeat order karena rasa/kualitasnya konsisten." },
  { name: "Wulan Sari", text: "Detail buatannya rapi banget, worth the price." },
];
const reviewsFor = (id) => [
  { ...REVIEW_POOL[id % 6], rating: 5, date: "1 minggu lalu" },
  { ...REVIEW_POOL[(id + 3) % 6], rating: 4, date: "3 minggu lalu" },
];

const RAW_PRODUCTS = [
  { id: 1, name: "Keripik Singkong Balado", category: "Makanan & Minuman", price: 18000, rating: 4.7, seller: "Snack Bu Sari", city: "Yogyakarta", isBestSeller: true, image: "images/keripik singkong balado.jpg", desc: "Keripik singkong tipis renyah dengan bumbu balado pedas manis khas rumahan, digoreng segar setiap hari oleh UMKM Snack Bu Sari." },
  { id: 2, name: "Kopi Robusta Gayo 250g", category: "Makanan & Minuman", price: 45000, rating: 4.8, seller: "Kopi Tani Gayo", city: "Aceh", isBestSeller: true, image: "images/kopi robusta.jpg", desc: "Biji kopi robusta pilihan dari dataran tinggi Gayo, disangrai medium untuk rasa yang seimbang dan aroma kuat." },
  { id: 3, name: "Sambal Roa Botolan", category: "Makanan & Minuman", price: 32000, rating: 4.6, seller: "Dapur Manado", city: "Manado", image: "images/sambal roa.jpg", desc: "Sambal ikan roa asap khas Manado, pedas gurih, cocok untuk teman nasi hangat atau campuran mi instan." },
  { id: 4, name: "Keripik Tempe Renyah", category: "Makanan & Minuman", price: 15000, rating: 4.5, seller: "UD Tempe Jaya", city: "Malang", image: "images/keripik tempe.jpg", desc: "Keripik tempe tipis dengan bumbu original, digoreng kering tanpa pengawet." },
  { id: 5, name: "Dodol Garut Original", category: "Makanan & Minuman", price: 22000, rating: 4.4, seller: "Dodol Asli Garut", city: "Garut", isNew: true, image: "images/dodol garut.jpg", desc: "Dodol legit dengan resep turun-temurun, dibungkus daun kertas tradisional." },
  { id: 6, name: "Teh Rosella Kering", category: "Makanan & Minuman", price: 20000, rating: 4.6, seller: "Kebun Rosella Wonosobo", city: "Wonosobo", isNew: true, image: "images/TEH ROSELLA.jpg", desc: "Kelopak rosella kering pilihan, diseduh sebagai teh herbal segar dan asam alami." },
  { id: 7, name: "Tas Anyaman Rotan", category: "Kerajinan Tangan", price: 185000, rating: 4.8, seller: "Rotan Kreasi", city: "Cirebon", isBestSeller: true, image: "images/tas anyaman rotan.jpg", desc: "Tas rotan anyaman tangan dengan finishing rapi, kuat untuk pemakaian harian maupun ke pantai." },
  { id: 8, name: "Vas Bunga Keramik", category: "Kerajinan Tangan", price: 95000, rating: 4.7, seller: "Kriya Kasongan", city: "Yogyakarta", image: "images/vas bunga keramik.jpg", desc: "Vas keramik buatan tangan dari sentra kerajinan Kasongan, dilapisi glasir tahan air." },
  { id: 9, name: "Miniatur Wayang Kayu", category: "Kerajinan Tangan", price: 120000, rating: 4.6, seller: "Sanggar Ukir Jepara", city: "Jepara", image: "images/miniatur wayang kayu.jpg", desc: "Miniatur wayang ukir kayu jati dengan detail cat tangan, cocok untuk pajangan atau koleksi." },
  { id: 10, name: "Keranjang Bambu Multifungsi", category: "Kerajinan Tangan", price: 58000, rating: 4.5, seller: "Bambu Lestari", city: "Tasikmalaya", isNew: true, image: "images/keranjang bambu.jpg", desc: "Keranjang bambu anyaman rapat, cocok untuk penyimpanan buah atau perlengkapan dapur." },
  { id: 11, name: "Batik Tulis Mega Mendung", category: "Fashion & Aksesoris", price: 275000, rating: 4.9, seller: "Batik Trusmi", city: "Cirebon", isBestSeller: true, image: "images/batik tulis mega mendung.jpg", desc: "Kain batik tulis motif mega mendung asli, diproses dengan pewarna ramah kulit." },
  { id: 12, name: "Tenun Ikat Sumba Selendang", category: "Fashion & Aksesoris", price: 320000, originalPrice: 380000, rating: 4.9, seller: "Tenun Sumba Asli", city: "Sumba", image: "images/tenun ikat sumba selendang.jpg", desc: "Selendang tenun ikat khas Sumba, ditenun manual dengan pewarna alami selama berminggu-minggu." },
  { id: 13, name: "Sandal Kulit Handmade", category: "Fashion & Aksesoris", price: 145000, rating: 4.6, seller: "Kulit Garut Craft", city: "Garut", image: "images/sandal kulit handmade.jpg", desc: "Sandal kulit asli dijahit tangan, nyaman dan awet untuk pemakaian sehari-hari." },
  { id: 14, name: "Gelang Manik Kalimantan", category: "Fashion & Aksesoris", price: 55000, rating: 4.5, seller: "Manik Dayak", city: "Kalimantan", isNew: true, image: "images/gelang manik kalimantan.jpg", desc: "Gelang manik khas Dayak dengan motif tradisional, dirangkai manual oleh pengrajin lokal." },
  { id: 15, name: "Sabun Herbal Sereh", category: "Kecantikan & Perawatan", price: 25000, rating: 4.7, seller: "Herbal Nusantara", city: "Bandung", isBestSeller: true, image: "images/sabun herbal sereh.jpg", desc: "Sabun batang dengan ekstrak sereh alami, membantu menyegarkan dan membersihkan kulit." },
  { id: 16, name: "Minyak Kemiri Rambut", category: "Kecantikan & Perawatan", price: 38000, rating: 4.6, seller: "Kemiri Alam", city: "Sulawesi", image: "images/minyak kemiri rambut.jpg", desc: "Minyak kemiri murni tanpa campuran, diolah tradisional untuk perawatan rambut." },
  { id: 17, name: "Lulur Tradisional Rempah", category: "Kecantikan & Perawatan", price: 42000, rating: 4.8, seller: "Lulur Jamu Solo", city: "Solo", isNew: true, image: "images/lulur tradisional rempah.jpg", desc: "Lulur rempah dengan resep jamu tradisional Solo, membantu mengangkat sel kulit mati." },
  { id: 18, name: "Sapu Lidi Dekoratif", category: "Rumah Tangga", price: 28000, rating: 4.4, seller: "Kriya Lidi", city: "Sukabumi", image: "images/sapu lidi dekoratif.jpg", desc: "Sapu lidi dengan gagang dianyam rapi, kuat untuk kebutuhan bersih-bersih halaman." },
  { id: 19, name: "Tikar Pandan Anyam", category: "Rumah Tangga", price: 75000, rating: 4.6, seller: "Pandan Handmade", city: "Lombok", image: "images/tikar pandan anyaman.jpg", desc: "Tikar anyaman daun pandan yang sejuk dan tahan lama, cocok untuk lesehan maupun piknik." },
  { id: 20, name: "Piring Lidi Sawit", category: "Rumah Tangga", price: 33000, rating: 4.5, seller: "Sawit Kreatif", city: "Riau", image: "images/piring lidi sawit.jpg", desc: "Piring dari pelepah sawit yang ramah lingkungan, cocok sebagai wadah hidangan tradisional." },

  /* ---- Makanan & Minuman tambahan (14) ---- */,
  { id: 21, name: "Kopi Arabika Kintamani 200g", category: "Makanan & Minuman", price: 52000, rating: 4.8, seller: "Kopi Kintamani Asli", city: "Bali", image: "images/Kopi Arabika Kintamani.jpg", desc: "Kopi arabika dari dataran tinggi Kintamani dengan aroma citrus khas kopi Bali, disangrai medium." },
  { id: 22, name: "Teh Melati Kering", category: "Makanan & Minuman", price: 18000, rating: 4.5, seller: "Teh Melati Jepara", city: "Jepara", image: "images/teh melati kering.jpg", desc: "Teh hijau dengan campuran bunga melati asli, diseduh untuk aroma khas yang menenangkan." },
  { id: 35, name: "Anyaman Tikar Mendong", category: "Kerajinan Tangan", price: 68000, rating: 4.5, seller: "Mendong Tasik Kreatif", city: "Tasikmalaya", image: "images/anyaman tikar mendong.jpg", desc: "Tikar anyaman mendong halus, cocok untuk alas duduk maupun dekorasi rumah etnik." },
  { id: 36, name: "Ukiran Topeng Kayu Bali", category: "Kerajinan Tangan", price: 175000, rating: 4.8, seller: "Sanggar Ukir Ubud", city: "Bali", isBestSeller: true, image: "images/ukiran topeng kayu bali.jpg", desc: "Topeng kayu ukiran tangan khas Bali, dicat detail untuk pajangan maupun koleksi seni." },
  { id: 37, name: "Gerabah Kendi Klasik", category: "Kerajinan Tangan", price: 62000, rating: 4.6, seller: "Kriya Kasongan", city: "Yogyakarta", image: "images/gerabah kendi klasik.jpg", desc: "Kendi gerabah tanah liat dengan bentuk klasik, cocok sebagai wadah air maupun hiasan." },
  { id: 38, name: "Anyaman Rotan Tudung Saji", category: "Kerajinan Tangan", price: 89000, rating: 4.6, seller: "Rotan Kreasi", city: "Cirebon", isNew: true, image: "images/anyaman rotan tudung saji.jpg", desc: "Tudung saji rotan anyaman rapi, ringan dan tahan lama untuk kebutuhan dapur sehari-hari." },
  { id: 51, name: "Batik Cap Parang Klasik", category: "Fashion & Aksesoris", price: 165000, rating: 4.7, seller: "Batik Trusmi", city: "Cirebon", image: "images/batik cap parang klasik.jpg", desc: "Kain batik cap motif parang klasik, cocok untuk kemeja maupun busana formal." },
  { id: 52, name: "Kemeja Tenun Lombok", category: "Fashion & Aksesoris", price: 195000, rating: 4.6, seller: "Tenun Sasak Lombok", city: "Lombok", isNew: true, image: "images/kemeja tenun lombok.jpg", desc: "Kemeja pria berbahan tenun khas Sasak, adem dipakai dan motif etnik yang khas." },
  { id: 53, name: "Selendang Songket Palembang", category: "Fashion & Aksesoris", price: 385000, rating: 4.9, seller: "Songket Palembang Asli", city: "Palembang", isBestSeller: true, image: "images/Songket Palembang.jpg", desc: "Selendang songket benang emas ditenun manual, cocok untuk acara adat dan resepsi." },
  { id: 54, name: "Tas Rajut Serat Alam", category: "Fashion & Aksesoris", price: 98000, rating: 4.5, seller: "Rajut Kreasi Bandung", city: "Bandung", image: "images/tas rajut serat alam.jpg", desc: "Tas rajut dari serat alam dengan motif warna-warni, ringan untuk dipakai harian." },
  { id: 67, name: "Masker Wajah Bengkoang", category: "Kecantikan & Perawatan", price: 28000, rating: 4.6, seller: "Herbal Nusantara", city: "Bandung", image: "images/masker wajah perempuan.jpg", desc: "Masker bubuk bengkoang alami untuk mencerahkan kulit wajah secara bertahap." },
  { id: 68, name: "Minyak Zaitun Perawatan Kulit", category: "Kecantikan & Perawatan", price: 45000, rating: 4.7, seller: "Herbal Nusantara", city: "Bandung", image: "images/minyak zaitun.jpg", desc: "Minyak zaitun murni untuk melembapkan kulit kering, aman untuk wajah dan tubuh." },
  { id: 69, name: "Sabun Beras Pemutih Alami", category: "Kecantikan & Perawatan", price: 22000, rating: 4.5, seller: "Sabun Alami Solo", city: "Solo", isNew: true, image: "images/sabun beras.jpg", desc: "Sabun batang dengan ekstrak beras, membantu mencerahkan dan melembutkan kulit." },
  { id: 70, name: "Jamu Kunyit Asam Instan", category: "Kecantikan & Perawatan", price: 24000, rating: 4.6, seller: "Lulur Jamu Solo", city: "Solo", image: "images/jamu kunyit.jpg", desc: "Serbuk jamu kunyit asam untuk kesehatan dan kecantikan kulit dari dalam, praktis diseduh." },
  { id: 71, name: "Minyak Kelapa Murni (VCO)", category: "Kecantikan & Perawatan", price: 35000, rating: 4.8, seller: "Kemiri Alam", city: "Sulawesi", isBestSeller: true, image: "images/minyak kelapa.jpg", desc: "VCO diproses cold-pressed tanpa pemanasan, multifungsi untuk kulit dan rambut." },
  { id: 84, name: "Keranjang Laundry Rotan", category: "Rumah Tangga", price: 95000, rating: 4.6, seller: "Rotan Kreasi", city: "Cirebon", image: "images/keranjang laundry.jpg", desc: "Keranjang pakaian kotor dari anyaman rotan, kuat dan tahan lama untuk kebutuhan rumah." },
  { id: 85, name: "Talenan Kayu Jati Solid", category: "Rumah Tangga", price: 48000, rating: 4.7, seller: "Sanggar Ukir Jepara", city: "Jepara", isBestSeller: true, image: "images/Talenan Kayu Jati.jpg", desc: "Talenan dari kayu jati solid, tebal dan tahan lama untuk kebutuhan dapur sehari-hari." },
  { id: 86, name: "Tudung Saji Anyaman Bambu", category: "Rumah Tangga", price: 42000, rating: 4.5, seller: "Bambu Lestari", city: "Tasikmalaya", image: "images/tudung saji anyaman bambu.jpg", desc: "Tudung saji dari anyaman bambu halus, menjaga makanan tetap higienis dan tampil estetik." },
  { id: 87, name: "Sarung Bantal Tenun Motif", category: "Rumah Tangga", price: 55000, rating: 4.5, seller: "Tenun Sasak Lombok", city: "Lombok", image: "images/sarung bantal tenun.jpg", desc: "Sarung bantal kain tenun dengan motif etnik, menambah sentuhan hangat pada ruang tamu." },
  { id: 88, name: "Rak Dinding Bambu Serbaguna", category: "Rumah Tangga", price: 88000, rating: 4.6, seller: "Bambu Lestari", city: "Tasikmalaya", isNew: true, image: "images/rak dinding.jpg", desc: "Rak dinding dari bilah bambu, cocok untuk menyimpan buku maupun pajangan kecil." },

];

const PRODUCTS = RAW_PRODUCTS.map((p) => ({
  ...p,
  sizes: VARIANTS_BY_CATEGORY[p.category],
  stock: stockFor(p.id),
  sold: soldFor(p.id),
  reviews: reviewCountFor(p.id),
  reviewsList: reviewsFor(p.id),
  tag: p.isNew ? "Baru" : p.isBestSeller ? "Terlaris" : p.originalPrice ? "Diskon" : null,
}));

const CATEGORIES = ["Semua", "Makanan & Minuman", "Kerajinan Tangan", "Fashion & Aksesoris", "Kecantikan & Perawatan", "Rumah Tangga"];
const CATEGORY_ICON = {
  "Semua": "\u{1F6CD}\uFE0F",
  "Makanan & Minuman": "\u{1F35C}",
  "Kerajinan Tangan": "\u{1F9FA}",
  "Fashion & Aksesoris": "\u{1F457}",
  "Kecantikan & Perawatan": "\u{1F484}",
  "Rumah Tangga": "\u{1F3E0}"
};
const PRICE_RANGES = [
  { key: "semua", label: "Semua Harga", test: () => true },
  { key: "lt30", label: "Di bawah Rp30rb", test: (p) => p.price < 30000 },
  { key: "30-100", label: "Rp30rb – Rp100rb", test: (p) => p.price >= 30000 && p.price <= 100000 },
  { key: "100-250", label: "Rp100rb – Rp250rb", test: (p) => p.price > 100000 && p.price <= 250000 },
  { key: "gt250", label: "Di atas Rp250rb", test: (p) => p.price > 250000 },
];
const FAQS = [
  { q: "Bagaimana Pasarku memastikan produk UMKM asli?", a: "Setiap mitra UMKM diverifikasi legalitas usahanya dan produknya dikurasi tim kami sebelum tampil di Pasarku." },
  { q: "Berapa lama pengiriman produk UMKM?", a: "Sebagian produk diproses 1–2 hari sebelum dikirim karena dibuat langsung oleh UMKM, ditambah waktu kirim ekspedisi 2–5 hari tergantung lokasi." },
  { q: "Bagaimana cara menjadi mitra UMKM di Pasarku?", a: "Isi formulir pendaftaran mitra di bagian bawah halaman ini, tim kami akan menghubungi dalam 3 hari kerja untuk proses verifikasi." },
  { q: "Apakah bisa retur jika produk tidak sesuai?", a: "Produk kerajinan dan fashion yang cacat produksi bisa diretur dalam 3 hari. Produk makanan tidak dapat diretur karena alasan higienitas." },
  { q: "Metode pembayaran apa saja yang didukung?", a: "Kami mendukung transfer bank, e-wallet, dan pembayaran di tempat (COD) untuk kota-kota tertentu." },
];

/* ---------------- NOMOR WHATSAPP TOKO ---------------- */
const STORE_WHATSAPP = "6281122334455"; // ganti dengan nomor WhatsApp toko asli (format 62xxxxxxxxxx)

/* ---------------- PENYIMPANAN LOKAL (localStorage) ---------------- */
const STORAGE_KEYS = { cart: "pasarku_cart", wishlist: "pasarku_wishlist" };
function loadStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn("Gagal membaca localStorage:", err);
    return fallback;
  }
}
function saveStored(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("Gagal menyimpan ke localStorage:", err);
  }
}
function persistCart() { saveStored(STORAGE_KEYS.cart, state.cart); }
function persistWishlist() { saveStored(STORAGE_KEYS.wishlist, state.wishlist); }

/* ---------------- STATE ---------------- */
const state = {
  search: "",
  category: "Semua",
  priceRange: "semua",
  sortBy: "rekomendasi",
  visibleCount: 8,
  wishlist: loadStored(STORAGE_KEYS.wishlist, []),
  cart: loadStored(STORAGE_KEYS.cart, []), // {id, size, qty}
  recentlyViewed: [],
  selectedProduct: null,
  selectedSize: null,
  modalQty: 1,
  modalTab: "deskripsi",
  promo: null,
  promoError: "",
  promoInputValue: "",
  shippingMethod: "reguler",
  paymentMethod: "Transfer Bank",
};

/* ---------------- UTIL ---------------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const byId = (id) => PRODUCTS.find((p) => p.id === id);
function formatIDR(n) { return "Rp" + Math.round(n).toLocaleString("id-ID"); }
function slug(cat) { return CATEGORY_SLUG[cat] || "makanan"; }
function starsHTML(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
let toastSeq = 0;
function showToast(text) {
  const id = ++toastSeq;
  const el = document.createElement("div");
  el.className = "toast";
  el.id = "toast-" + id;
  el.innerHTML = `<span class="icon" style="width:14px;height:14px;color:var(--mustard-light)">${SVG.sparkle}</span> ${text}`;
  $("#toastContainer").appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

/* ---------------- SWATCH (placeholder gambar produk) ---------------- */
function swatchHTML({ category, tag, large, stock, showWishlist, id, wished, image }) {
  const letter = CATEGORY_LETTER[category] || category[0];
  const imageTag = image ? `<img src="${image}" alt="${category}" class="swatch-photo" loading="lazy" onerror="this.remove()">` : "";
  return `
    <div class="swatch swatch--${slug(category)} ${large ? "swatch--large" : ""}">
      ${imageTag}
      ${image ? "" : `<span class="swatch-letter">${letter}</span>`}
      ${tag ? `<span class="swatch-tag">${tag}</span>` : ""}
      ${stock !== undefined && stock <= 5 ? `<span class="swatch-stock">Sisa ${stock}</span>` : ""}
      ${showWishlist ? `<button class="swatch-wishlist" data-action="toggle-wishlist" data-id="${id}"><span class="icon" style="width:15px;height:15px;color:var(--terracotta)">${heartSVG(wished)}</span></button>` : ""}
    </div>`;
}

/* ---------------- KARTU PRODUK ---------------- */
function productCardHTML(p, compact) {
  return `
    <div class="product-card ${compact ? "compact" : ""}">
      <div class="card-image" data-action="open-product" data-id="${p.id}">
        ${swatchHTML({ category: p.category, tag: p.tag, stock: p.stock, showWishlist: true, id: p.id, wished: state.wishlist.includes(p.id), image: p.image })}
        <span class="card-price-tag">${formatIDR(p.price)}</span>
      </div>
      <button class="card-text" data-action="open-product" data-id="${p.id}" style="text-align:left;width:100%">
        <p class="card-name">${p.name}</p>
        <p class="card-seller">${p.seller} &middot; ${p.city}</p>
        <div class="card-rating"><span class="stars">${starsHTML(p.rating)}</span><span class="card-review-count">(${p.reviews}) &middot; Terjual ${p.sold}+</span></div>
        ${p.originalPrice ? `<span class="card-price-original">${formatIDR(p.originalPrice)}</span>` : ""}
      </button>
    </div>`;
}

function renderCarousel(containerId, list) {
  $(containerId).innerHTML = list.map((p) => productCardHTML(p, true)).join("");
}

/* ---------------- FILTER + GRID ---------------- */
function getFiltered() {
  const range = PRICE_RANGES.find((r) => r.key === state.priceRange);
  let list = PRODUCTS.filter(
    (p) => (state.category === "Semua" || p.category === state.category) &&
      (p.name.toLowerCase().includes(state.search.toLowerCase()) || p.seller.toLowerCase().includes(state.search.toLowerCase())) &&
      range.test(p)
  );
  if (state.sortBy === "harga-rendah") list = list.slice().sort((a, b) => a.price - b.price);
  if (state.sortBy === "harga-tinggi") list = list.slice().sort((a, b) => b.price - a.price);
  if (state.sortBy === "rating") list = list.slice().sort((a, b) => b.rating - a.rating);
  if (state.sortBy === "terlaris") list = list.slice().sort((a, b) => b.sold - a.sold);
  return list;
}

function renderGrid() {
  const filtered = getFiltered();
  const visible = filtered.slice(0, state.visibleCount);
  $("#resultCount").textContent = `${filtered.length} produk ditemukan`;
  $("#productGrid").innerHTML = visible.map((p) => productCardHTML(p, false)).join("");
  $("#emptyState").hidden = filtered.length !== 0;
  $("#productGrid").hidden = filtered.length === 0;

  const activeSearchEl = $("#activeSearch");
  if (activeSearchEl) {
    if (state.search) {
      activeSearchEl.hidden = false;
      activeSearchEl.querySelector(".active-search-text").textContent = `Kata kunci: "${state.search}"`;
    } else {
      activeSearchEl.hidden = true;
    }
  }

  const loadMoreBtn = $("#loadMoreBtn");
  if (state.visibleCount < filtered.length) {
    loadMoreBtn.hidden = false;
    loadMoreBtn.textContent = `Muat Lebih Banyak (${filtered.length - state.visibleCount} lagi)`;
  } else {
    loadMoreBtn.hidden = true;
  }
}

function renderCategoryFilters() {
  $("#categoryFilters").innerHTML = CATEGORIES.map(
    (cat) => `<button class="cat-btn ${cat === state.category ? "active" : ""}" data-action="set-category" data-cat="${cat}"><span class="cat-icon">${CATEGORY_ICON[cat] || ""}</span>${cat}</button>`
  ).join("");
}

function renderQuickCats() {
  const el = $("#quickCats");
  if (!el) return;
  el.innerHTML = CATEGORIES.filter((c) => c !== "Semua").map(
    (cat) => `<button class="quick-cat-btn quick-cat" data-action="set-category" data-cat="${cat}">
      <span class="quick-cat-icon">${CATEGORY_ICON[cat] || ""}</span>
      <span class="quick-cat-label">${cat}</span>
    </button>`
  ).join("");
}

function renderRecentlyViewed() {
  const products = state.recentlyViewed.map(byId).filter(Boolean);
  $("#recentlyViewedSection").hidden = products.length === 0;
  if (products.length) renderCarousel("#recentlyViewedList", products);
}

/* ---------------- WISHLIST ---------------- */
function toggleWishlist(id) {
  const has = state.wishlist.includes(id);
  state.wishlist = has ? state.wishlist.filter((x) => x !== id) : [...state.wishlist, id];
  persistWishlist();
  showToast(has ? "Dihapus dari favorit" : "Ditambahkan ke favorit");
  updateCounts();
  renderGrid();
  renderWishlistDrawer();
  if (state.selectedProduct) renderProductModal();
}

function renderWishlistDrawer() {
  const list = state.wishlist.map(byId).filter(Boolean);
  const container = $("#wishlistList");
  if (list.length === 0) {
    container.innerHTML = `<p class="drawer-empty">Belum ada favorit tersimpan.</p>`;
    return;
  }
  container.innerHTML = list.map((p) => `
    <div class="cart-line">
      <div class="swatch swatch--${slug(p.category)}"><span class="swatch-letter">${CATEGORY_LETTER[p.category]}</span></div>
      <div class="cart-line-info">
        <p class="cart-line-name">${p.name}</p>
        <p class="cart-line-meta">${p.seller} · ${p.city}</p>
        <p class="cart-line-price" style="color:var(--terracotta)">${formatIDR(p.price)}</p>
        <button class="remove-btn" style="text-decoration:underline;color:var(--teal);font-size:12px" data-action="wishlist-add-cart" data-id="${p.id}">Tambah ke keranjang</button>
      </div>
      <button class="remove-btn" data-action="toggle-wishlist" data-id="${p.id}"><span class="icon" style="width:16px;height:16px">${SVG.trash}</span></button>
    </div>`).join("");
}

/* ---------------- CART ---------------- */
function addToCart(product, size, qty) {
  const idx = state.cart.findIndex((x) => x.id === product.id && x.size === size);
  if (idx > -1) state.cart[idx].qty += qty;
  else state.cart.push({ id: product.id, size, qty });
  persistCart();
  showToast(`${product.name} ditambahkan ke keranjang`);
  updateCounts();
  renderCartDrawer();
}
function updateCartQty(id, size, delta) {
  state.cart = state.cart
    .map((item) => (item.id === id && item.size === size ? { ...item, qty: item.qty + delta } : item))
    .filter((item) => item.qty > 0);
  persistCart();
  updateCounts();
  renderCartDrawer();
}
function removeFromCart(id, size) {
  state.cart = state.cart.filter((item) => !(item.id === id && item.size === size));
  persistCart();
  updateCounts();
  renderCartDrawer();
}
function cartDetailed() {
  return state.cart.map((item) => ({ ...item, product: byId(item.id) }));
}
function cartSubtotal() { return cartDetailed().reduce((sum, i) => sum + i.product.price * i.qty, 0); }
function cartCount() { return state.cart.reduce((n, i) => n + i.qty, 0); }
function cartDiscount() { const sub = cartSubtotal(); return state.promo ? Math.round(sub * (state.promo.pct / 100)) : 0; }
function cartShipping() {
  const sub = cartSubtotal();
  if (sub === 0) return 0;
  if (state.shippingMethod === "express") return 20000;
  return sub >= 200000 ? 0 : 9000;
}
function cartTotal() { return cartSubtotal() - cartDiscount() + cartShipping(); }

function renderCartDrawer() {
  const items = cartDetailed();
  $("#cartDrawerCount").textContent = cartCount();
  const container = $("#cartItems");
  if (items.length === 0) {
    container.innerHTML = `<p class="drawer-empty">Keranjang Anda masih kosong.</p>`;
    $("#cartSummary").hidden = true;
    return;
  }
  container.innerHTML = items.map((item) => `
    <div class="cart-line">
      <div class="swatch swatch--${slug(item.product.category)}"><span class="swatch-letter">${CATEGORY_LETTER[item.product.category]}</span></div>
      <div class="cart-line-info">
        <p class="cart-line-name">${item.product.name}</p>
        <p class="cart-line-meta">${item.product.seller} · Varian ${item.size}</p>
        <div class="cart-line-row">
          <div class="qty-stepper">
            <button data-action="cart-qty" data-id="${item.id}" data-size="${item.size}" data-delta="-1"><span class="icon" style="width:12px;height:12px">${SVG.minus}</span></button>
            <span>${item.qty}</span>
            <button data-action="cart-qty" data-id="${item.id}" data-size="${item.size}" data-delta="1"><span class="icon" style="width:12px;height:12px">${SVG.plus}</span></button>
          </div>
          <span class="cart-line-price">${formatIDR(item.product.price * item.qty)}</span>
        </div>
      </div>
      <button class="remove-btn" data-action="cart-remove" data-id="${item.id}" data-size="${item.size}"><span class="icon" style="width:16px;height:16px">${SVG.trash}</span></button>
    </div>`).join("");

  const sub = cartSubtotal(), disc = cartDiscount(), ship = cartShipping(), total = cartTotal();
  $("#cartSummary").hidden = false;
  $("#cartSummary").innerHTML = `
    <div class="promo-row">
      <input type="text" id="promoInput" placeholder="Kode promo (coba PASARKU10)" value="${state.promoInputValue || ""}" />
      <button data-action="apply-promo">Pakai</button>
    </div>
    <p class="promo-msg" id="promoMsg"></p>
    <div class="summary-line"><span>Subtotal</span><span>${formatIDR(sub)}</span></div>
    ${state.promo ? `<div class="summary-line"><span>Diskon</span><span>-${formatIDR(disc)}</span></div>` : ""}
    <div class="summary-line"><span>Ongkir</span><span>${ship === 0 ? "Gratis" : formatIDR(ship)}</span></div>
    <div class="summary-total"><span>Total</span><span>${formatIDR(total)}</span></div>
    <button class="btn btn-primary btn-block" data-action="go-checkout">Lanjut ke Checkout</button>
  `;
  if (state.promoError) { $("#promoMsg").textContent = state.promoError; $("#promoMsg").className = "promo-msg promo-error"; }
  if (state.promo) { $("#promoMsg").textContent = `Kode ${state.promo.code} aktif (-${state.promo.pct}%)`; $("#promoMsg").className = "promo-msg promo-ok"; }
}

function applyPromo() {
  const input = $("#promoInput");
  const code = input.value.trim().toUpperCase();
  state.promoInputValue = input.value;
  if (code === "PASARKU10") {
    state.promo = { code, pct: 10 };
    state.promoError = "";
    showToast("Kode promo berhasil dipakai");
  } else {
    state.promo = null;
    state.promoError = "Kode tidak ditemukan";
  }
  renderCartDrawer();
}

/* ---------------- COUNTS ---------------- */
function updateCounts() {
  const wEl = $("#wishlistCount"), cEl = $("#cartCount");
  wEl.hidden = state.wishlist.length === 0; wEl.textContent = state.wishlist.length;
  cEl.hidden = cartCount() === 0; cEl.textContent = cartCount();
}

/* ---------------- MODAL PRODUK ---------------- */
function openProduct(id) {
  const p = byId(id);
  state.selectedProduct = p;
  state.selectedSize = p.sizes[0];
  state.modalQty = 1;
  state.modalTab = "deskripsi";
  state.recentlyViewed = [id, ...state.recentlyViewed.filter((x) => x !== id)].slice(0, 4);
  renderProductModal();
  $("#productOverlay").hidden = false;
  $("#productModal").hidden = false;
  renderRecentlyViewed();
}
function closeProduct() {
  $("#productOverlay").hidden = true;
  $("#productModal").hidden = true;
  state.selectedProduct = null;
}

function renderProductModal() {
  const p = state.selectedProduct;
  if (!p) return;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3);

  const tabContent = state.modalTab === "deskripsi"
    ? `<p class="pm-desc">${p.desc}</p>`
    : `<div style="margin-bottom:24px">${p.reviewsList.map((r) => `
        <div class="review-item">
          <div class="review-top"><span class="review-name">${r.name}</span><span class="review-date">${r.date}</span></div>
          <span class="stars" style="font-size:11px">${starsHTML(r.rating)}</span>
          <p class="review-text">${r.text}</p>
        </div>`).join("")}</div>`;

  $("#productModalContent").innerHTML = `
    <div class="pm-image">${swatchHTML({ category: p.category, tag: p.tag, large: true, image: p.image })}</div>
    <div class="pm-body">
      <button class="icon-btn pm-close" data-action="close-product"><span class="icon">${SVG.x}</span></button>
      <p class="pm-category">${p.category}</p>
      <p class="pm-seller">Dijual oleh <strong>${p.seller}</strong> · ${p.city}</p>
      <h2 class="pm-name">${p.name}</h2>
      <div class="pm-rating-row"><span class="stars">${starsHTML(p.rating)}</span><span>${p.rating} (${p.reviews} ulasan) · Terjual ${p.sold}+</span></div>
      <p class="pm-stock" style="color:${p.stock <= 5 ? "var(--terracotta-dark)" : "var(--muted)"}">${p.stock <= 5 ? `Stok tersisa ${p.stock}` : "Stok tersedia"}</p>
      <div class="pm-price-row"><span class="pm-price">${formatIDR(p.price)}</span>${p.originalPrice ? `<span class="pm-price-original">${formatIDR(p.originalPrice)}</span>` : ""}</div>

      <p class="pm-label">Varian</p>
      <div class="size-options">
        ${p.sizes.map((s) => `<button class="size-btn ${s === state.selectedSize ? "active" : ""}" data-action="select-size" data-size="${s}">${s}</button>`).join("")}
      </div>

      <p class="pm-label">Jumlah</p>
      <div class="qty-stepper pm-qty">
        <button data-action="modal-qty" data-delta="-1"><span class="icon" style="width:13px;height:13px">${SVG.minus}</span></button>
        <span>${state.modalQty}</span>
        <button data-action="modal-qty" data-delta="1"><span class="icon" style="width:13px;height:13px">${SVG.plus}</span></button>
      </div>

      <button class="btn btn-primary btn-block" style="margin-bottom:24px" data-action="confirm-add-cart">
        <span class="icon" style="width:16px;height:16px">${SVG.bag}</span> Tambah ke Keranjang
      </button>

      <div class="pm-tabs">
        <button class="pm-tab ${state.modalTab === "deskripsi" ? "active" : ""}" data-action="modal-tab" data-tab="deskripsi">Deskripsi</button>
        <button class="pm-tab ${state.modalTab === "ulasan" ? "active" : ""}" data-action="modal-tab" data-tab="ulasan">Ulasan</button>
      </div>
      ${tabContent}

      ${related.length ? `
        <p class="pm-label">Produk UMKM Terkait</p>
        <div class="related-grid">
          ${related.map((rp) => `
            <button class="related-item" data-action="open-product" data-id="${rp.id}" style="text-align:left">
              <div class="swatch swatch--${slug(rp.category)}"><span class="swatch-letter" style="font-size:1.5rem">${CATEGORY_LETTER[rp.category]}</span></div>
              <p>${rp.name}</p>
              <p class="related-price">${formatIDR(rp.price)}</p>
            </button>`).join("")}
        </div>` : ""}
    </div>
  `;
}

/* ---------------- FAQ ---------------- */
function renderFaq() {
  $("#faqList").innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question" data-action="toggle-faq" data-index="${i}">
        ${f.q} <span class="icon" style="width:16px;height:16px">${SVG.chevronDown}</span>
      </button>
      <p class="faq-answer">${f.a}</p>
    </div>`).join("");
}
function toggleFaq(index) {
  const item = $(`.faq-item[data-index="${index}"]`);
  const isOpen = item.classList.contains("open");
  $$(".faq-item").forEach((el) => el.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}

/* ---------------- CHECKOUT ---------------- */
function openCheckout() {
  $("#cartOverlay").hidden = true;
  $("#cartDrawer").classList.remove("open");
  $("#checkoutOverlay").hidden = false;
  $("#checkoutModal").hidden = false;
  $("#checkoutForm").hidden = false;
  $("#checkoutSuccess").hidden = true;
  renderCheckoutOptions();
}
function closeCheckout() {
  $("#checkoutOverlay").hidden = true;
  $("#checkoutModal").hidden = true;
}
function renderCheckoutOptions() {
  const sub = cartSubtotal();
  const shippingChoices = [
    { id: "reguler", label: "Reguler (2–5 hari)", price: sub >= 200000 ? 0 : 9000 },
    { id: "express", label: "Express (1–2 hari)", price: 20000 },
  ];
  $("#shippingOptions").innerHTML = shippingChoices.map((m) => `
    <label class="radio-option ${state.shippingMethod === m.id ? "active" : ""}" data-action="set-shipping" data-id="${m.id}">
      <span class="opt-label"><input type="radio" name="shipping" ${state.shippingMethod === m.id ? "checked" : ""} /> ${m.label}</span>
      <span>${m.price === 0 ? "Gratis" : formatIDR(m.price)}</span>
    </label>`).join("");

  const payments = ["Transfer Bank", "E-Wallet", "Bayar di Tempat (COD)"];
  $("#paymentOptions").innerHTML = payments.map((m) => `
    <label class="radio-option ${state.paymentMethod === m ? "active" : ""}" data-action="set-payment" data-id="${m}">
      <span class="opt-label"><input type="radio" name="payment" ${state.paymentMethod === m ? "checked" : ""} /> ${m}</span>
    </label>`).join("");

  $("#checkoutTotal").textContent = formatIDR(cartTotal());
}
function placeOrder(e) {
  e.preventDefault();
  const orderNumber = "PSK-" + Math.floor(100000 + Math.random() * 900000);
  const items = cartDetailed();
  const nama = $("#ckNama").value, telepon = $("#ckTelepon").value, alamat = $("#ckAlamat").value, kota = $("#ckKota").value, catatan = $("#ckCatatan").value;

  const lines = [
    `*Pesanan Baru — ${orderNumber}*`,
    ``,
    ...items.map((i) => `• ${i.product.name} (${i.size}) x${i.qty} — ${formatIDR(i.product.price * i.qty)}`),
    ``,
    `Subtotal: ${formatIDR(cartSubtotal())}`,
    state.promo ? `Diskon (${state.promo.code}): -${formatIDR(cartDiscount())}` : null,
    `Ongkir (${state.shippingMethod === "express" ? "Express" : "Reguler"}): ${cartShipping() === 0 ? "Gratis" : formatIDR(cartShipping())}`,
    `*Total: ${formatIDR(cartTotal())}*`,
    ``,
    `Pembayaran: ${state.paymentMethod}`,
    ``,
    `Nama: ${nama}`,
    `Telepon: ${telepon}`,
    `Alamat: ${alamat}, ${kota}`,
    catatan ? `Catatan: ${catatan}` : null,
  ].filter(Boolean);

  const waLink = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
  $("#waConfirmLink").href = waLink;

  $("#orderNumber").textContent = orderNumber;
  $("#checkoutForm").hidden = true;
  $("#checkoutSuccess").hidden = false;
  state.cart = [];
  state.promo = null;
  state.promoError = "";
  persistCart();
  updateCounts();
  renderCartDrawer();
}

/* ---------------- EVENT WIRING ---------------- */
function init() {
  $$("[data-icon]").forEach((el) => {
    const map = { menu: SVG.menu, heart: heartSVG(false), bag: SVG.bag, "arrow-right": SVG.arrowRight, truck: SVG.truck, "badge-check": SVG.badgeCheck, shield: SVG.shield, "heart-hand": SVG.heartHand, search: SVG.search, x: SVG.x, check: SVG.check, pin: SVG.pin, phone: SVG.phone, mail: SVG.mail, instagram: SVG.instagram, clock: SVG.clock, whatsapp: SVG.chat };
    el.innerHTML = map[el.dataset.icon] || "";
  });

  $("#priceSelect").innerHTML = PRICE_RANGES.map((r) => `<option value="${r.key}">${r.label}</option>`).join("");

  renderCategoryFilters();
  renderQuickCats();
  renderCarousel("#bestSellerList", PRODUCTS.filter((p) => p.isBestSeller));
  renderCarousel("#newArrivalsList", PRODUCTS.filter((p) => p.isNew));
  renderGrid();
  renderFaq();
  updateCounts();

  $("#searchInput").addEventListener("input", (e) => { state.search = e.target.value; state.visibleCount = 8; renderGrid(); });
  $("#heroSearchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#produk").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#clearSearchBtn").addEventListener("click", () => {
    $("#searchInput").value = "";
    state.search = "";
    renderGrid();
  });
  $("#priceSelect").addEventListener("change", (e) => { state.priceRange = e.target.value; state.visibleCount = 8; renderGrid(); });
  $("#sortSelect").addEventListener("change", (e) => { state.sortBy = e.target.value; renderGrid(); });
  $("#loadMoreBtn").addEventListener("click", () => { state.visibleCount += 8; renderGrid(); });

  $("#mobileNavToggle").addEventListener("click", () => { $("#mobileNav").hidden = !$("#mobileNav").hidden; });

  $("#openWishlistBtn").addEventListener("click", () => { renderWishlistDrawer(); $("#wishlistOverlay").hidden = false; $("#wishlistDrawer").classList.add("open"); });
  $("#closeWishlistBtn").addEventListener("click", () => { $("#wishlistOverlay").hidden = true; $("#wishlistDrawer").classList.remove("open"); });
  $("#wishlistOverlay").addEventListener("click", () => { $("#wishlistOverlay").hidden = true; $("#wishlistDrawer").classList.remove("open"); });

  $("#openCartBtn").addEventListener("click", () => { renderCartDrawer(); $("#cartOverlay").hidden = false; $("#cartDrawer").classList.add("open"); });
  $("#closeCartBtn").addEventListener("click", () => { $("#cartOverlay").hidden = true; $("#cartDrawer").classList.remove("open"); });
  $("#cartOverlay").addEventListener("click", () => { $("#cartOverlay").hidden = true; $("#cartDrawer").classList.remove("open"); });

  $("#productOverlay").addEventListener("click", closeProduct);
  $("#closeCheckoutBtn").addEventListener("click", closeCheckout);
  $("#checkoutOverlay").addEventListener("click", closeCheckout);
  $("#finishOrderBtn").addEventListener("click", closeCheckout);

  $("#whatsappBtn").addEventListener("click", () => {
    const link = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent("Halo Pasarku, saya mau tanya-tanya tentang produk.")}`;
    window.open(link, "_blank");
  });

  $("#orderForm").addEventListener("submit", placeOrder);

  $("#mitraForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = $("#mitraNama").value, kontak = $("#mitraKontak").value;
    const msg = `Halo Pasarku, saya ingin mendaftar sebagai mitra UMKM.\n\nNama usaha: ${nama}\nKontak: ${kontak}`;
    $("#waMitraLink").href = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    $("#mitraForm").hidden = true;
    $("#mitraSuccess").hidden = false;
    showToast("Pendaftaran mitra UMKM siap dikirim");
  });

  document.body.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;

    if (action === "toggle-wishlist") toggleWishlist(Number(el.dataset.id));
    if (action === "open-product") openProduct(Number(el.dataset.id));
    if (action === "close-product") closeProduct();
    if (action === "set-category") {
      state.category = el.dataset.cat; state.visibleCount = 8; renderCategoryFilters(); renderGrid();
      if (el.classList.contains("quick-cat")) $("#produk").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action === "select-size") { state.selectedSize = el.dataset.size; renderProductModal(); }
    if (action === "modal-qty") {
      const delta = Number(el.dataset.delta);
      state.modalQty = Math.max(1, Math.min(state.selectedProduct.stock, state.modalQty + delta));
      renderProductModal();
    }
    if (action === "modal-tab") { state.modalTab = el.dataset.tab; renderProductModal(); }
    if (action === "confirm-add-cart") {
      const p = state.selectedProduct;
      addToCart(p, state.selectedSize, state.modalQty);
      closeProduct();
    }
    if (action === "wishlist-add-cart") {
      const p = byId(Number(el.dataset.id));
      addToCart(p, p.sizes[0], 1);
    }
    if (action === "cart-qty") updateCartQty(Number(el.dataset.id), el.dataset.size, Number(el.dataset.delta));
    if (action === "cart-remove") removeFromCart(Number(el.dataset.id), el.dataset.size);
    if (action === "apply-promo") applyPromo();
    if (action === "go-checkout") openCheckout();
    if (action === "toggle-faq") toggleFaq(Number(el.dataset.index));
    if (action === "set-shipping") { state.shippingMethod = el.dataset.id; renderCheckoutOptions(); }
    if (action === "set-payment") { state.paymentMethod = el.dataset.id; renderCheckoutOptions(); }
  });
}

document.addEventListener("DOMContentLoaded", init);
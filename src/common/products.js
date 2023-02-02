const products = [
  //men
  {
    id: "adidasm1",
    product_name: "DESIGNED 4 GAMEDAY PREMIUM FULL-ZIP TRACK TOP",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b43a786deeff4895b21caf4600d8b2d4_9366/Designed_4_Gameday_Premium_Full-Zip_Track_Top_Brown_IC8043_21_model.jpg",
    price: "6,050.0",
  },
  {
    id: "adidasm2",
    product_name: "ADIDAS BASKETBALL HOODIE - UNISEX",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg",
    price: "7,459.0",
  },
  {
    id: "adidasm3",
    product_name: "ESSENTIALS INSULATED HOODED JACKET",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/234906a2c93347c8bb37ad5201095d0d_9366/Essentials_Insulated_Hooded_Jacket_Grey_HE2977_21_model.jpg",
    price: "4,799.0",
  },
  {
    id: "ckm1",
    product_name: "Calvin Klein Jeans T-shirt",
    img_url:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19054674/2022/9/16/41fef07c-414c-45e0-8357-666c60b93ec11663308912368-Calvin-Klein-Jeans-Men-Tshirts-9831663308911777-1.jpg",
    price: "850rs",
  },
  {
    id: "ckm2",
    product_name: "Calvin Klein FullHand T-shirt",
    img_url:
      "https://calvinklein.scene7.com/is/image/CalvinKlein/23100321_030_main?wid=440&hei=580&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
    price: "976rs",
  },
  {
    id: "ckm3",
    product_name: "Calvin Klein  Black T-shirt",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugMsrtilfQemcJoqG8IdTKKPmYdPUA2wuSw&usqp=CAU",
    price: "675rs",
  },
  {
    id: "pumam1",
    product_name: "Mercedes F1  Sweatpants",
    img_url:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/533706/01/fnd/IND/fmt/png/Mercedes-F1-Youth-Sweatpants",
    price: "3,039rs",
  },
  {
    id: "pumam2",
    product_name: "Summer Squeeze Jacket",
    img_url:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/675395/35/fnd/IND/fmt/png/Summer-Squeeze-Youth-Jacket",
    price: "2,399rs",
  },
  {
    id: "pumam3",
    product_name: "Puma Regular Track Pants",
    img_url: "https://m.media-amazon.com/images/I/71qnE1vkOjL._UY550_.jpg",
    price: "899rs",
  },
  {
    id: "zaram1",
    product_name: "TEXTURED BLACK T-SHIRT",
    img_url:
      "https://static.zara.net/photos///2023/V/0/2/p/0761/412/800/2/w/850/0761412800_2_4_1.jpg?ts=1674031057640",
    price: "₹ 1,990rs",
  },
  {
    id: "zaram2",
    product_name: "MEN'S HOODIE LIMITED EDITION",
    img_url:
      "https://static.zara.net/photos///2023/V/0/2/p/0761/437/401/2/w/850/0761437401_2_5_1.jpg?ts=1673538656103",
    price: "₹ 2,990rs",
  },
  {
    id: "zaram3",
    product_name: "CONT CABLE-KNIT SWEATER",
    img_url:
      "https://static.zara.net/photos///2023/V/0/2/p/9598/426/250/2/w/850/9598426250_1_1_1.jpg?ts=1673368309997",
    price: "₹ 3,990.0",
  },
  
  //women

  {
    id: "adidasw1",
    product_name: "ADIDAS BASKETBALL HOODIE - UNISEX",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg",
    price: "7,459.0rs",
  },
  {
    id: "adidasw2",
    product_name: "WORDING OVERSIZED FIT FLEECE FULL-ZIP HOODIE",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa79fd5f40f94c5c8396ae45013cca1d_9366/Wording_Oversized_Fit_Fleece_Full-Zip_Hoodie_Black_HM2814_25_model.jpg",
    price: "4,500.0rs",
  },
  {
    id: "adidasw3",
    product_name: "ALWAYS ORIGINAL POLO WOMEN SHIRT",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2356895528541df96a6af0400ba0ebe_9366/Always_Original_Polo_Shirt_Blue_IC5587_01_laydown.jpg",
    price: "3,999.0rs",
  },
  {
    id: "ckw1",
    product_name: "Slant   Logo Cropped T-Shirt",
    img_url:
      "https://calvinklein.scene7.com/is/image/CalvinKlein/11171760_101_main?wid=720&hei=948&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
    price: "1385.0",
  },
  {
    id: "ckw2",
    product_name: "Calvin Klein White T-shirt",
    img_url:
      "https://rukminim1.flixcart.com/image/612/612/ksxjs7k0/t-shirt/t/0/2/s-j216518yaf-calvin-klein-jeans-original-imag6ef9e9dbvc6m.jpeg?q=70",
    price: "500rs",
  },
  {
    id: "pumaw1",
    product_name: "Puma Regular Fit T-Shirt",
    img_url: "https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg",
    price: "459rs - 700rs",
  },
  {
    id: "pumaw2",
    product_name: "Puma Women's Leggings ",
    img_url: "https://m.media-amazon.com/images/I/61nLGVicJ5L._UL1500_.jpg",
    price: "1,339rs - 2,286rs",
  },
  {
    id: "zaraw1",
    product_name: "FADED MINIMALIST T-SHIRT",
    img_url:
      "https://static.zara.net/photos///2023/V/0/1/p/4424/642/822/2/w/850/4424642822_1_1_1.jpg?ts=1670842913890",
    price: "990rs",
  },
  {
    id: "zaraw2",
    product_name: "FAUX LEATHER JACKET ",
    img_url:
      "https://static.zara.net/photos///2023/V/0/1/p/3427/811/800/2/w/850/3427811800_2_2_1.jpg?ts=1673979103860",
    price: "5,990rs",
  },
  {
    id: "zaraw3",
    product_name: "WOMEN'S BOX KNIT MINI SKIRT ",
    img_url:
      "https://static.zara.net/photos///2023/V/0/1/p/3859/153/800/2/w/850/3859153800_2_1_1.jpg?ts=1673974056815",
    price: "2,990rs",
  },
];

export default products;

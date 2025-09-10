// Step 1: setelah 2 detik munculin lilin
setTimeout(() => {
  document.getElementById("candle").classList.replace("opacity-0", "opacity-20");
}, 2000);

// Step 2: setelah 4 detik ubah background ke gradient + munculin teks
setTimeout(() => {
  const page = document.getElementById("page");
  page.classList.remove("bg-black");
  page.classList.add("bg-gradient-to-br", "from-pink-100", "to-white");

  // lilin redup
  document.getElementById("candle").classList.replace("opacity-20", "opacity-0");

  const content = document.getElementById("content");
  content.classList.remove("hidden");

  setTimeout(() => {
    content.classList.remove("opacity-0");

    const nextBtn = document.getElementById("nextBtn");
    setTimeout(() => {
      nextBtn.classList.remove("opacity-0", "translate-y-6", "pointer-events-none");
    }, 3000);
  }, 100);
}, 4000);

// Step 3: Next button ke long text
document.getElementById("nextBtn").addEventListener("click", () => {
  const content = document.getElementById("content");
  const longTextPage = document.getElementById("longTextPage");

  content.classList.add("opacity-0");
  setTimeout(() => {
    content.classList.add("hidden");
    longTextPage.classList.remove("hidden");

    setTimeout(() => {
      longTextPage.classList.remove("opacity-0");

      // Typed.js
      new Typed("#longText", {
        strings: ["halooo sayaaanggkuuu, hari iniii adalah hari yang sangaaat istimewa, karenaa kitaaa merayakan ulang tahunn orangg yang paling akuuu cintaiii🤍✨. SELAMATTT ULANGG TAHUNN SAYAANGGGKUUUUUU YG PENUH CINTAAA DAN KEBAHAGIAANNNN🤍🤍‼️‼️.. akuuu bersyukurr bangett punyaa sayaaangg, beruntungg bangett akuuu sayaaanggg. you make the ordinary feel magical, and you make my days brighter just by being yourself. kitaaa udahh ngelewatinn banyakk hal barenggg, baikk senangg dann sedihh, ups and down... tiapp momenn samaaa sayaangg, selaluu bikinn hidupp akuu berwarnaaaa🤍🤍. on your birthday, my wish for you is simple, semogaa semuaa harapann dann impiann sayaangg satu persatu mulai tercapaiii, panjangg umur, sehatt selaluuu sayaaanggg, mudah rezekinyaaaa, may ur heart always be full of joy, and may you never forget deeply you are loved (especially by me hihihihihi)🤍🫶.  akuu bakall selaluu adaa buatt dukung sayaangg, apapunn yang sayangg pengen lakuinn🫂. akuu janjii bakal terus dan selaluu adaa di sisi sayaaanggg, nemeninn di setiapp langkahh sayaanggg, ga pedulii mauu gimanapunn keadannyaaa. because no matter what happens, i love you the most, i choose you, today, tomorrow, and always🤍‼️‼️‼️ <br> sekali lagii Happy Birthday, my love. aku sayaaanggg banget sama sayaaangg🤍. semogaa hari inii di isi dengann penuhh cinta, kebahagiaannn, dan hal-hal indahh yang bakal selalu sayaangg kenang🤍🫂‼️"],
        typeSpeed: 0,
        showCursor: false,
        onComplete: () => {
          const nextToGalleryBtn = document.getElementById("nextToGalleryBtn");
          nextToGalleryBtn.classList.remove("hidden");

          // animasi fade in + naik ke atas
          setTimeout(() => {
            nextToGalleryBtn.classList.remove("opacity-0", "translate-y-6");
          }, 100);
        }
      });
    }, 100);
  }, 1000);
});

// Step 4: Next to Gallery
document.getElementById("nextToGalleryBtn").addEventListener("click", () => {
  const longTextPage = document.getElementById("longTextPage");
  const galleryPage = document.getElementById("galleryPage");

  longTextPage.classList.add("opacity-0");
  setTimeout(() => {
    longTextPage.classList.add("hidden");
    galleryPage.classList.remove("hidden");

    setTimeout(() => {
      galleryPage.classList.remove("opacity-0");
    }, 100);
  }, 1000);
});
